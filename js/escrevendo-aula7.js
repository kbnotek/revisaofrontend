var button = document.querySelector("button");

button.onclick = function () {
  var nome = prompt("Qual comando para comitar ?");
  if ((nome === "git commit")) {
    alert("Parabéns você acertou !");
    alert(nome + ", esse comando ele utilizado dentro do git Bash para salvar.");
    window.location="aula8.html";
  }else if (nome !="git commit"){
    alert("Você errou Tente Novamente.");
    alert("Dica");
    alert("Primeiro você iniciar com '$ git' ");
  }else{
    alert("você errou !");
  }

};