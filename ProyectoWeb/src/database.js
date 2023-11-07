2/*const { Client } = require('pg');

const connectionData = {
  user: 'postgres',
  host: 'localhost',
  database: 'Clinica',
  password: 'aa11bb22',
  port: 5432,
}

const client = new Client(connectionData)

client.connect()

client.query('SELECT * FROM PACIENTE', (err, res)=>{
  if(!err){
    console.log(res.rows);
  }else {
    console.log(err.message);
  }
  client.end();
});*/


function validarRut(input) {
  const rutCompleto = input;
  const regex = /^\d{7,8}-[\dkK]$/;
  if(regex.test(rutCompleto)){
      let rutSplit = rutCompleto.split('-');
      let rut = rutSplit[0];
      let digV = rutSplit[1];
      let sum = 0;
      let j = 2;
      
      if(digV == 'K' ){
          digV = 'k';
      }
      for(let i = rut.length - 1; i >=0; i--){
          sum += (rut[i] * j);
          j++;
          if(j > 7){
              j=2;
          }
      }
      
      let vDiv = Math.floor(sum/11);
      let vMult = vDiv * 11;
      let vRes = sum - vMult;
      let vFinal = 11 - vRes;

      if(digV == 'k' && vFinal == 10){
          return true;
      }else if(digV == 0 && vFinal == 11){
          return true;
      }else if (digV == vFinal){
          return true;
      }else {
          return false;
      }
  }else {
          return false;
  }
}

function validarClave(input) {
  const regex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
  if(regex.test(input)){
    return true;
  }else {
    return false;
  }
}

function validarFecha(fecha){
  const fechaActual = new Date();
  return fecha < fechaActual;
}

function validarFormatoTel(telefono){
  const regex = /^9\d{0,8}$/;
  return regex.test(telefono);
}

const express = require('express');
const { Pool } = require('pg');
const bodyParser = require('body-parser');
const session = require('express-session'); // Agregamos express-session
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname));
app.set('view engine', 'ejs'); //Se configura ejs como motor de plantillas

const browserSync = require('browser-sync').create();

// Configura Browser-Sync para recargar automáticamente los cambios realizados
browserSync.init({
  proxy: 'http://localhost:3000', // Apunta a nuestro servidor
  files: ['views/**/*.ejs', 'public/css/**/*.css'],
});
// Configuración de express-session
app.use(session({
  secret: 'tu_secreto', 
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false, // 
    maxAge: 1800000 // Tiempo de expiración de la sesión en milisegundos
  },
}));


//Se conecta con la base de datos
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'Clinica',
  password: 'aa11bb22',
  port: 5432,
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

//Se establece para que todos los archivos ejs tengan acceso a user
app.use((req, res, next) => {
  res.locals.user = req.session.user || null;
  next();
});

app.use((req, res, next) => {
  next();
});


//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//CONSULTADOS LADO DEL PACIENTE

// Obtiene los datos del formulario REGISTRO
app.post('/registrar', (req, res) => {
  const { nombre, apellido, rut, fecnac, correo, clave, genero, telefono } = req.body;
  const errores = {};
  const valoresValidos = { nombre: nombre, apellidos: apellido, correo: correo, genero: genero};

  if(!validarRut(rut)){
    errores.rut = 'Ingrese un rut válido';
  }else{
    valoresValidos.rut = rut;
  }

  if(!validarClave(clave)){
    errores.clave = 'Ingrese una clave válida:\n-Debe tener al menos 8 caracteres.\n-Debe incluir al menos una letra mayúscula.\n-Debe contener al menos un número.';;
  }else{
    valoresValidos.clave = clave;
  }

  if(validarFecha(fecnac)){
    errores.fecNac = 'Ingrese una fecha de nacimiento válida';
  }else{
    valoresValidos.fecNac = fecnac;
  }

  if(!validarFormatoTel(telefono)){
    errores.telefono = 'Ingrese un formato de telefono válido';
  }else{
    valoresValidos.telefono = telefono;
  }

  // Verificar si el RUT ya está registrado
  pool.query("SELECT * FROM PACIENTE WHERE paci_rut = $1", [rut], (error, resultado) => {
    if (error) {
      console.error('Error al buscar el RUT en la base de datos:', error);
      res.status(500).send('Error al buscar el RUT en la base de datos');
    } else if (resultado.rows.length > 0) {
      errores.rut = 'El RUT ya está registrado en la base de datos';
    }

    // Verificar si el teléfono ya está registrado
    pool.query("SELECT * FROM PACIENTE WHERE paci_telefono = $1", [telefono], (error, resultado) => {
      if (error) {
        console.error('Error al buscar el teléfono en la base de datos:', error);
        res.status(500).send('Error al buscar el teléfono en la base de datos');
      } else if (resultado.rows.length > 0) {
        errores.telefono = 'El teléfono ya está registrado en la base de datos';
      }

      // Verificar si el correo ya está registrado
      pool.query("SELECT * FROM PACIENTE WHERE paci_correo = $1", [correo], (error, resultado) => {
        if (error) {
          console.error('Error al buscar el correo en la base de datos:', error);
          res.status(500).send('Error al buscar el correo en la base de datos');
        } else if (resultado.rows.length > 0) {
          errores.correo = 'El correo ya está registrado en la base de datos';
        }

        if (Object.keys(errores).length > 0) {
          res.render('viewsPaciente/errorLogin', { errores, valoresValidos });
        } else {
          // Si no hay errores, insertar el nuevo registro
          const insertQuery = `
            INSERT INTO PACIENTE (paci_nombre, paci_apellido, paci_rut, paci_fechanac, paci_correo, paci_clave, paci_genero, paci_telefono)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
          `;
          pool.query(insertQuery, [nombre, apellido, rut, fecnac, correo, clave, genero, telefono], (error, resultado) => {
            if (error) {
              console.error('Error al insertar el registro:', error);
              res.status(500).send('Error al insertar el registro');
            } else {
              console.log('Registro insertado con éxito');
              res.redirect('./signInExitoso.html');
            }
          });
        }
      });
    });
  });
});


//Obtiene los datos del formulario de login e inicia sesion

app.post('/signIn',(req, res) => {
  const { rutCorreo, loClave } = req.body;

  const correoRutValido = { correoRut: rutCorreo };

  const selectQueryPaciente = `
    SELECT * FROM PACIENTE WHERE paci_rut = $1 OR paci_correo = $1
  `;

  const selectQueryProfesional = `
    SELECT * FROM PROFESIONAL WHERE prof_correo = $1
  `;

  pool.query(selectQueryPaciente, [rutCorreo])
  .then(resultadosPaciente => {

    if(resultadosPaciente.rows.length === 0){
      pool.query(selectQueryProfesional, [rutCorreo])
      .then(resultadosProfesional => {
        if(resultadosProfesional.rows.length === 0){
          res.render('viewsPaciente/errorSignIn', { error: 'Esta cuenta no existe', correoRutValido});
        }else if (resultadosProfesional.rows.length === 1){
          const profesional = resultadosProfesional.rows[0];
          if(profesional.prof_clave === loClave){
            req.session.user = profesional;

            res.render('viewsProfesional/inicioSesionProfesional', { user: profesional});
          }else {
            res.render('viewsPaciente/errorSignIn', { error: 'Contraseña incorrecta', correoRutValido});
          }
        }
      })
    }else if (resultadosPaciente.rows.length === 1) {
      const usuario = resultadosPaciente.rows[0];
      if(usuario.paci_clave === loClave){
        req.session.user = usuario; // Almacena la información del usuario en la sesión

        res.render('viewsPaciente/inicioSesionUsuario', { user: usuario });
      } else {
        res.render('viewsPaciente/errorSignIn', { error: 'Contraseña incorrecta', correoRutValido});
      }
    }
  })
  .catch(error => {
    console.error(error);
    res.status(500).send('Error interno del servidor');
  });
});


/*
app.use((req, res, next) => {
  if (req.session && !req.session.user) {
    // La sesión ha expirado, redirige al usuario a la página principal
    console.log('La sesión ha expirado');
    res.redirect('/index.html');
  } else {
    next();
  }
});
*/

//Funcion para cerrar sesion
function logout() {
  // Realiza una solicitud al servidor para cerrar sesión
  fetch('/logout', {
    method: 'GET',
  })
  .then((response) => {
    if (response.redirected) {
      window.location.href = response.url;
    }
  })
  .catch((error) => {
    console.error(error);
  });
}

//Controlador para cerrar sesion
app.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error(err);
    }
    res.redirect('./index.html'); // Redirige al usuario a la página de inicio u otra página de tu elección después de cerrar sesión.
  });
});

//Obtiene los datos del formulario de ReservaUno
app.post('/reservaUno',(req, res) => {
  const { especialidad } = req.body;
  req.session.especialidad = especialidad;

  const selectQuery = `
  SELECT CM.CITA_DIS_FECHA, PR.PROF_NOMBRES, PR.PROF_APELLIDOS, PR.PROF_RUT, ES.ESPE_NOMBRE   
    FROM CITA_MEDICA CM JOIN PROFESIONAL PR 
    ON CM.CITA_PROF_RUT = PR.PROF_RUT
	  JOIN ESPECIALIDAD ES 
	  ON PR.PROF_ESP_CODIGO = ES.ESPE_CODIGO
    WHERE PR.prof_esp_codigo = $1
    AND CM.CITA_DISPONIBLE = TRUE
    AND CM.CITA_DIS_FECHA >= CURRENT_DATE
    ORDER BY PR.PROF_RUT, CM.CITA_DIS_FECHA;
  `

  pool.query(selectQuery, [especialidad])
    .then(resultados => {
      if (resultados.rows.length === 0) {
        // No hay resultados, muestra un mensaje
        res.render('viewsPaciente/sinResultados');
      } else {
        // Hay resultados, renderiza la página HTML con los resultados utilizando un motor de plantillas
        res.render('viewsPaciente/reservaDos', { resultados });
      }
    })
    .catch(error => {
      // Manejo de errores
      console.error(error);
      res.status(500).send('Error interno del servidor');
    });

});


//Actualiza las horas disponibles segun el usuario haga click en la fecha que desea
app.post('/actualizarFechas',(req, res) => {
  const especialidad = req.session.especialidad;
  const newDates = req.body.action;
  const selectQuery = `
  SELECT CM.CITA_DIS_FECHA, PR.PROF_NOMBRES, PR.PROF_APELLIDOS, PR.PROF_RUT, ES.ESPE_NOMBRE
    FROM CITA_MEDICA CM JOIN PROFESIONAL PR 
    ON CM.CITA_PROF_RUT = PR.PROF_RUT
    JOIN ESPECIALIDAD ES 
	  ON PR.PROF_ESP_CODIGO = ES.ESPE_CODIGO
    WHERE PR.prof_esp_codigo = $1
    AND CM.CITA_DISPONIBLE = TRUE
    AND CM.CITA_DIS_FECHA >= CURRENT_DATE
    ORDER BY
      CASE
      WHEN DATE(CM.CITA_DIS_FECHA) = $2 THEN 1
      ELSE 2
    END,
    PR.PROF_RUT,
    CM.CITA_DIS_FECHA;
  `

  pool.query(selectQuery, [especialidad, newDates])
    .then(resultados => {
      // Renderiza la página HTML con los resultados utilizando un motor de plantillas
      res.render('viewsPaciente/reservaDos', { resultados });
    })
    .catch(error => {
      // Manejo de errores
      console.error(error);
      res.status(500).send('Error interno del servidor');
    });

});

//Usuario selecciona hora que desea y lo envia al ultimo paso de reservar hora
app.post('/seleccionarHora', (req, res) => {
  const especialidad = req.session.especialidad;
  const selectProf = req.body.selectProf
  const selectHour = req.body.selectHour;
  const selectQuery = `
  SELECT CM.CITA_ID, CM.CITA_DIS_FECHA, PR.PROF_NOMBRES, PR.PROF_APELLIDOS, PR.PROF_RUT, ES.ESPE_NOMBRE   
    FROM CITA_MEDICA CM JOIN PROFESIONAL PR 
    ON CM.CITA_PROF_RUT = PR.PROF_RUT
	  JOIN ESPECIALIDAD ES 
	  ON PR.PROF_ESP_CODIGO = ES.ESPE_CODIGO
    WHERE PR.prof_esp_codigo = $1
    AND CM.CITA_DISPONIBLE = TRUE
	  AND PR.PROF_RUT = $2
	  AND CM.CITA_DIS_FECHA = $3
    ORDER BY PR.PROF_RUT, CM.CITA_DIS_FECHA;
  `
  pool.query(selectQuery, [especialidad, selectProf, selectHour])
    .then(resultados => {
      // Renderiza la página HTML con los resultados utilizando un motor de plantillas
      const citaId = resultados.rows[0].cita_id;
      req.session.citaId = citaId;
      const citaData = resultados.rows; // Guarda todos los datos en una variable citaData
      req.session.citaData = citaData;


      res.render('viewsPaciente/reservaTres', { resultados });
    })
    .catch(error => {
      // Manejo de errores
      console.error(error);
      res.status(500).send('Error interno del servidor');
    });
});

//Usuario confirma hora con su cuenta
app.post('/confirmarHoraUsuario', (req, res) => {
  const { correoRut, claveUsuario } = req.body;
  const citaId = req.session.citaId;
  const resultados = req.session.citaData;

  const correoRutValido = { correoRut: correoRut };

  const selectQuery = `
    SELECT PACI_RUT FROM PACIENTE WHERE (PACI_RUT = $1 OR PACI_CORREO = $1)
  `;

  const selectQuery2 = `
    SELECT * FROM PACIENTE WHERE PACI_CLAVE = $1  
  `;

  const updateQuery = `
    UPDATE CITA_MEDICA 
    SET CITA_PACI_RUT = $1, CITA_DISPONIBLE = FALSE
    WHERE CITA_ID = $2
    AND CITA_PACI_RUT IS NULL
    AND CITA_DISPONIBLE = TRUE
  `;

  pool.query(selectQuery, [correoRut])
    .then(resultadosSelect1 => {
      if(resultadosSelect1.rows.length === 1){
        pool.query(selectQuery2, [claveUsuario])
        .then(resultadosSelect2 =>{
          if(resultadosSelect2.rows.length === 1){
            const paciRut = resultadosSelect1.rows[0].paci_rut;
            pool.query(updateQuery, [paciRut, citaId])
            .then(updateResultados => {
              if(updateResultados.rowCount === 1){
                console.log('Se agendo la cita correctamente')
                res.render('viewsPaciente/reservaFinal');
              }else {
                console.log('Ha ocurrido un error, no se pudo agendar la cita');
                throw new Error("Error, no se ha podido agendar la cita");
              }
            })
            .catch(error => {
              console.error(error);
            });
          }else {
            console.log("Clave incorrecta");
            res.render('viewsPaciente/errorReservaFinalUsuario', { error: 'Contraseña incorrecta', correoRutValido, resultados, claveUsuario});
          }
        })
      }else{
        console.log("Esta cuenta no existe");
        res.render('viewsPaciente/errorReservaFinalUsuario', { error: 'Esta cuenta no existe', correoRutValido, resultados, claveUsuario});
      }
    })
});

//Usuario confirma su hora como invitado, y se registra el nuevo paciente a la base de datos
app.post('/confirmarHoraInvitado', (req, res) => {
  const { nombre, apellidos, rut, fechaNac, correo, clave, genero, telefono } = req.body;
  const citaId = req.session.citaId;
  const resultados = req.session.citaData;
  const errores = {};
  const valoresValidos = { nombre: nombre, apellidos: apellidos, correo: correo, genero: genero};


    if(!validarRut(rut)){
      errores.rut = 'Ingrese un rut válido';
    }else{
      valoresValidos.rut = rut;
    }

    if(!validarClave(clave)){
      errores.clave = 'Ingrese una clave válida:\n-Debe tener al menos 8 caracteres.\n-Debe incluir al menos una letra mayúscula.\n-Debe contener al menos un número.';;
    }else{
      valoresValidos.clave = clave;
    }

    if(validarFecha(fechaNac)){
      errores.fecNac = 'Ingrese una fecha de nacimiento válida';
    }else{
      valoresValidos.fecNac = fechaNac;
    }

    if(!validarFormatoTel(telefono)){
      errores.telefono = 'Ingrese un formato de telefono válido';
    }else{
      valoresValidos.telefono = telefono;
    }

    const updateQuery = `
      UPDATE CITA_MEDICA 
      SET CITA_PACI_RUT = $1, CITA_DISPONIBLE = FALSE
      WHERE CITA_ID = $2
      AND CITA_PACI_RUT IS NULL
      AND CITA_DISPONIBLE = TRUE;
    `;

    pool.query("SELECT * FROM PACIENTE WHERE paci_rut = $1", [rut], (error, resultado) => {
      if (error) {
        console.error('Error al buscar el RUT en la base de datos:', error);
        res.status(500).send('Error al buscar el RUT en la base de datos');
      } else if (resultado.rows.length > 0) {
        errores.rut = 'El RUT ya está registrado en la base de datos';
      }
  
      // Verificar si el teléfono ya está registrado
      pool.query("SELECT * FROM PACIENTE WHERE paci_telefono = $1", [telefono], (error, resultado) => {
        if (error) {
          console.error('Error al buscar el teléfono en la base de datos:', error);
          res.status(500).send('Error al buscar el teléfono en la base de datos');
        } else if (resultado.rows.length > 0) {
          errores.telefono = 'El teléfono ya está registrado en la base de datos';
        }
  
        // Verificar si el correo ya está registrado
        pool.query("SELECT * FROM PACIENTE WHERE paci_correo = $1", [correo], (error, resultado) => {
          if (error) {
            console.error('Error al buscar el correo en la base de datos:', error);
            res.status(500).send('Error al buscar el correo en la base de datos');
          } else if (resultado.rows.length > 0) {
            errores.correo = 'El correo ya está registrado en la base de datos';
          }
  
          if (Object.keys(errores).length > 0) {
            res.render('viewsPaciente/errorReservaFinalInvitado', { errores, valoresValidos, resultados });
          } else {
            // Si no hay errores, insertar el nuevo registro
            const insertQuery = `
              INSERT INTO PACIENTE (paci_nombre, paci_apellido, paci_rut, paci_fechanac, paci_correo, paci_clave, paci_genero, paci_telefono)
              VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
            `;
            pool.query(insertQuery, [nombre, apellidos, rut, fechaNac, correo, clave, genero, telefono], (error, resultado) => {
              if (error) {
                console.error('Error al insertar el registro:', error);
                res.status(500).send('Error al insertar el registro');
              } else {
                pool.query(updateQuery, [rut, citaId])
                .then(updateResultados => {
                if(updateResultados.rowCount === 1){
                  console.log('Se agendo la cita correctamente')
                  res.render('viewsPaciente/reservaFinal');
                }else {
                  console.log('Ha ocurrido un error, no se pudo agendar la cita');
                  throw new Error("Error, no se ha podido agendar la cita");
                }
            })
            .catch(error => {
              console.error(error);
            });
              }
            });
          }
        });
      });
    });
});

//Usuario hace consulta para anular hora

app.post('/anularHoraConsulta', (req, res) => {
  const { rut, clave } = req.body;

  const rutValido = { rut: rut };

  const selectQuery = `
    SELECT * FROM PACIENTE WHERE paci_rut = $1
  `;

  const selectQuery2 = `
    SELECT CM.CITA_ID, CM.CITA_DIS_FECHA, PR.PROF_NOMBRES, PR.PROF_APELLIDOS, PR.PROF_RUT, ES.ESPE_NOMBRE   
    FROM CITA_MEDICA CM JOIN PROFESIONAL PR 
    ON CM.CITA_PROF_RUT = PR.PROF_RUT
    JOIN ESPECIALIDAD ES 
    ON PR.PROF_ESP_CODIGO = ES.ESPE_CODIGO
    WHERE CM.CITA_PACI_RUT = $1 AND CM.CITA_DIS_FECHA >= NOW() + INTERVAL '2 DAY'
    ORDER BY CM.CITA_DIS_FECHA;
  `;

  pool.query(selectQuery, [rut])
  .then(resultados => {

    if(resultados.rows.length === 0){
      res.render('errorAnularHora', { error: 'Esta cuenta no existe', rutValido});
    }else if (resultados.rows.length === 1) {
      const usuario = resultados.rows[0];
      if(usuario.paci_clave === clave){
        pool.query(selectQuery2, [rut])
            .then(resultados2 => {
              res.render('viewsPaciente/anularHoraDos', { resultados2 });
            })
            .catch(error2 => {
              console.error(error2);
              res.status(500).send('Error en la segunda consulta');
            });

      } else {
        res.render('viewsPaciente/errorAnularHora', { error: 'Contraseña incorrecta', rutValido});
      }
    }
  })
  .catch(error => {
    console.error(error);
    res.status(500).send('Error interno del servidor');
  });
});

app.post('/anularHoraConsultaLogin', (req, res) => {
  const user = req.session.user;
  const rut = user.paci_rut;

    const selectQuery2 = `
      SELECT CM.CITA_ID, CM.CITA_DIS_FECHA, PR.PROF_NOMBRES, PR.PROF_APELLIDOS, PR.PROF_RUT, ES.ESPE_NOMBRE   
      FROM CITA_MEDICA CM JOIN PROFESIONAL PR 
      ON CM.CITA_PROF_RUT = PR.PROF_RUT
      JOIN ESPECIALIDAD ES 
      ON PR.PROF_ESP_CODIGO = ES.ESPE_CODIGO
      WHERE CM.CITA_PACI_RUT = $1 AND CM.CITA_DIS_FECHA >= NOW() + INTERVAL '2 DAY'
      ORDER BY CM.CITA_DIS_FECHA;
    `;

    pool.query(selectQuery2, [rut])
      .then(resultados2 => {
        res.render('viewsPaciente/anularHoraDos', { resultados2 });
      })
      .catch(error2 => {
        console.error(error2);
        res.status(500).send('Error en la segunda consulta');
      });
});



app.post('/anularHoraFinal', (req, res) => {
  const horaAnular = req.body.hora;

  const updateQuery = `
  UPDATE CITA_MEDICA 
  SET CITA_PACI_RUT = NULL, CITA_DISPONIBLE = TRUE
  WHERE CITA_ID = $1;
  `;

  pool.query(updateQuery, [horaAnular])
  .then(resultado => {
    res.render('viewsPaciente/anularHoraExito');
  })
  .catch(error => {
    res.status(500).send('Error al anular la cita');
  });
  
});

app.post('/historialMedConsulta', (req, res) => {
  const { rut, clave } = req.body;

  const rutValido = { rut: rut };

  const selectQuery = `
    SELECT * FROM PACIENTE WHERE paci_rut = $1 OR paci_correo = $1
  `;

  const selectQuery2 = `
  SELECT CM.CITA_DETALLE, PR.PROF_NOMBRES, PR.PROF_APELLIDOS, ES.ESPE_NOMBRE, CM.CITA_DIS_FECHA 
	  FROM CITA_MEDICA CM JOIN PROFESIONAL PR
	  ON CM.CITA_PROF_RUT = PR.PROF_RUT
		  JOIN ESPECIALIDAD ES
		  ON PR.PROF_ESP_CODIGO = ES.ESPE_CODIGO
	  WHERE CM.CITA_PACI_RUT = $1 AND CM.CITA_DIS_FECHA < NOW()
	  ORDER BY CM.CITA_DIS_FECHA;
  `;

  pool.query(selectQuery, [rut])
  .then(resultados => {

    if(resultados.rows.length === 0){
      res.render('viewsPaciente/errorHistorialMed', { error: 'Esta cuenta no existe', rutValido});
    }else if (resultados.rows.length === 1) {
      const usuario = resultados.rows[0];
      if(usuario.paci_clave === clave){
        pool.query(selectQuery2, [rut])
            .then(resultados2 => {
              res.render('viewsPaciente/historialMedDos', { resultados2 });
            })
            .catch(error2 => {
              console.error(error2);
              res.status(500).send('Error en la segunda consulta');
            });

      } else {
        res.render('viewsPaciente/errorHistorialMed', { error: 'Contraseña incorrecta', rutValido});
      }
    }
  })
  .catch(error => {
    console.error(error);
    res.status(500).send('Error interno del servidor');
  });
  
});

app.post('/historialMedConsultaLogin', (req, res) => {
  const user = req.session.user;
  const rut = user.paci_rut;

    const selectQuery2 = `
      SELECT CM.CITA_DETALLE, PR.PROF_NOMBRES, PR.PROF_APELLIDOS, ES.ESPE_NOMBRE, CM.CITA_DIS_FECHA 
      FROM CITA_MEDICA CM
      JOIN PROFESIONAL PR ON CM.CITA_PROF_RUT = PR.PROF_RUT
      JOIN ESPECIALIDAD ES ON PR.PROF_ESP_CODIGO = ES.ESPE_CODIGO
      WHERE CM.CITA_PACI_RUT = $1 AND CM.CITA_DIS_FECHA < NOW()
      ORDER BY CM.CITA_DIS_FECHA;
    `;

    pool.query(selectQuery2, [rut])
      .then(resultados2 => {
        res.render('viewsPaciente/historialMedDos', { resultados2 });
      })
      .catch(error2 => {
        console.error(error2);
        res.status(500).send('Error en la segunda consulta');
      });
});

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------
//CONSULTAS LADO DEL PROFESIONAL
app.post('/historialMedConsultaProfesionales', (req, res) => {
  const { rut } = req.body;

  const rutValido = { rut: rut };
  
  const selectQuery = `
    SELECT * FROM PACIENTE WHERE paci_rut = $1
  `;

  const selectQuery2 = `
  SELECT CM.CITA_DETALLE, PR.PROF_NOMBRES, PR.PROF_APELLIDOS, ES.ESPE_NOMBRE, CM.CITA_DIS_FECHA  
	  FROM CITA_MEDICA CM JOIN PROFESIONAL PR
	  ON CM.CITA_PROF_RUT = PR.PROF_RUT
		  JOIN ESPECIALIDAD ES
		  ON PR.PROF_ESP_CODIGO = ES.ESPE_CODIGO
	  WHERE CM.CITA_PACI_RUT = $1 AND CM.CITA_DIS_FECHA < NOW()
	  ORDER BY CM.CITA_DIS_FECHA;
  `;

  pool.query(selectQuery, [rut])
  .then(resultados => {
    if(resultados.rows.length === 0){
      if(!validarRut(rut)){
        res.render('viewsProfesional/errorHistorialMedProf', { error: 'Este rut no es valido', rutValido});
      } else {
        res.render('viewsProfesional/errorHistorialMedProf', { error: 'Este rut no esta registrado en nuestra base de datos', rutValido});
      }
    }else if(resultados.rows.length === 1){
      pool.query(selectQuery2, [rut])
            .then(resultados2 => {
              res.render('viewsProfesional/historialMedProfDos', { resultados, resultados2 });
            })
            .catch(error2 => {
              console.error(error2);
              res.status(500).send('Error en la segunda consulta');
            });
    }
  })
  .catch(error => {
    console.error(error);
    res.status(500).send('Error interno del servidor');
  });
});

//Redirige a la pagina principal de los profesionales
app.get('/inicioSesionProfesional', (req, res) => {
  res.render('viewsProfesional/inicioSesionProfesional'); // Renderiza la plantilla EJS
});

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
});


app.post('/administrarHoraProfesional', (req, res) => {
  const user = req.session.user;
  const rut = user.prof_rut;

  const selectQuery = `
    SELECT PA.PACI_NOMBRE, PA.PACI_APELLIDO, PA.PACI_RUT, ES.ESPE_NOMBRE, CM.CITA_SALA_NUM, CM.CITA_DIS_FECHA, CM.CITA_ID
	  FROM PACIENTE PA RIGHT JOIN CITA_MEDICA CM
	ON PA.PACI_RUT = CM.CITA_PACI_RUT 
		JOIN PROFESIONAL PR 
		ON CM.CITA_PROF_RUT = PR.PROF_RUT
		JOIN ESPECIALIDAD ES
		ON PR.PROF_ESP_CODIGO = ES.ESPE_CODIGO
		WHERE CITA_PROF_RUT = $1 AND CM.CITA_DIS_FECHA > NOW()
		ORDER BY CM.CITA_DIS_FECHA;
  `;

  const selectQuery2 = `
    SELECT ESPE_NOMBRE FROM ESPECIALIDAD ES JOIN PROFESIONAL PR
	    ON ES.ESPE_CODIGO = PR.PROF_ESP_CODIGO
	    WHERE PR.PROF_RUT = $1;
  `;

  const selectQuery3 = `
    SELECT * FROM SALA
  `;

  Promise.all([
    pool.query(selectQuery, [rut]),
    pool.query(selectQuery2, [rut]),
    pool.query(selectQuery3),
  ])
    .then(([resultados, resultados2, resultados3]) => {
      res.render('viewsProfesional/administrarHorasProf', { resultados, resultados2, resultados3} );
    })
    .catch(error => {
      console.error(error);
      res.status(500).send('Error interno del servidor');
    });
})

app.post('/guardarCambiosCita', (req, res) => {
  const { citaMedicaId, fechaCita, horaCita, index} = req.body;
  const user = req.session.user;
  const rut = user.prof_rut;
  const fechaFinal = `${fechaCita} ${horaCita}`;

  const selectQuery = `
    SELECT PA.PACI_NOMBRE, PA.PACI_APELLIDO, PA.PACI_RUT, ES.ESPE_NOMBRE, CM.CITA_SALA_NUM, CM.CITA_DIS_FECHA, CM.CITA_ID
	  FROM PACIENTE PA RIGHT JOIN CITA_MEDICA CM
	ON PA.PACI_RUT = CM.CITA_PACI_RUT 
		JOIN PROFESIONAL PR 
		ON CM.CITA_PROF_RUT = PR.PROF_RUT
		JOIN ESPECIALIDAD ES
		ON PR.PROF_ESP_CODIGO = ES.ESPE_CODIGO
		WHERE CITA_PROF_RUT = $1 AND CM.CITA_DIS_FECHA > NOW()
		ORDER BY CM.CITA_DIS_FECHA;
  `;

  const selectQuery2 = `
    SELECT ESPE_NOMBRE FROM ESPECIALIDAD ES JOIN PROFESIONAL PR
	    ON ES.ESPE_CODIGO = PR.PROF_ESP_CODIGO
	    WHERE PR.PROF_RUT = $1;
  `;

  const selectQuery3 = `
    SELECT * FROM SALA
  `;

  const disponilidadSalasQuery = `
    SELECT SALA.SALA_NUMERO
    FROM SALA
    WHERE SALA.SALA_NUMERO NOT IN (
      SELECT CITA_SALA_NUM
      FROM CITA_MEDICA
      WHERE CITA_DIS_FECHA = $1
    )
  `;

  const disponibilidadProfesionalQuery = `
    SELECT * FROM CITA_MEDICA
    WHERE CITA_PROF_RUT = $1 AND CITA_DIS_FECHA = $2
  `;

  pool.query(disponibilidadProfesionalQuery, [ rut, fechaFinal])
  .then(resultadosDisProf => {
    if(resultadosDisProf.rowCount === 0){
      pool.query(disponilidadSalasQuery, [fechaFinal])
    .then(resultados4 =>{
      if(resultados4.rowCount > 0){
        pool.query(selectQuery3)
            .then(resultados3 => {
              // Ejecutar la segunda consulta para obtener resultados2
              pool.query(selectQuery2, [rut])
                .then(resultados2 => {
                  // Obtener los resultados de la primera consulta
                  pool.query(selectQuery, [rut])
                    .then(resultados => {
                      res.render('viewsProfesional/administrarHoraEditarHora', { resultados, resultados2, resultados3, resultados4, fechaCita, horaCita, citaMedicaId});
                    })
                    .catch(error => {
                      console.error(error);
                      res.status(500).send('Error interno del servidor');
                    });
                })
                .catch(error => {
                  console.error(error);
                  res.status(500).send('Error interno del servidor');
                });
            })
            .catch(error => {
              console.error(error);
              res.status(500).send('Error interno del servidor');
            });
      }
  }).catch(error => {
    console.error("No hay salas disponibles");
    pool.query(selectQuery3)
            .then(resultados3 => {
              // Ejecutar la segunda consulta para obtener resultados2
              pool.query(selectQuery2, [rut])
                .then(resultados2 => {
                  // Obtener los resultados de la primera consulta
                  pool.query(selectQuery, [rut])
                    .then(resultados => {
                      res.render('viewsProfesional/editarHoraNoSalasDis', { resultados, resultados2, resultados3, fechaCita, horaCita});
                    })
                    .catch(error => {
                      console.error(error);
                      res.status(500).send('Error interno del servidor');
                    });
                })
                .catch(error => {
                  console.error(error);
                  res.status(500).send('Error interno del servidor');
                });
            })
            .catch(error => {
              console.error(error);
              res.status(500).send('Error interno del servidor');
            });
  });
    } else{
        pool.query(selectQuery3)
            .then(resultados3 => {
              // Ejecutar la segunda consulta para obtener resultados2
              pool.query(selectQuery2, [rut])
                .then(resultados2 => {
                  // Obtener los resultados de la primera consulta
                  pool.query(selectQuery, [rut])
                    .then(resultados => {
                      res.render('viewsProfesional/editarHoraErrorDisProfDos', { resultados, resultados2, resultados3, fechaCita, horaCita, index});
                    })
                    .catch(error => {
                      console.error(error);
                      res.status(500).send('Error interno del servidor');
                    });
                })
                .catch(error => {
                  console.error(error);
                  res.status(500).send('Error interno del servidor');
                });
            })
            .catch(error => {
              console.error(error);
              res.status(500).send('Error interno del servidor');
            });
    }
  })
});

app.post('/guardarCambiosCitaFinal', (req, res) => {
  const { fechaCita, horaCita, salaCita } = req.body;
  const user = req.session.user;
  const rut = user.prof_rut;
  const fechaFinal = `${fechaCita} ${horaCita}`;


  const updateQuery = `
    UPDATE CITA_MEDICA
    SET CITA_SALA_NUM = $1, CITA_DIS_FECHA = $2
    WHERE CITA_ID = $3;
  `;

  const selectQuery = `
    SELECT PA.PACI_NOMBRE, PA.PACI_APELLIDO, PA.PACI_RUT, ES.ESPE_NOMBRE, CM.CITA_SALA_NUM, CM.CITA_DIS_FECHA, CM.CITA_ID
	  FROM PACIENTE PA RIGHT JOIN CITA_MEDICA CM
	ON PA.PACI_RUT = CM.CITA_PACI_RUT 
		JOIN PROFESIONAL PR 
		ON CM.CITA_PROF_RUT = PR.PROF_RUT
		JOIN ESPECIALIDAD ES
		ON PR.PROF_ESP_CODIGO = ES.ESPE_CODIGO
		WHERE CITA_PROF_RUT = $1 AND CM.CITA_DIS_FECHA > NOW()
		ORDER BY CM.CITA_DIS_FECHA;
  `;

  const selectQuery2 = `
    SELECT ESPE_NOMBRE FROM ESPECIALIDAD ES JOIN PROFESIONAL PR
	    ON ES.ESPE_CODIGO = PR.PROF_ESP_CODIGO
	    WHERE PR.PROF_RUT = $1;
  `;

  const selectQuery3 = `
    SELECT * FROM SALA
  `;

  Promise.all([
    pool.query(updateQuery, [rut, salaCita, fechaFinal]),
    pool.query(selectQuery, [rut]),
    pool.query(selectQuery2, [rut]),
    pool.query(selectQuery3)
  ])
    .then(([resultadosUpdate, resultados, resultados2, resultados3]) => {
      if (resultadosUpdate.rowCount === 1) {
        console.log('Se ha actualizado correctamente la cita medica');
        res.render('viewsProfesional/administrarHorasProf', { resultados, resultados2, resultados3 });
      }
    })
    .catch(error => {
      console.error(error);
      res.status(500).send('Error interno del servidor');
    });
})



app.post('/eliminarHoraMedica', (req, res) => {
  const { eliminarCitaId } = req.body;
  const user = req.session.user;
  const rut = user.prof_rut;

  const selectQuery = `
    SELECT PA.PACI_NOMBRE, PA.PACI_APELLIDO, PA.PACI_RUT, ES.ESPE_NOMBRE, CM.CITA_SALA_NUM, CM.CITA_DIS_FECHA, CM.CITA_ID
	  FROM PACIENTE PA RIGHT JOIN CITA_MEDICA CM
	ON PA.PACI_RUT = CM.CITA_PACI_RUT 
		JOIN PROFESIONAL PR 
		ON CM.CITA_PROF_RUT = PR.PROF_RUT
		JOIN ESPECIALIDAD ES
		ON PR.PROF_ESP_CODIGO = ES.ESPE_CODIGO
		WHERE CITA_PROF_RUT = $1 AND CM.CITA_DIS_FECHA > NOW()
		ORDER BY CM.CITA_DIS_FECHA;
  `;

  const selectQuery2 = `
    SELECT ESPE_NOMBRE FROM ESPECIALIDAD ES JOIN PROFESIONAL PR
	    ON ES.ESPE_CODIGO = PR.PROF_ESP_CODIGO
	    WHERE PR.PROF_RUT = $1;
  `;

  const selectQuery3 = `
    SELECT * FROM SALA
  `;

  const deleteQuery = `
    DELETE FROM CITA_MEDICA
    WHERE CITA_ID = $1;
  `;

  pool.query(deleteQuery, [eliminarCitaId])
  .then(resultados2 =>{
    if(resultados2.rowCount === 0){
      console.log('No se ha podido eliminar la cita medica');
    }else {
      pool.query(selectQuery3)
      .then(resultados3 => {
        // Ejecutar la segunda consulta para obtener resultados2
        pool.query(selectQuery2, [rut])
          .then(resultados2 => {
            // Obtener los resultados de la primera consulta
            pool.query(selectQuery, [rut])
              .then(resultados => {
                res.render('viewsProfesional/administrarHorasProf', { resultados, resultados2, resultados3 });
              })
              .catch(error => {
                console.error(error);
                res.status(500).send('Error interno del servidor');
              });
          })
          .catch(error => {
            console.error(error);
            res.status(500).send('Error interno del servidor');
          });
      })
      .catch(error => {
        console.error(error);
        res.status(500).send('Error interno del servidor');
      });
    }
  }).catch(error => {
    console.error(error);
    res.status(500).send('Error interno del servidor');
  });
});

app.post('/agendarCitaMedica', (req, res) => {
  const { fechaCita, horaCita } = req.body;
  const user = req.session.user;
  const rut = user.prof_rut;


  const selectQuery = `
    SELECT PA.PACI_NOMBRE, PA.PACI_APELLIDO, PA.PACI_RUT, ES.ESPE_NOMBRE, CM.CITA_SALA_NUM, CM.CITA_DIS_FECHA, CM.CITA_ID
	  FROM PACIENTE PA RIGHT JOIN CITA_MEDICA CM
	ON PA.PACI_RUT = CM.CITA_PACI_RUT 
		JOIN PROFESIONAL PR 
		ON CM.CITA_PROF_RUT = PR.PROF_RUT
		JOIN ESPECIALIDAD ES
		ON PR.PROF_ESP_CODIGO = ES.ESPE_CODIGO
		WHERE CITA_PROF_RUT = $1 AND CM.CITA_DIS_FECHA > NOW()
		ORDER BY CM.CITA_DIS_FECHA;
  `;

  const selectQuery2 = `
    SELECT ESPE_NOMBRE FROM ESPECIALIDAD ES JOIN PROFESIONAL PR
	    ON ES.ESPE_CODIGO = PR.PROF_ESP_CODIGO
	    WHERE PR.PROF_RUT = $1;
  `;

  const selectQuery3 = `
    SELECT * FROM SALA
  `;
  
  const disponilidadSalasQuery = `
    SELECT SALA.SALA_NUMERO
    FROM SALA
    WHERE SALA.SALA_NUMERO NOT IN (
      SELECT CITA_SALA_NUM
      FROM CITA_MEDICA
      WHERE CITA_DIS_FECHA = $1
    )
  `;

  const disponibilidadProfesionalQuery = `
    SELECT * FROM CITA_MEDICA
    WHERE CITA_PROF_RUT = $1 AND CITA_DIS_FECHA = $2
  `;



  const fechaFinal = `${fechaCita} ${horaCita}`;

  pool.query(disponibilidadProfesionalQuery, [ rut, fechaFinal])
  .then(resultadosDisProf => {
    if(resultadosDisProf.rowCount === 0){
      pool.query(disponilidadSalasQuery, [fechaFinal])
    .then(resultados4 =>{
      if(resultados4.rowCount > 0){
        pool.query(selectQuery3)
            .then(resultados3 => {
              // Ejecutar la segunda consulta para obtener resultados2
              pool.query(selectQuery2, [rut])
                .then(resultados2 => {
                  // Obtener los resultados de la primera consulta
                  pool.query(selectQuery, [rut])
                    .then(resultados => {
                      res.render('viewsProfesional/administrarHorasProfDos', { resultados, resultados2, resultados3, resultados4, fechaCita, horaCita });
                    })
                    .catch(error => {
                      console.error(error);
                      res.status(500).send('Error interno del servidor');
                    });
                })
                .catch(error => {
                  console.error(error);
                  res.status(500).send('Error interno del servidor');
                });
            })
            .catch(error => {
              console.error(error);
              res.status(500).send('Error interno del servidor');
            });
      }
  }).catch(error => {
    console.error("No hay salas disponibles");
    pool.query(selectQuery3)
            .then(resultados3 => {
              // Ejecutar la segunda consulta para obtener resultados2
              pool.query(selectQuery2, [rut])
                .then(resultados2 => {
                  // Obtener los resultados de la primera consulta
                  pool.query(selectQuery, [rut])
                    .then(resultados => {
                      res.render('viewsProfesional/administrarHoraNoSalasDis', { resultados, resultados2, resultados3, fechaCita, horaCita});
                    })
                    .catch(error => {
                      console.error(error);
                      res.status(500).send('Error interno del servidor');
                    });
                })
                .catch(error => {
                  console.error(error);
                  res.status(500).send('Error interno del servidor');
                });
            })
            .catch(error => {
              console.error(error);
              res.status(500).send('Error interno del servidor');
            });
  });
    } else{
        pool.query(selectQuery3)
            .then(resultados3 => {
              // Ejecutar la segunda consulta para obtener resultados2
              pool.query(selectQuery2, [rut])
                .then(resultados2 => {
                  // Obtener los resultados de la primera consulta
                  pool.query(selectQuery, [rut])
                    .then(resultados => {
                      res.render('viewsProfesional/administrarHoraErrorDisProf', { resultados, resultados2, resultados3, fechaCita, horaCita});
                    })
                    .catch(error => {
                      console.error(error);
                      res.status(500).send('Error interno del servidor');
                    });
                })
                .catch(error => {
                  console.error(error);
                  res.status(500).send('Error interno del servidor');
                });
            })
            .catch(error => {
              console.error(error);
              res.status(500).send('Error interno del servidor');
            });
    }
  })
});

app.post('/confirmarNuevaCitaMedica', (req, res) => {
  const { fechaCita, horaCita, salaCita } = req.body;
  const user = req.session.user;
  const rut = user.prof_rut;
  const fechaFinal = `${fechaCita} ${horaCita}`;


  const insertQuery = `
  INSERT INTO CITA_MEDICA (CITA_DETALLE, CITA_PACI_RUT, CITA_PROF_RUT, CITA_SALA_NUM, CITA_DIS_FECHA, CITA_DISPONIBLE)
  VALUES(null, null, $1, $2, $3, true);	
  `;

  const selectQuery = `
    SELECT PA.PACI_NOMBRE, PA.PACI_APELLIDO, PA.PACI_RUT, ES.ESPE_NOMBRE, CM.CITA_SALA_NUM, CM.CITA_DIS_FECHA, CM.CITA_ID
	  FROM PACIENTE PA RIGHT JOIN CITA_MEDICA CM
	ON PA.PACI_RUT = CM.CITA_PACI_RUT 
		JOIN PROFESIONAL PR 
		ON CM.CITA_PROF_RUT = PR.PROF_RUT
		JOIN ESPECIALIDAD ES
		ON PR.PROF_ESP_CODIGO = ES.ESPE_CODIGO
		WHERE CITA_PROF_RUT = $1 AND CM.CITA_DIS_FECHA > NOW()
		ORDER BY CM.CITA_DIS_FECHA;
  `;

  const selectQuery2 = `
    SELECT ESPE_NOMBRE FROM ESPECIALIDAD ES JOIN PROFESIONAL PR
	    ON ES.ESPE_CODIGO = PR.PROF_ESP_CODIGO
	    WHERE PR.PROF_RUT = $1;
  `;

  const selectQuery3 = `
    SELECT * FROM SALA
  `;

  Promise.all([
    pool.query(insertQuery, [rut, salaCita, fechaFinal]),
    pool.query(selectQuery, [rut]),
    pool.query(selectQuery2, [rut]),
    pool.query(selectQuery3)
  ])
    .then(([resultadosInsert, resultados, resultados2, resultados3]) => {
      if (resultadosInsert.rowCount === 1) {
        console.log('Se ha agendado correctamente la cita medica');
        res.render('viewsProfesional/administrarHorasProf', { resultados, resultados2, resultados3 });
      }
    })
    .catch(error => {
      console.error(error);
      res.status(500).send('Error interno del servidor');
    });
})


