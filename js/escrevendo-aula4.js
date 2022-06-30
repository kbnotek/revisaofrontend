var button = document.querySelector("button");

button.onclick = function () {
  var nome = prompt("Qual comando para fechar o nano.index.html ?");
  if ((nome === "control+x")) {
    alert("Parabéns você acertou !");
    alert(nome + ", fecha o editor dentro do nano.");
    window.location="aula5.html";
  }else if (nome !="control+x"){
    alert("Você errou Tente Novamente.");
    
  }else{
    alert("você errou !");
  }

};