var button = document.querySelector("button");

button.onclick = function () {
  var nome = prompt("Qual comando configura o email virtual do git?");
  if ((nome === "git config --global user.email")) {
    alert("Parabéns você acertou !");
    alert(nome + ", este comando vc configura o email do usuario do Git.");
    window.location="aula11.html";
  }else if (nome !="git config --global user.email"){
    alert("Você errou Tente Novamente.");
    alert("Dica");
    alert("Primeiro você iniciar com 'git config --global' ");
  }else{
    alert("você errou !");
  }

};