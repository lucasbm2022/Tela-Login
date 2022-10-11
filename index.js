function showPassword(){
  const eye = document.getElementById('eye');
  const eyeLow = document.getElementById('eye-low');
  const fieldPassword = document.getElementById('field-password');

  if(eye.style.display === 'none') {
    eye.style.display = 'block';
    eyeLow.style.display = 'none';
    fieldPassword.type = 'text';
  } else {
    eye.style.display = 'none';
    eyeLow.style.display = 'block';
    fieldPassword.type = 'password';
  }
};

const fields = document.querySelector("[required]")

function customValidation(event){

  event.preventDefault()

  const field = event.target

  function verifyErrors() {
    let foundError = false;

    for (const error in field.validity) {
      if (field.validity[error]){
        foundError = error
      }
    }

    return foundError;

  }
 
  const error = verifyErrors()
  console.log("Error Exists: ", error)

  if (error) {
    field.setCustomValidty("Campo obrigatório")
  } else {
    field.setCustomValidty("")
  }

}

for (const field of fields) {
  field.addEventListener("invalid", customValidation)
}


document.querySelector("form")
.addEventListener("submit", event => {
  console.log('Enviar o formulário')

  event.defaultPrevented()
})