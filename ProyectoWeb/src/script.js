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
    signinDialog.close();
    loginDialog.showModal();

    const lightDismiss = ({ target: loginDialog }) => {
      if (loginDialog.nodeName === "DIALOG") loginDialog.close("dismiss");
    };

    loginDialog.addEventListener("click", lightDismiss);
  }

//Abrir dialogo de Registro
  function signinButton() {
    const loginDialog = document.getElementById("loginDialog");
    const signinDialog = document.getElementById("signinDialog");
    loginDialog.close();
    signinDialog.showModal();

    const lightDismiss = ({ target: signinDialog }) => {
      if (signinDialog.nodeName === "DIALOG") signinDialog.close("dismiss");
    };

    signinDialog.addEventListener("click", lightDismiss);
  }

//Abrir dialogo reserva paso uno
  function reservaUno(){
    const reservaUnoDialog = document.getElementById("reservaUnoDialog");
    reservaUnoDialog.showModal();

    const lightDismiss = ({ target: reservaUnoDialog }) => {
      if (reservaUnoDialog.nodeName === "DIALOG") reservaUnoDialog.close("dismiss");
    };

    reservaUnoDialog.addEventListener("click", lightDismiss);
  }

  document.addEventListener('DOMContentLoaded', function() {
    const dialog = document.getElementById('registroExitoso');

    // Mostrar el diálogo automáticamente cuando la página se carga
    dialog.showModal();
  });

//Abrir dialogo reserva paso dos
function reservaDos(){
  const reservaDosDialog = document.getElementById("reservaDosDialog");
  reservaDosDialog.showModal();

  const lightDismiss = ({ target: reservaUnoDialog }) => {
    if (reservaUnoDialog.nodeName === "DIALOG") reservaUnoDialog.close("dismiss");
  };

  reservaUnoDialog.addEventListener("click", lightDismiss);
}

document.addEventListener('DOMContentLoaded', function() {
  const dialog = document.getElementById('reservaDosDialog');

  // Mostrar el diálogo automáticamente cuando la página se carga
  dialog.showModal();
});
//Cerrar ventana de dialogo sesion
  function closeDia() {
    const loginDialog = document.getElementById("loginDialog");
    const signinDialog = document.getElementById("signinDialog");
    const reservaUnoDialog = document.getElementById("reservaUnoDialog");
    const registroExitosoDialog = document.getElementById("registroExitoso");
    const reservaDosDialog = document.getElementById("reservaDosDialog");
    loginDialog.close();
    signinDialog.close();
    reservaUnoDialog.close();
    registroExitosoDialog.close();
    reservaDosDialog.close();
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
  