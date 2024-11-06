var loginForm = document.getElementById('loginForm');

loginForm.onsubmit = function (event) {
    event.preventDefault();

    firebase.auth().signInWithEmailAndPassword(loginForm.emailLogin.value, loginForm.passwordLogin.value)
      .then(() => {
          // Login bem-sucedido, redireciona para profile.html
          window.location.href = "profile.html";
      })
      .catch(function (error) {
          console.log('Falha no acesso');
          console.log(error);
      });
}

function signOut() {
    firebase.auth().signOut().catch(function(error) {
        console.log('Falha ao sair');
        console.log(error);
    });
}
