var button = document.querySelector("button");

button.onclick = function () {
  var nome = prompt("Qual comando para verificar status do Git?");
  if ((nome === "git status")) {
    alert("Parabéns você acertou !");
    alert(nome + ", mostra o status no git Bash.");
    window.location="aula6.html";
  }else if (nome !="git status"){
    alert("Você errou Tente Novamente.");
    alert("Dica");
    alert("Primeiro você iniciar com '$ git' ");
  }else{
    alert("você errou !");
  }

};