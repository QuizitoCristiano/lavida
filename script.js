
const linksDiv = document.querySelector(".navlinks");
const openMenu = document.querySelector('.bx-menu')
const fecharMenu = document.querySelector(".bx-tada")
openMenu.style.display = 'flex'
fecharMenu.style.display = 'none'

function CloseIcons() {


    if (linksDiv.style.display === "none") {
        linksDiv.style.display = "block";
        fecharMenu.style.display = 'flex'
        openMenu.style.display = 'none'

    } else {
        linksDiv.style.display = "none";
        fecharMenu.style.display = 'none'
        openMenu.style.display = 'flex'
    }


}





function validaForm() {

    validarCampoNome();
    validarFormatoEmail();
    validarCelular(celular);
   
    validarEndereco();
    validarPassword();
    validarConfirmPassword();
}





function validarCampoNome() {
    const nomeInput = document.getElementById("nome");
    const mensagemElement = document.getElementById("mensagem");
    const nome = nomeInput.value;

    if (nome === "") {
        mensagemElement.innerHTML = "Por favor, preencha o campo de  Nome.";
        mensagemElement.style.color = "red";
    } else {
        mensagemElement.innerHTML = "Dados enviados com sucesso!";
        mensagemElement.style.color = "green";

    }
}


function validarFormatoEmail() {
    const emailInput = document.getElementById("email");
    const myemail = document.getElementById("sms");
    const email = emailInput.value;

    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!emailRegex.test(email)) {
        myemail.innerHTML = "Por favor, digite um e-mail válido.";
        myemail.style.color = "red";
    } else {
        myemail.innerHTML = "Dados enviados com sucesso!";
        myemail.style.color = "green";
    }
}



function validarCelular(celular) {
    var myPhone = document.getElementById("mesageCellPhone");
    var celularRegex = /^\d{2}\s\d{4,5}-\d{4}$/;

    if (!celularRegex.test(celular)) {
        myPhone.innerHTML = "Por favor, digite o seu celular...";
        myPhone.style.color = "red";
    } else {
        myPhone.innerHTML = "Número válido valeu cara!!!!";
        myPhone.style.color = "green"

    }
}


function validarPassword() {

    const password = document.querySelector(".password");
    const msgPassword = document.getElementById("mensagemSenha");
    const myPassword = password.value;

    if (myPassword === "") {
        msgPassword.innerHTML = "Por favor, preencha o campo de endereço...";
        msgPassword.style.color = "red";
    } else {
        msgPassword.innerHTML = "Muito obrigedo teu certo beleza!!";
        msgPassword.style.color = "green"
    }
}

function validarConfirmPassword() {

    const password = document.querySelector(".password");
    const ConfirmPassword = document.querySelector(".userConfirmPassword");

    const smsConfirmPassword = document.getElementById("msgConfirmPassword");

    const myPassword = password.value;
    const userConfirmPassword = ConfirmPassword.value;

    if (userConfirmPassword === "") {
        smsConfirmPassword.innerHTML = "Por favor, preencha o campo de cofirmacão de Senha...";
        smsConfirmPassword.style.color = "red";
    }

    else if (userConfirmPassword != myPassword) {
        smsConfirmPassword.innerHTML = "As senhas precisam ser iguais ta bom!!";
        smsConfirmPassword.style.color = "red";
    }

    else {
        smsConfirmPassword.innerHTML = "Muito obrigado deu certo beleza!!";
        smsConfirmPassword.style.color = "green"
    }
}

function validarEndereco() {

    const enderecoInput = document.querySelector(".userAddress");
    const msDeEndereco = document.getElementById("mensagemEdereco");
    const endereco = enderecoInput.value;

    if (endereco === "") {
        msDeEndereco.innerHTML = "Por favor, preencha o campo de endereço.";
        msDeEndereco.style.color = "red";
    } else {
        msDeEndereco.innerHTML = "Muito obrigado deu certo beleza!!";
        msDeEndereco.style.color = "green"
    }
}