//const perfil = document.getElementById("perfil") -> pega o elemento pelo Id=perfil
// const perfil = document.getElementsByClassName("perfil") -> pega pela classe
//const perfil = document.getElementsByName("perfil") -> pega pelo nome
//const perfil = document.getElementsByTagName("perfil") -> pega pela tag

/* var nome = "Pamela" -> variável de escopo global. O ECMA Script diz para parar de usar*/

// variável de escopo local, pode alterar o valor. Padrão do mercado atual

// const sobrenome = "Santos" // variável de escopo local, não pode alterar
// let data = new data

// alert(data)

// const perfil = document.querySelector('.perfil')
// console.log(perfil)

// perfil.style.backgroundColor = "blue"
// perfil.innerHTML="<h1>Erro 404</h1>"

//criar função

let nome = window.document.getElementById("nome")
let email = document.querySelector("#email")
let assunto = document.querySelector("#mensagem")
let nomeOk = false
let emailOk = false
let mensagemOk = false



// nome.style.width = "20px";
// email.style.width = "20px";

function validaNome() {
  let txt = document.querySelector("#txtNome")
  
  if (nome.value.length < 3) {
    txt.innerHTML = "Nome Inválido!"
    txt.style.color = "red"
  } else {
    txt.innerHTML = "Nome Válido!"
    txt.style.color = "green"
    nomeOk = true
  }
}

function validaEmail() {
  let txt = document.querySelector("#txtEmail")

  if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
    txtEmail.innerHTML = "E-mail Inválido";
    txtEmail.style.color = "red"
  } 
  else {
    txt.innerHTML = "E-mail Válido!";
    txt.style.color = "green"
    emailOk = true
  }
}

function validaMensagem() {
  let txt = document.querySelector("#txtMensagem")

  if (mensagem.value.length >= 10) {
    txtMensagem.innerHTML =
      "Digite no máximo 100 caracteres";
    txt.style.color = "red"
    txtMensagem.style.display = "block"
  } else {
    txtMensagem.style.display = "none"
    mensagemOk = true
  }
}

function enviar() {
  if (nomeOk == true && emailOk == true && mensagemOk ==true){
  alert ("Formulário enviado com sucesso!")
  } else {
    alert ("Preencha o Formulário corretamente")
  }
}


function mapaZoom() {
  mapa.style.width = "800px"
  mapa.style.height = "600px"
}

function mapaNormal() {
  mapa.style.width = "400px"
  mapa.style.height = "400px"
}