var texto_cripto = document.getElementById("input_cripto");
var texto_descripto = document.getElementById("resultado__descripto__texto");

function Criptografar() {
  var texto_cripto_input = texto_cripto.value;

  if (texto_cripto_input !== "") {
    document.getElementById("resultado__imagem").style.display = "none";
    document.getElementById("resultado__texto").style.display = "none";
    document.getElementById("resultado__descripto__texto").style.display = "flex";
    document.getElementById("estrutura__botao__copiar").style.display = "flex";
  
    texto_cripto_input = texto_cripto_input.toLowerCase();
  
    let resultado = texto_cripto_input.replace(/e/g,"enter")
    .replace(/i/g,"imes")
    .replace(/a/g,"ai")
    .replace(/o/g,"ober")
    .replace(/u/g,"ufat");
  
    texto_descripto.value = resultado;
    texto_cripto.value="";
  
    return texto_descripto;
  }
}

function Descriptografar() {
  var texto_descripto_input = texto_descripto.value;
  var texto_cripto_input = texto_cripto.value;

  if (texto_cripto_input !== "") {
    document.getElementById("resultado__imagem").style.display = "none";
    document.getElementById("resultado__texto").style.display = "none";
    document.getElementById("resultado__descripto__texto").style.display = "flex";
    document.getElementById("estrutura__botao__copiar").style.display = "flex";
  
    texto_cripto_input = texto_cripto_input.toLowerCase();
  
    let resultado = texto_cripto_input.replace(/enter/g,"e")
    .replace(/imes/g,"i")
    .replace(/ai/g,"a")
    .replace(/ober/g,"o")
    .replace(/ufat/g,"u");
  
    texto_descripto.value = resultado;
    texto_cripto.value="";
  
    return texto_descripto;

    } else {
      document.getElementById("resultado__imagem").style.display = "flex";
      document.getElementById("resultado__texto").style.display = "flex";
      document.getElementById("resultado__descripto__texto").style.display = "none";
      document.getElementById("estrutura__botao__copiar").style.display = "none";
    
      let resultado = texto_descripto_input.replace(/enter/g,"e")
      .replace(/imes/g,"i")
      .replace(/ai/g,"a")
      .replace(/ober/g,"o")
      .replace(/ufat/g,"u");
    
      texto_cripto.value = resultado;
      texto_descripto.value="";
    
      return texto_cripto;
    }
  }

function Copiar() {
  texto_descripto.select();
  document.execCommand("copy");
  texto_descripto.value="";
}