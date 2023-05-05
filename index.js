const btnCopiar = document.querySelector("#copiar");

function encriptar() {
  let texto = document.getElementById("texto").value;
  let tituloMensaje = document.getElementById("titulo-mensaje");
  let parrafo = document.getElementById("parrafo");
  let muñeco = document.getElementById("muñeco");
  let encriptacion = document.getElementById("encriptacion");

  function resultado(prop) {
    document.getElementById("muñeco").style.display = prop;
  }

  let textoCifrado = texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");

  if (texto.length != 0) {
    document.getElementById("texto").value = textoCifrado;
    tituloMensaje.textContent = "";
    parrafo.textContent = "";
    encriptacion.textContent = textoCifrado;
    resultado("none");
    document.getElementById("texto").value = "";
  } else {
    muñeco.src = "./img/muñeco.png";
    tituloMensaje.textContent = "Ningun texto fue encontrado";
    alert("Debes ingresar algún texto");
  }
  document.getElementById("copiar").style.visibility = "visible";
}

function desencriptar() {
  let texto = document.getElementById("encriptacion").textContent;
  let tituloMensaje = document.getElementById("titulo-mensaje");
  let parrafo = document.getElementById("parrafo");
  let muñeco = document.getElementById("muñeco");

  let textoCifrado = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

  if (texto.length != 0) {
    document.getElementById("encriptacion").textContent = textoCifrado;
    tituloMensaje.textContent = "Texto desencriptado con éxito";
    parrafo.textContent = "";
    muñeco.src = "./img/desencriptado.jpg";
  } else {
    muñeco.src = "./img/muñeco.png";
    tituloMensaje.textContent = "Ningun mensaje fue encontrado";
    parrafo.textContent =
      "Ingresa el texto que deseas encriptar o desencriptar";
    alert("Debes ingresar algún texto");
  }
}

function copiar() {
  let textoEncriptado = encriptacion.textContent;
  navigator.clipboard.writeText(textoEncriptado);
}

btnCopiar.onclick = copiar;
