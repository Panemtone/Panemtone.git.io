document.getElementById("login-button").addEventListener("click", function () {
    // Obtendo os valores dos campos de usuário e senha
    var userValue = document.getElementById("user").value.toLowerCase();
    var passwordValue = document.getElementById("password").value;

    // Verificando se os valores são iguais a "gatinho" e "08012022" respectivamente
    if (userValue == "gatinho" && passwordValue === "08012022") {
        window.location.href = "index.html";
    } else {
        alert("Errou!! Lembre das dicas.");
    }
});