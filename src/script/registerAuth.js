var registerForm = document.getElementById('registerForm');

registerForm.onsubmit = function (event) {
    event.preventDefault();

    firebase.auth().createUserWithEmailAndPassword(registerForm.emailRegister.value, registerForm.passwordRegister.value)
      .then(() => {
          
          window.location.href = "login.html";
      })
      .catch(function (error) {
          console.log('Falha no cadastro');
          console.log(error);
      });
}
