var button = document.querySelector("button");

button.onclick = function () {
  var nome = prompt("Qual comando para adicionar um arquivo no Git Bash ?");
  if ((nome === "git add")) {
    alert("Parabéns você acertou !");
    alert(nome + ", adiciona o arquivo no git local.");
    window.location="aula7.html";
  }else if (nome !="git add"){
    alert("Você errou Tente Novamente.");
    alert("Dica");
    alert("Primeiro você iniciar com '$ git' ");
  }else{
    alert("você errou !");
  }

};