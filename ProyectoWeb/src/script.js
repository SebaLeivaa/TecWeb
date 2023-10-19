
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

function closeDia() {
  const loginDialog = document.getElementById("loginDialog");
  const signinDialog = document.getElementById("signinDialog");
  loginDialog.close();
  signinDialog.close();
}

function reConfirm(form){
    const name = form.paName.value;
    const lastname = form.paLName.value;
    const rut = form.paRut.value;
    const bd = form.DoB.value;
    const email = form.paEmail.value;
    const pass = form.paPassword.value;
    const gender = form.paGender.value;
    const phone = form.paPhone.value;
    console.log('name: '+name+"\nlastname: "+lastname+'\nrut: '+rut+'\nbd: '+bd+'\nemail: '+email+'\npass: '+pass+'\ngender: '+gender+'\nphone: '+phone);
} 

function loConfirm(form){
    const ident = form.rutEmail.value
    const pass = form.loPass.value
    console.log('ident: '+ ident+ 'pass: '+pass)
}

//Test
function signin() {
  alert("test signin"); 

}

//Test
function login() {
  alert("test login");

  const ident = document.getElementById();
  const pass = document.getElementById();
  //Si ident y pass son correctos, se inicia sesion
}

  //Recibe los datos y los guarda


/* descarga un archivo de texto

function CreateTextFile() {
    var blob = new Blob(["This is a sample file content."], {
       type: "text/plain;charset=utf-8",
    });
    saveAs(blob, "download.txt");
 }
*/




