var button = document.querySelector("button");

button.onclick = function () {
  var nome = prompt("Qual é o comando para criar uma nova pasta no gitBash ?");
  if ((nome === "mkdir")) {
    alert("Parabéns você acertou !");
    alert(nome + ", é utilizando no git Bash para criar uma pasta local.");
    window.location="aula3.html";
  }else{
    alert("Você errou Tente Novamente");
    
  }
  
};