var button = document.querySelector("button");

button.onclick = function () {
  var nome = prompt("Qual comando para empurar o arquvio para o GitHub ?");
  if ((nome === "git push")) {
    alert("Parabéns você acertou !");
    alert(nome + ", este comando dentro do git Bash ele envia tudo para a nuvem GitHub.");
    window.location="aula9.html";
  }else if (nome !="git push"){
    alert("Você errou Tente Novamente.");
    alert("Dica");
    alert("Primeiro você iniciar com '$ git' ");
  }else{
    alert("você errou !");
  }

};