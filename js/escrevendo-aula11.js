var button = document.querySelector("button");

button.onclick = function () {
  var nome = prompt("Qual comando para reveter um commit ?");
  if ((nome === "git revert")) {
    alert("Parabéns você acertou !");
    alert(nome + ", remove seu último commit.");
    window.location="premio.html";
  }else if (nome !="git revert"){
    alert("Você errou !");
    alert("você sera redirecionado a primeira pergunta ! ");
    window.location="aula1.html";
  }else{
    alert("você errou !");
    
  }

};