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
const express = require('express');
const { Pool } = require('pg');
const bodyParser = require('body-parser');
const session = require('express-session'); // Agregamos express-session
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname));

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

  // Verifica si el usuario ya está autenticado
  if (req.session && req.session.user) {
    // El usuario ya está autenticado, puedes realizar la inserción en la base de datos aquí
  } else {
    // El usuario no está autenticado, redirige o muestra un mensaje de error
    res.status(401).send('No estás autenticado');
  }
});

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

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
});
