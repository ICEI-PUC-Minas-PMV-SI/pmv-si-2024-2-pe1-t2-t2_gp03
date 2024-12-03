var registerForm = document.getElementById('registerForm');

registerForm.onsubmit = function (event) {
    
    try{
        if (registerForm.confirmPasswordRegister.value != registerForm.passwordRegister.value) {
            const errorMessage = "As senhas não coincidem!";
            alert(errorMessage)
            throw new Error(errorMessage)
        }

            event.preventDefault();

            firebase.auth().createUserWithEmailAndPassword(registerForm.emailRegister.value, registerForm.passwordRegister.value)
            .then(() => {
                
                window.location.href = "login.html";
            })
            .catch(function (error) {
                const errorMessage = "Falha no cadastro";
                alert(errorMessage)
                console.log(errorMessage);
                console.log(error);
            });
    } catch (error){
        console.log("Falha no cadastro => "+error);
    }

}
