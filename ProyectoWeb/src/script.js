//DATOS
  const names = [
    'Alexander', 'William', 'Victoria', 'Sophia', 'Emily', 
    'Oliver', 'Elizabeth', 'Daniel', 'Emma', 'James', 'Ava', 
    'Grace', 'Lucas', 'Ella', 'Benjamin', 'Chloe', 'Mia', 
    'Matthew', 'Hannah', 'Aiden', 'Michael', 'Lily', 'Christopher', 
    'Isabella', 'Natalie', 'Robert', 'Henry', 'Madison', 'Andrew', 
    'Sophie', 'Samuel', 'Liam', 'Amelia', 'Noah', 'Abigail', 'Jacob', 
    'Charlotte', 'Ethan', 'Avery', 'Nathan', 'Hailey', 
    'Jack', 'Aria', 'Lucy', 'Mason', 'Evelyn', 'Landon', 
    'Nora', 'David', 'Zoe', 'Aubrey', 'John', 'Layla', 
    'Joseph', 'Harper', 'Scarlett', 'Gabriel', 'Alexa', 
    'Dylan', 'Lillian', 'Anthony', 'Sofia', 'Luna', 
    'Ellie', 'Jackson', 'Samantha', 'Nathaniel', 'Olivia', 
    'Ryan', 'Claire', 'Joshua', 'Madeline', 'Elijah', 'Savannah', 
    'Stella', 'Julia', 'Luke', 'Audrey', 'Violet', 'Carter', 
    'Leah', 'Penelope', 'Hazel', 'Eli', 'Aaliyah', 
    'Nina', 'Alice', 'Ruby', 'Camila','Ariana', 'Mila', 
    'Lena', 'Taylor', 'Kylie', 'Gianna', 'Elise', 
    'Vivian', 'Valentina', 'Lila', 'Zara', 'Emery', 
    'Isabel', 'Elena', 'Logan', 'Maya', 'Ivy', 'Eliza', 
    'Caleb', 'Josephine', 'Maria',
  ];

  const lName = [
    'Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia',
    'Miller', 'Davis', 'Rodriguez', 'Martinez',
  ];

  const passwords = [
    '123456', 'password', '123456789', '12345', '12345678',
    'qwerty', '1234567', '111111', '1234567890', '123123',
    'abc123', '1234', 'password1', 'iloveyou', '1q2w3e4r',
    '000000', 'qwerty123', 'zaq12wsx', 'dragon', 'sunshine',
    'princess', 'letmein', '654321', 'monkey', '27653',
    '1qaz2wsx', '123321', 'qwertyuiop', 'superman', 'asdfghjkl'
  ];

  const emails2 = [
    '@gmail', '@hotmail', '@yahoo', '@outlook'
  ];

  const emails3 = [
    '.cl', '.com',
  ];

  function crearRut() {
    let rut =
      Math.floor(Math.random() * 6 + parseInt(13)) +
      "." +
      Math.floor(Math.random() * 900 + parseInt(100)) +
      "." +
      Math.floor(Math.random() * 900 + parseInt(100)) +
      "-" +
      Math.floor(Math.random() * 10);
    return rut;
  }

  function crearFechas() {
    let dates =
      Math.floor(Math.random() * 66 + parseInt(1940)) +
      "-" +
      Math.floor(Math.random() * 12 + parseInt(1)) +
      "-" +
      Math.floor(Math.random() * 31 + parseInt(1));
    return dates;
  }

  function crearHoras() {
    let horas =
      `${Math.floor(Math.random() * 3)}` +
      `${Math.floor(Math.random() * 10)}` +
      ":" +
      `${Math.floor(Math.random() * 6)}` +
      `${Math.floor(Math.random() * 10)}`;
    return horas;
  }

  const details = [
    "Abdomen", "Abscess", "Acute", "Adenoid", "Alzheimer",
    "Amnesia", "Anemia", "Angina", "Antibiotic", "Aorta",
    "Appendicitis", "Arrhythmia", "Arthritis", "Aspirin",
    "Atherosclerosis", "Biopsy", "Blood pressure", "Bronchitis",
    "Cancer", "Carcinoma", "Cardiology", "Cataract", "Cellulitis",
    "Cerebral", "Cholesterol", "Colonoscopy", "Concussion",
    "Congenital", "Contraception", "Cystitis", "Dementia",
    "Dentistry", "Dermatitis", "Diabetes", "Diagnosis", "Diarrhea",
    "Dysentery", "Dysphagia", "Dyspnea", "Ecchymosis", "Eczema",
    "Edema", "Electrocardiogram", "Emphysema", "Endocrine",
    "Endoscopy", "Epilepsy", "Fibromyalgia", "Gastritis",
    "Gastroenteritis", "Genetics", "Glaucoma", "Hallucination",
    "Hematology", "Hemorrhage", "Hepatitis", "Hernia",
    "Hypertension", "Hypotension", "Immunology", "Infection",
    "Influenza", "Insomnia", "Jaundice", "Keratitis", "Kidney",
    "Leukemia", "Liposuction", "Lupus", "Lymphoma", "Malaria",
    "Mammogram", "Melanoma", "Meningitis", "Menopause", "Metabolism",
    "Microbiology", "Migraine", "Morphine", "Myocardial infarction",
    "Narcotics", "Nausea", "Nephritis", "Neurology", "Obesity",
    "Oncology", "Ophthalmology", "Orthopedics", "Osteoporosis",
    "Otitis", "Ovarian", "Painkiller", "Palliative", "Pancreatitis",
    "Papilloma", "Pathology", "Pediculosis", "Penicillin",
    "Pneumonia", "Podiatry", "Polyp", "Prognosis", "Prostate",
    "Psychiatry", "Pulmonary", "Quarantine", "Radiology",
    "Rehabilitation", "Rheumatology", "Seizure", "Sepsis",
    "Shock", "Sinusitis", "Sclerosis", "Stethoscope",
    "Stomachache", "Surgery", "Syndrome", "Tachycardia",
    "Therapy", "Tonsillitis", "Toxicology", "Transplant",
    "Ulcer", "Urology", "Vaccination", "Vasectomy", "Vein",
    "Virus", "Xerostomia", "Yersinia", "Zoonosis",
  ];

  const namesEspecialidades = [
    'Dermatología','Cirugía General','Pediatría',
    'Hematología','Kinesiología','Cardiología'
  ]

  function crearDetalles(wordCount) {
    let selectedWords = [];

    for (let i = 0; i < wordCount; i++) {
      let randomIndex = Math.floor(Math.random() * details.length);
      selectedWords.push(details[randomIndex]);
    }
    let parrafo = selectedWords.join(' ');

    return parrafo;
  }

//Abrir dialogo de Iniciar Sesion
  function loginButton() {
    const loginDialog = document.getElementById("loginDialog");
    const signinDialog = document.getElementById("signinDialog");
    const errorMensajeCorreo = document.getElementById("errorMensajeCorreo");
    const errorMensajeClave = document.getElementById("errorMensajeClave");
   
    signinDialog.close();
    loginDialog.showModal();

    const inputCorreoRut = document.getElementById("rutCorreo");
    const inputClave = document.getElementById("claveInput5"); 
    inputCorreoRut.value = "";
    inputClave.value = "";
    
    const lightDismiss = ({ target: loginDialog }) => {
      if (loginDialog.nodeName === "DIALOG") loginDialog.close("dismiss");
    };

    loginDialog.addEventListener("click", lightDismiss);




    if (errorMensajeCorreo && errorMensajeClave) {
      errorMensajeCorreo.textContent = "";
      errorMensajeClave.textContent = "";
    }
  }


//Abrir dialogo de Registro
  function signinButton() {
    const loginDialog = document.getElementById("loginDialog");
    const signinDialog = document.getElementById("signinDialog");
    const errorMensajeRut = document.getElementById("errorMensajeRut");
    const errorMensajeFecNac = document.getElementById("errorMensajeFecNac");
    const errorMensajeClavee = document.getElementById("errorMensajeClavee");
    const errorMensajeTelefono = document.getElementById("errorMensajeTelefono");

    loginDialog.close();
    signinDialog.showModal();

    const inputNombre = document.getElementById("paName");
    const inputApellidos = document.getElementById("paLName");
    const inputRut = document.getElementById("paRut");
    const inputFecNac = document.getElementById("DoB");
    const inputCorreo = document.getElementById("paEmail");
    const inputClave = document.getElementById("claveInput6");
    const inputTelefono = document.getElementById("paPhone");
    inputNombre.value = "";
    inputApellidos.value = "";
    inputRut.value = "";
    inputFecNac.value = "";
    inputCorreo.value = "";
    inputClave.value = "";
    inputTelefono.value = "";



    const lightDismiss = ({ target: signinDialog }) => {
      if (signinDialog.nodeName === "DIALOG") signinDialog.close("dismiss");
    };

    signinDialog.addEventListener("click", lightDismiss);

    if (errorMensajeRut) {
      errorMensajeRut.textContent = "";
    }
    if (errorMensajeFecNac) {
      errorMensajeFecNac.textContent = "";
    }
    if (errorMensajeClavee) {
      errorMensajeClavee.textContent = "";
    }
    if (errorMensajeTelefono) {
      errorMensajeTelefono.textContent = "";
    }
  }


  function reservaInvitado(){
    const usuarioDialog = document.getElementById("reservaTresDialogUsuario");
    const invitadoDialog = document.getElementById("reservaTresDialogInvitado");
    usuarioDialog.close();
    invitadoDialog.showModal();
    
  }

  function reservaUsuario(){
    const invitadoDialog = document.getElementById("reservaTresDialogInvitado");
    const usuarioDialog = document.getElementById("reservaTresDialogUsuario");
    invitadoDialog.close();
    usuarioDialog.showModal();
  }

//Abrir dialog reserva paso uno
  function reservaUno(){
    const reservaUnoDialog = document.getElementById("reservaUnoDialog");
    reservaUnoDialog.showModal();

    const lightDismiss = ({ target: reservaUnoDialog }) => {
      if (reservaUnoDialog.nodeName === "DIALOG") reservaUnoDialog.close("dismiss");
    };

    reservaUnoDialog.addEventListener("click", lightDismiss);
  }

//Abrir dialog registro exitoso
  document.addEventListener('DOMContentLoaded', function() {
    const dialog = document.getElementById('registroExitoso');

    dialog.showModal();
  });

//Abrir dialog anula hora paso uno
  function anulaHoraUno(){
    const anulaHoraUnoDialog = document.getElementById("anulaHoraUnoDialog");
    const errorMensajeCorreo = document.getElementById("errorMensajeCorreoAnulaHora");
    const errorMensajeClave = document.getElementById("errorMensajeClaveAnulaHora");
    
    anulaHoraUnoDialog.showModal();

    const lightDismiss = ({ target: anulaHoraUnoDialog }) => {
      if (anulaHoraUnoDialog.nodeName === "DIALOG") anulaHoraUnoDialog.close("dismiss");
    };

    const inputCorreoRut = document.getElementById("correoAnularHora");
    const inputClave = document.getElementById("claveInput7"); 
    inputCorreoRut.value = "";
    inputClave.value = "";

    anulaHoraUnoDialog.addEventListener("click", lightDismiss);

    if (errorMensajeCorreo && errorMensajeClave) {
      errorMensajeCorreo.textContent = "";
      errorMensajeClave.textContent = "";
    }
  }

//Abrir dialog historial medico uno
  function historialMedUno(){
    const historialMedUnoDialog = document.getElementById("historialMedUnoDialog");
    const errorMensajeCorreoHistorialMed = document.getElementById("errorMensajeCorreoHistorialMed");
    const errorMensajeClaveHistorialMed = document.getElementById("errorMensajeClaveHistorialMed");
    
    historialMedUnoDialog.showModal();

    const lightDismiss = ({ target: historialMedUnoDialog }) => {
      if (historialMedUnoDialog.nodeName === "DIALOG") historialMedUnoDialog.close("dismiss");
    };

    const inputRut = document.getElementById("rutHistorialMed");
    const inputClave = document.getElementById("claveInput7"); 
    inputRut.value = "";
    inputClave.value = "";

    historialMedUnoDialog.addEventListener("click", lightDismiss);

    if (errorMensajeCorreoHistorialMed  && errorMensajeClaveHistorialMed ) {
      errorMensajeCorreoHistorialMed.textContent = "";
      errorMensajeClaveHistorialMed.textContent = "";
    }
  }

//Abrir dialog historial de pacientes (LADO DEL PROFESIONAL)
function historialMedProf(){
  const historialMedProfesionalesDialog = document.getElementById("historialMedProfesionalesDialog");
  const errorMensajeRutHistorialMedProf = document.getElementById("errorMensajeRutHistorialMedProf");
  
  historialMedProfesionalesDialog.showModal();

  const lightDismiss = ({ target: historialMedProfesionalesDialog }) => {
    if (historialMedProfesionalesDialog.nodeName === "DIALOG") historialMedProfesionalesDialog.close("dismiss");
  };

  const inputRut = document.getElementById("rutHistorialMedProf");
  inputRut.value = "";

  historialMedProfesionalesDialog.addEventListener("click", lightDismiss);

  if (errorMensajeRutHistorialMedProf) {
    errorMensajeRutHistorialMedProf.textContent = "";
  }
}

//Abrir dialog de editar, eliminar y agregar horas medicas 
function editarCitaMedica(index){
  const editarCitaMedicaDialog = document.getElementById("editarCitaMedicaDialog" + index);
   editarCitaMedicaDialog.showModal();
  const lightDismiss = ({ target: editarCitaMedicaDialog }) => {
    if (editarCitaMedicaDialog.nodeName === "DIALOG") editarCitaMedicaDialog.close("dismiss");
  };

  editarCitaMedicaDialog.addEventListener("click", lightDismiss);

}

function eliminarCitaMedica(index){
  const eliminarCitaMedicaDialog = document.getElementById("eliminarCitaMedicaDialog" + index);
   eliminarCitaMedicaDialog.showModal();

   const lightDismiss = ({ target: eliminarCitaMedicaDialog }) => {
    if (eliminarCitaMedicaDialog.nodeName === "DIALOG") eliminarCitaMedicaDialog.close("dismiss");
  };

  eliminarCitaMedicaDialog.addEventListener("click", lightDismiss);
}

function agregarCitaMedica(){
  const agregarCitaMedicaDialog = document.getElementById("agregarCitaMedicaDialog");
   agregarCitaMedicaDialog.showModal();

   const lightDismiss = ({ target: agregarCitaMedicaDialog }) => {
    if (agregarCitaMedicaDialog.nodeName === "DIALOG") agregarCitaMedicaDialog.close("dismiss");
  };

  agregarCitaMedicaDialog.addEventListener("click", lightDismiss);
}

//Muestra el dialog en los archivos EJS
  document.addEventListener('DOMContentLoaded', function() {
    const dialog = document.getElementById('reservaDosDialog');
    dialog.showModal();
    const lightDismiss = ({ target: reservaDosDialog }) => {
      if (reservaDosDialog.nodeName === "DIALOG") reservaDosDialog.close("dismiss");
    };

    reservaDosDialog.addEventListener("click", lightDismiss);
  });

  document.addEventListener('DOMContentLoaded', function() {
    const dialog = document.getElementById('reservaTresDialogUsuario');

    dialog.showModal();
    const lightDismiss = ({ target: reservaTresDialogUsuario }) => {
      if (reservaTresDialogUsuario.nodeName === "DIALOG") reservaTresDialogUsuario.close("dismiss");
    };

    reservaTresDialogUsuario.addEventListener("click", lightDismiss);
  });

  document.addEventListener('DOMContentLoaded', function() {
    const dialog = document.getElementById('reservaTresDialogInvitado');

    dialog.showModal();
    const lightDismiss = ({ target: reservaTresDialogInvitado }) => {
      if (reservaTresDialogInvitado.nodeName === "DIALOG") reservaTresDialogInvitado.close("dismiss");
    };

    reservaTresDialogInvitado.addEventListener("click", lightDismiss);
  });

  document.addEventListener('DOMContentLoaded', function() {
    const dialog = document.getElementById('sinResultadosDialog');

    dialog.showModal();
    const lightDismiss = ({ target: sinResultadosDialog }) => {
      if (sinResultadosDialog.nodeName === "DIALOG") sinResultadosDialog.close("dismiss");
    };

    sinResultadosDialog.addEventListener("click", lightDismiss);
  });

  document.addEventListener('DOMContentLoaded', function() {
    const dialog = document.getElementById('reservaExitosaDialog');

    dialog.showModal();
    const lightDismiss = ({ target: reservaExitosaDialog }) => {
      if (reservaExitosaDialog.nodeName === "DIALOG") reservaExitosaDialog.close("dismiss");
    };

    reservaExitosaDialog.addEventListener("click", lightDismiss);
  });

  document.addEventListener('DOMContentLoaded', function() {
    const dialog = document.getElementById('anularHoraDosDialog');

    dialog.showModal();
    const lightDismiss = ({ target: anularHoraDosDialog }) => {
      if (anularHoraDosDialog.nodeName === "DIALOG") dialog.close("dismiss");
    };

    anularHoraDosDialog.addEventListener("click", lightDismiss);
  });

  document.addEventListener('DOMContentLoaded', function() {
    const dialog = document.getElementById('anularHoraExitoDialog');

    dialog.showModal();
    const lightDismiss = ({ target: anularHoraExitoDialog }) => {
      if (anularHoraExitoDialog.nodeName === "DIALOG") dialog.close("dismiss");
    };

    anularHoraExitoDialog.addEventListener("click", lightDismiss);
  });

  document.addEventListener('DOMContentLoaded', function() {
    const dialog = document.getElementById('historialMedDosDialog');

    dialog.showModal();
    const lightDismiss = ({ target: historialMedDosDialog }) => {
      if (historialMedDosDialog.nodeName === "DIALOG") dialog.close("dismiss");
    };

    historialMedDosDialog.addEventListener("click", lightDismiss);
  });

//Cierra el dialog en los archivos EJS
  document.addEventListener('DOMContentLoaded', function () {
    const reservaDosDialog = document.getElementById('reservaDosDialog');
    const cerrarReservaDos = document.getElementById('cerrarReservaDos');

    cerrarReservaDos.addEventListener('click', () => {
      reservaDosDialog.close();
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    const reservaTresDialogUsuario = document.getElementById('reservaTresDialogUsuario');
    const cerrarReservaTresUsuario = document.getElementById('cerrarReservaTresUsuario');

    cerrarReservaTresUsuario.addEventListener('click', () => {
      reservaTresDialogUsuario.close();
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    const reservaTresDialogInvitado = document.getElementById('reservaTresDialogInvitado');
    const cerrarReservaTresInvitado = document.getElementById('cerrarReservaTresInvitado');

    cerrarReservaTresInvitado.addEventListener('click', () => {
      reservaTresDialogInvitado.close();
    });
  });


  document.addEventListener('DOMContentLoaded', function () {
    const sinResultadosDialog = document.getElementById('sinResultadosDialog');
    const cerrarSinResultados = document.getElementById('cerrarSinResultados');

    cerrarSinResultados.addEventListener('click', () => {
      sinResultadosDialog.close();
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    const reservaExitosaDialog = document.getElementById('reservaExitosaDialog');
    const cerrarReservaExitosa = document.getElementById('cerrarReservaExitosa');

    cerrarReservaExitosa.addEventListener('click', () => {
      reservaExitosaDialog.close();
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    const anularHoraDosDialog = document.getElementById('anularHoraDosDialog');
    const cerrarAnularHoraDos = document.getElementById('cerrarAnularHoraDos');

    cerrarAnularHoraDos.addEventListener('click', () => {
      anularHoraDosDialog.close();
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    const anularHoraExitoDialog = document.getElementById('anularHoraExitoDialog');
    const cerrarAnularHoraExito = document.getElementById('cerrarAnularHoraExito');

    cerrarAnularHoraExito.addEventListener('click', () => {
      anularHoraExitoDialog.close();
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    const historialMedDosDialog = document.getElementById('historialMedDosDialog');
    const cerrarHistorialMedDos = document.getElementById('cerrarHistorialMedDos');

    cerrarHistorialMedDos.addEventListener('click', () => {
      historialMedDosDialog.close();
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    const disponibilidadSalasCitaDialog = document.getElementById('disponibilidadSalasCitaDialog');
    const cerrarDialogDisponibilidadSalas = document.getElementById('cerrarDialogDisponibilidadSalas');

    cerrarDialogDisponibilidadSalas.addEventListener('click', () => {
      disponibilidadSalasCitaDialog.close();
    });
  });



//Cerrar ventana de dialogo sesion
  function closeDia() {
    const loginDialog = document.getElementById("loginDialog");
    const signinDialog = document.getElementById("signinDialog");
    const reservaUnoDialog = document.getElementById("reservaUnoDialog");
    const anulaHoraUnoDialog = document.getElementById("anulaHoraUnoDialog");
    const historialMedUnoDialog = document.getElementById("historialMedUnoDialog");
    const reservaDosDialog = document.getElementById("reservaDosDialog");
    const registroExitosoDialog = document.getElementById("registroExitoso");

    loginDialog.close();
    signinDialog.close();
    reservaUnoDialog.close();
    anulaHoraUnoDialog.close();
    historialMedUnoDialog.close();
    reservaDosDialog.close();
    registroExitosoDialog.close();

  }

  function closeDialogHistorialMedProf() {
    const historialMedProfesionalesDialog = document.getElementById("historialMedProfesionalesDialog");
    historialMedProfesionalesDialog.close();
  }

  function closeDialogEditarCitaMedica(index){
    const editarCitaMedicaDialog = document.getElementById("editarCitaMedicaDialog"+ index)
    editarCitaMedicaDialog.close();
  };

  function closeDialogEliminarCitaMedica(index){
    const eliminarCitaMedicaDialog = document.getElementById("eliminarCitaMedicaDialog"+ index)
    eliminarCitaMedicaDialog.close();
  }

  function closeDialogAgregarCitaMedica(index){
    const agregarCitaMedicaDialog = document.getElementById("agregarCitaMedicaDialog")
    agregarCitaMedicaDialog.close();
  }

//Carga de datos preexistentes 
  let listaPacientes = []
  let listaProfesionales = []
  let listaCitas = []
  const listaSalas = makeSalasObj();
  const listaEspecialidades = makeEspecialidadesObj()

  if (sessionStorage.getItem('pacientes')!==null) {
    let sessionPacientesArray = JSON.parse(sessionStorage.getItem('pacientes'))
    let sessionProfesionalesArray = JSON.parse(sessionStorage.getItem('profesionales'))
    let sessionCitasArray = JSON.parse(sessionStorage.getItem('citas'))
    for(let i = 0; i < sessionPacientesArray.length;i++){
      listaPacientes.push(sessionPacientesArray[i])
    }
    for(let i = 0; i < sessionProfesionalesArray.length;i++){
      listaProfesionales.push(sessionProfesionalesArray[i])
    }
    for(let i = 0; i < sessionCitasArray.length;i++){
      listaCitas.push(sessionCitasArray[i])
    }
  }else{
    listaPacientes = makePacienteObj(10)
    sessionStorage.setItem('pacientes',JSON.stringify(listaPacientes));

    listaProfesionales = makeProfesionalObj(10);
    sessionStorage.setItem('profesionales',JSON.stringify(listaProfesionales));

    listaCitas = makeCitasObj(10);
    sessionStorage.setItem('citas',JSON.stringify(listaCitas));
  }

//Registro de datos. Dialogo de registro
  function reConfirm(form) {
    const paciente = new Paciente();
      paciente.firstName = form.paName.value;
      paciente.lastName = form.paLName.value;
      paciente.rut = form.paRut.value;
      paciente.bd = form.DoB.value;
      paciente.correo = form.paEmail.value;
      paciente.pass = form.paPassword.value;
      paciente.gender = form.paGender.value;
      paciente.phone = form.paPhone.value;
      listaPacientes.push(paciente)

    //Cookies de sesion *Se borran al cerrar la pag*
    sessionStorage.setItem('pacientes',JSON.stringify(listaPacientes,null,1))
  }

//Dialogo de Inicio
  function loConfirm(form){
      const ident = form.rutCorreo.value
      const pass = form.loClave.value

      //Confirmacion de datos
      for(let i=0; i < listaPacientes.length;i++){
        if((ident == listaPacientes[i].correo || ident == listaPacientes[i].rut) && pass == listaPacientes[i].pass){
          console.log('existe')
          break
        }else if(i == (listaPacientes.length-1)){
          console.log('fin de lista')
        }
        else{
          console.log('no existe')
        }
      }
      console.log('ident: '+ ident+ 'pass: '+pass)   
  }

  function reservaConfirmar(form){
    const especialidad = form.especialidad.value
    const profesional = form.nombreEsp.value
  }

//PACIENTES
  function Paciente(){
    this.rut;
    this.firstName;
    this.lastName;
    this.bd;
    this.pass;
    this.correo;
    this.gender;
    this.phone;
  }

  function makePacienteObj(n) {
    let listaPacientes = []
    for (var i = 0; i < n; ++i) {
      let paciente = new Paciente()
      paciente.rut = crearRut();
      paciente.firstName = names[Math.floor(Math.random() * names.length)];
      paciente.lastName = lName[Math.floor(Math.random() * (9 + 1))];
      paciente.bd = crearFechas();
      paciente.pass = passwords[Math.floor(Math.random() * (29 + 1))];
      paciente.correo = names[Math.floor(Math.random() * names.length)] + emails2[Math.floor(Math.random() * (3 + 1))] + emails3[Math.floor(Math.random() * (1 + 1))];
      paciente.gender = Math.floor(Math.random() * (3 + 1));
      paciente.phone = "+569" + Math.floor(Math.random() * (90000000) + parseInt(10000000));
      listaPacientes.push(paciente)
    }
    return listaPacientes
  }

//PROFESIONALES
  function Profesionales() {
    this.rut;
    this.firstName;
    this.lastName;
    this.espCodigo;
  }

  function makeProfesionalObj(n) {
    let listaProfesionales = []
    for (let i = 0; i < n; i++) {
      let profesionales = new Profesionales();
      profesionales.rut = crearRut();
      profesionales.firstName = names[Math.floor(Math.random() * names.length)];
      profesionales.lastName = lName[Math.floor(Math.random() * lName.length)];
      profesionales.espCodigo = Math.floor(Math.random() * (listaEspecialidades.length+1));
      listaProfesionales.push(profesionales);
    }
    return listaProfesionales
  }

//SALAS
  function Salas() {
    this.numero;
  }

  function makeSalasObj() {
    let listaSalas = [];
    for (let i = 1; i < 4; i++) {
      for (let j = 1; j < 7; j++) {
        let salas = new Salas();
        salas.numero = `${i}` + '0' + `${j}`
        listaSalas.push(salas);
      }
    }
    return listaSalas
  }

//CITAS
  function Citas() {
    this.idCita;
    this.pa_rut;
    this.pro_rut;
    this.num_sala;
    this.hora_inicio;
    this.hora_termino;
    this.fecha;
    this.detalle;
  }

  function makeCitasObj(n) {
    let listaCitas = [];
    for (i = 0; i < n; i++) {
      let citas = new Citas();
      citas.idCita = i + 1;   
      citas.pa_rut = listaPacientes[Math.floor(Math.random() * listaPacientes.length)].rut;
      citas.pro_rut = listaProfesionales[Math.floor(Math.random() * listaProfesionales.length)].rut;
      citas.num_sala = listaSalas[Math.floor(Math.random() * listaSalas.length)].numero;
      citas.hora_inicio = crearHoras();
      citas.hora_termino = crearHoras();
      citas.fecha = crearFechas();
      citas.detalle = crearDetalles(Math.floor(Math.random() * 13 + parseInt(3)));
      listaCitas.push(citas)
    }
    return listaCitas
  }

//ESPECIALIDADES
  function Especialidades(){
    this.codigo;
    this.name;
  }

  function makeEspecialidadesObj(){
    let listaEspecialidades = [];
    for(let i = 1; i < 7; i++){
      let especialidades = new Especialidades();
      especialidades.codigo = i;
      especialidades.name = namesEspecialidades[i-1];
      listaEspecialidades.push(especialidades)
    }
    return listaEspecialidades;
  }

  //Ocultar y mostrar contraseña
  const claveInput = document.getElementById('claveInput');
  const cambioClave = document.getElementById('cambioClave');
  const iconoClave = document.getElementById('iconoClave');

  cambioClave.addEventListener('click', () => {
    if(claveInput.type === 'password'){
      claveInput.type = 'text';
      iconoClave.classList.remove('fa-eye');
      iconoClave.classList.add('fa-eye-slash');
    }else{
      claveInput.type = "password";
      iconoClave.classList.remove('fa-eye-slash');
      iconoClave.classList.add('fa-eye');
    }
  });

  const claveInput2 = document.getElementById('claveInput2');
  const cambioClave2 = document.getElementById('cambioClave2');
  const iconoClave2 = document.getElementById('iconoClave2');

  cambioClave2.addEventListener('click', () => {
    if(claveInput2.type === 'password'){
      claveInput2.type = 'text';
      iconoClave2.classList.remove('fa-eye');
      iconoClave2.classList.add('fa-eye-slash');
    }else{
      claveInput2.type = "password";
      iconoClave2.classList.remove('fa-eye-slash');
      iconoClave2.classList.add('fa-eye');
    }
  });

  function cambioClaveSigIn(){
    const claveInput3 = document.getElementById('claveInput3');
    const iconoClave3 = document.getElementById('iconoClave3');
    if(claveInput3.type === 'password'){
      claveInput3.type = 'text';
      iconoClave3.classList.remove('fa-eye');
      iconoClave3.classList.add('fa-eye-slash');
    }else{
      claveInput3.type = "password";
      iconoClave3.classList.remove('fa-eye-slash');
      iconoClave3.classList.add('fa-eye');
    }
  }

  function cambioClaveLogin(){
    const claveInput4 = document.getElementById('claveInput4');
    const iconoClave4 = document.getElementById('iconoClave4');
    if(claveInput4.type === 'password'){
      claveInput4.type = 'text';
      iconoClave4.classList.remove('fa-eye');
      iconoClave4.classList.add('fa-eye-slash');
    }else{
      claveInput4.type = "password";
      iconoClave4.classList.remove('fa-eye-slash');
      iconoClave4.classList.add('fa-eye');
    }
  }
  
  function cambioClaveLoginError(){
    const claveInput5 = document.getElementById('claveInput5');
    const iconoClave5 = document.getElementById('iconoClave5');
    if(claveInput5.type === 'password'){
      claveInput5.type = 'text';
      iconoClave5.classList.remove('fa-eye');
      iconoClave5.classList.add('fa-eye-slash');
    }else{
      claveInput5.type = "password";
      iconoClave5.classList.remove('fa-eye-slash');
      iconoClave5.classList.add('fa-eye');
    }
  }

  function cambioClaveSigInError(){
    const claveInput6 = document.getElementById('claveInput6');
    const iconoClave6 = document.getElementById('iconoClave6');
    if(claveInput6.type === 'password'){
      claveInput6.type = 'text';
      iconoClave6.classList.remove('fa-eye');
      iconoClave6.classList.add('fa-eye-slash');
    }else{
      claveInput6.type = "password";
      iconoClave6.classList.remove('fa-eye-slash');
      iconoClave6.classList.add('fa-eye');
    }
  }

  function cambioClaveAnularHora(){
    const claveInput7 = document.getElementById('claveInput7');
    const iconoClave7 = document.getElementById('iconoClave7');
    if(claveInput7.type === 'password'){
      claveInput7.type = 'text';
      iconoClave7.classList.remove('fa-eye');
      iconoClave7.classList.add('fa-eye-slash');
    }else{
      claveInput7.type = "password";
      iconoClave7.classList.remove('fa-eye-slash');
      iconoClave7.classList.add('fa-eye');
    }
  }

  function cambioClaveHistorialMedico(){
    const claveInput8 = document.getElementById('claveInput8');
    const iconoClave8 = document.getElementById('iconoClave8');
    if(claveInput8.type === 'password'){
      claveInput8.type = 'text';
      iconoClave8.classList.remove('fa-eye');
      iconoClave8.classList.add('fa-eye-slash');
    }else{
      claveInput8.type = "password";
      iconoClave8.classList.remove('fa-eye-slash');
      iconoClave8.classList.add('fa-eye');
    }
  }

<<<<<<< HEAD
  

=======
<<<<<<< HEAD
  function editarHorasProfesionales(){

  };

=======
>>>>>>> 805a964b5e51fb259182afcd3a22a97b1ca0eee7
>>>>>>> 104dcdd4636f1f1f599ecd126dd9a95c67b66a16
