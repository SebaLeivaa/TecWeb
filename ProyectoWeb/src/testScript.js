//DATOS
    const names = [
        "Liam", "Noah", "Oliver", "Elijah", "William", "James", 
        "Benjamin", "Lucas", "Henry", "Alexander", "Emma", "Olivia", 
        "Ava", "Isabella", "Sophia", "Charlotte", "Mia", "Amelia", 
        "Harper", "Evelyn",
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
        "Hematology", "Hemorrhage", "Hepatitis","Hernia",
        "Hypertension", "Hypotension", "Immunology", "Infection",
        "Influenza", "Insomnia", "Jaundice", "Keratitis", "Kidney",
        "Leukemia", "Liposuction", "Lupus", "Lymphoma", "Malaria",
        "Mammogram", "Melanoma", "Meningitis", "Menopause", "Metabolism",
        "Microbiology", "Migraine", "Morphine", "Myocardial infarction",
        "Narcotics", "Nausea", "Nephritis", "Neurology", "Obesity",
        "Oncology", "Ophthalmology", "Orthopedics", "Osteoporosis",
        "Otitis", "Ovarian", "Painkiller", "Palliative", "Pancreatitis",
        "Papilloma",
        "Pathology",
        "Pediculosis",
        "Penicillin",
        "Pneumonia",
        "Podiatry",
        "Polyp",
        "Prognosis",
        "Prostate",
        "Psychiatry",
        "Pulmonary",
        "Quarantine",
        "Radiology",
        "Rehabilitation",
        "Rheumatology",
        "Seizure",
        "Sepsis",
        "Shock",
        "Sinusitis",
        "Sclerosis",
        "Stethoscope",
        "Stomachache",
        "Surgery",
        "Syndrome",
        "Tachycardia",
        "Therapy",
        "Tonsillitis",
        "Toxicology",
        "Transplant",
        "Ulcer",
        "Urology",
        "Vaccination",
        "Vasectomy",
        "Vein",
        "Virus",
        "Xerostomia",
        "Yersinia",
        "Zoonosis",
    ]; 

    function crearDetalles(wordCount) {
        let selectedWords = [];
      
        for (let i = 0; i < wordCount; i++) {
            let randomIndex = Math.floor(Math.random() * details.length);
            selectedWords.push(details[randomIndex]);
        }
        let parrafo = selectedWords.join(' ');
      
        return parrafo;
    }

//PACIENTES
    function Paciente(){
        this.firstName;
        this.lastName;
        this.bd;
        this.pass;
        this.correo;
        this.gender;
        this.phone;
        this.rut;
    }

    function makePacienteObj(n) {
        let listaPacientes = []
        for (var i = 0; i < n; ++i) {
            let paciente = {}
            paciente[i] = new Paciente()
            paciente.firstName = names[Math.floor(Math.random() * (19 + 1))];
            paciente.lastName = lName[Math.floor(Math.random() * (9 + 1))];
            paciente.bd = crearFechas();
            paciente.pass = passwords[Math.floor(Math.random() * (29 + 1))];
            paciente.correo = name[Math.floor(Math.random() * (19 + 1))]+emails2[Math.floor(Math.random() * (3 + 1))]+emails3[Math.floor(Math.random() * (1 + 1))];
            paciente.gender = Math.floor(Math.random() * (3 + 1));
            paciente.phone = "+569"+Math.floor(Math.random() * (90000000) + parseInt(10000000));
            paciente.rut = crearRut();
            listaPacientes.push(paciente)
            }
        return listaPacientes
        }

    const listaPacientes = makePacienteObj(10)

//PROFESIONALES
    function Profesionales(){
        this.firstName;
        this.lastName;
        this.rut;
        this.espCodigo;
    }

    function makeProfesionalObj(n){
        let listaProfesionales = []
        for (let i = 0; i < n; i++) {
            let profesionales= {};
            profesionales[i] = new Profesionales();
            profesionales.firstName = names[Math.floor(Math.random() * (19 + 1))];
            profesionales.lastName = lName[Math.floor(Math.random() * (9 + 1))];
            profesionales.rut = crearRut();
            profesionales.espCodigo = Math.floor(Math.random() * (9 + 1));
            listaProfesionales.push(profesionales);
        }
        return listaProfesionales
    }

    const listaProfesionales = makeProfesionalObj(10);

//SALAS
    function Salas(){
        this.numero;
    }

    function makeSalasObj(){
        let listaSalas = [];
        for(let i=1;i<4;i++){
            for(let j=1;j<7;j++){
                let salas = {};
                salas[i]= new Salas();
                salas.numero= `${i}`+'0'+`${j}`
                listaSalas.push(salas);
            }
        }
        return listaSalas
    }

    const listaSalas = makeSalasObj();

//CITAS
    function Citas(){
        this.idCita;
        this.detalle;
        this.pa_rut;
        this.pro_rut;
        this.num_sala;
        this.hora_inicio;
        this.hora_termino;
        this.fecha;
    }
    
    function makeCitasObj(n){
        let listaCitas = [];
        for (i=0;i<n;i++){
            let citas = {}
            citas[i]= new Citas();
            citas.idCita = i+1;
            citas.detalle = crearDetalles(Math.floor(Math.random()* 13 + parseInt(3)));
            citas.pa_rut = listaPacientes[Math.floor(Math.random() * listaPacientes.length)].rut;
            citas.pro_rut = listaProfesionales[Math.floor(Math.random() * listaProfesionales.length)].rut;
            citas.num_sala = listaSalas[Math.floor(Math.random() * listaSalas.length)].numero;
            citas.hora_inicio = crearHoras();
            citas.hora_termino = crearHoras();
            citas.fecha = crearFechas();
            listaCitas.push(citas)
        }
        return listaCitas
    }

    const listaCitas = makeCitasObj(10);
    console.log(listaCitas)