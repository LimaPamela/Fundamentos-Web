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
// variaveis de controle de preenchimento// variaveis de formulário
let nome = document.getElementById("nome")
let email = document.querySelector("#email")
let assunto = document.querySelector("#mensagem")

// variaveis de controle de preenchimento
let nomeOk = false
let emailOk = false
let mensagemOk = false

//variavel de controle do mapa
const mapa = document.querySelector('#mapa')

// nome.style.width = "20px";
// email.style.width = "20px";

function validaNome() {
  let txt = document.querySelector("#txtNome")
  
  if (nome.value.length < 2) {
    txt.innerHTML = "Nome inválido. Digite ao menos 2 caracteres!"
    txt.style.color = "red"
    nomeOk=false
  } else {
    txtNome.innerHTML = "Nome Válido!"
    txtNome.style.color = "green"
    nomeOk = true
  }
}

// function validaEmail() {
//   let txt = document.querySelector("#txtEmail")

//   if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
//     txtEmail.innerHTML = "E-mail Inválido";
//     txtEmail.style.color = "red"
//     emailOk = false
//   } 
//   else {
//     txt.innerHTML = "E-mail Válido!";
//     txt.style.color = "green"
//     emailOk = true
//   }}

function validaEmail2() {
  let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  let txtEmail = document.querySelector('#txtEmail')

  if(email.value.match(regex)){
  txtEmail.innerHTML = "E-mail válido";
  txtEmail.style.color = "green"
  emailOk = false
}else {
  txtEmail.innerHTML = "E-mail Inválido!";
  txtEmail.style.color = "red" 
  emailOk = true
  }
}

function validaMensagem() {
  let txt = document.querySelector("#txtMensagem")

  if (mensagem.value.length > 10) {
    txtMensagem.innerHTML = "Digite no máximo 10 caracteres";
    txtMensagem.style.color = "red"
    // txtMensagem.style.display = "block"
    mensagemOk = false
  } else {
    txtMensagem.innerHTML = mensagem.value.length + '/10'
    mensagemOk = true
  }
}

function enviar() {
  if(nomeOk === true && emailOk === true && mensagemOk === true) {
    alert(nome.value + ', mensagem enviada com sucesso, aguarde meu contato por e-mail.')
  } else {
    alert('Por favor, preencha todos os campos corretamente.')
  }
}

function mapaZoom() {
  mapa.style.width = "800px"
  mapa.style.height = "600px"
}

function mapaNormal() {
  mapa.style.width = "400px"
  mapa.style.height = "300px"
}