function encriptado() {
  let texto = document.getElementById("texto").value;

  let textoCiffrado = texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ea")
    .replace(/o/gi, "enter")
    .replace(/u/gi, "enter");
}
