/*const { Client } = require('pg');

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
    console.log('es valido');
    return true;
  }else {
    console.log('no es valido la clave');
    return false;
  }
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
  proxy: 'http://localhost:3000', // Apunta a nuestro servidos
  files: ['views/**/*.ejs', 'public/css/**/*.css'],
});

// Configuración de express-session
app.use(session({
  secret: 'tu_secreto', 
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false, // 
    maxAge: 3600000, // Tiempo de expiración de la sesión en milisegundos
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

// Obtiene los datos del formulario REGISTRO
app.post('/registrar', (req, res) => {
  const { nombre, apellido, rut, fecnac, correo, clave, genero, telefono } = req.body;

  //Se insertan los datos a la tabla
  if(validarRut(rut) && validarClave(clave)){
  const insertQuery = `
    INSERT INTO PACIENTE (paci_nombre, paci_apellido, paci_rut, paci_fechanac, paci_correo, paci_clave, paci_genero, paci_telefono)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
  `;

  pool.query(insertQuery, [nombre, apellido, rut, fecnac, correo, clave, genero, telefono], (error, results) => {
    if (error) {
      console.error('Error al insertar el registro:', error);
      res.status(500).send('Error al insertar el registro');
    } else {
      console.log('Registro insertado con éxito');
      res.redirect('./signInExitoso.html');
    }
  });
}else {
  console.log('Es invalido gil');
}
});

//Obtiene los datos del formulario de login
app.post('/signIn', (req, res) => {
  const { rutCorreo, loClave } = req.body;

  const selectQuery = `
    SELECT * FROM PACIENTE WHERE (paci_rut = $1 OR paci_correo = $1) AND paci_clave = $2
  `;

  pool.query(selectQuery, [rutCorreo, loClave], (error, result) => {
    if (error) {
      console.error('Error en la consulta SQL:', error);
      res.status(500).send('Error en el inicio de sesión');
    } else if (result.rows.length === 1) {
      // Inicio de sesión exitoso
      req.session.user = result.rows[0]; // Almacena la información del usuario en la sesión
      res.redirect('/');
      console.log(result.rows);
    } else {
      // Credenciales incorrectas
      res.status(401).send('Credenciales incorrectas');
      console.log(result.rows);
    }
  });
});

//Obtiene los datos del formulario de ReservaUno
app.post('/reservaUno',(req, res) => {
  const { especialidad } = req.body;

  const selectQuery = `
  SELECT CM.CITA_DIS_FECHA, PR.PROF_NOMBRES, PR.PROF_APELLIDOS, PR.PROF_RUT
    FROM CITA_MEDICA CM
    JOIN PROFESIONAL PR ON CM.CITA_PROF_RUT = PR.PROF_RUT
    WHERE CM.CITA_ESPE_COD = $1
    AND CM.CITA_DISPONIBLE = TRUE
    ORDER BY PR.PROF_RUT;
  `

  pool.query(selectQuery, [especialidad])
    .then(resultados => {
      // Renderiza la página HTML con los resultados utilizando un motor de plantillas
      res.render('reservaDos', { resultados });
    })
    .catch(error => {
      // Manejo de errores
      console.error(error);
      res.status(500).send('Error interno del servidor');
    });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
});

const resultado = {
  cita_dis_fecha: new Date('2023-10-28T12:00:00.000Z'),
  // Otros campos de resultado
};