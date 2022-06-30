var button = document.querySelector("button");

button.onclick = function () {
  var nome = prompt("Qual comando configura o nome do usuario do git?");
  if ((nome === "git config --global user.name")) {
    alert("Parabéns você acertou !");
    alert(nome + ", este comando vc configura o usuario do Git.");
    window.location="aula10.html";
  }else if (nome !="git config --global user.name"){
    alert("Você errou Tente Novamente.");
    alert("Dica");
    alert("Primeiro você iniciar com 'git config --global' ");
  }else{
    alert("você errou !");
  }

};