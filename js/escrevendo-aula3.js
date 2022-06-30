var button = document.querySelector("button");

button.onclick = function () {
  var nome = prompt("Qual comando para iniciar uma pagina index no nano ?");
  if ((nome === "nano index.html")) {
    alert("Parabéns você acertou !");
    alert(nome + ", abre o editor dentro do git Bash.");
    window.location="aula4.html";
  }else if (nome !="nano index.html"){
    alert("Você errou Tente Novamente.");
    alert("Dica");
    alert("Primeiro você iniciar com 'nano' ");
  }else{
    alert("você errou !");
  }

};