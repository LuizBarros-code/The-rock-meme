const botao1 = document.getElementById("botao1")
const botao2 = document.getElementById("botao2")
const botao3 = document.getElementById("botao3")


// JavaScript
botao1.addEventListener('click', function() {

  var video = document.createElement('video');

 
  video.src = '/memes/pedra.mp4';

  video.controls = true;


  video.style.width = '100vw';
  video.style.height = '100vh';


  var div = document.getElementById('div-centralizada');

 
  while (div.firstChild) {
    div.removeChild(div.firstChild);
  }

 
  div.appendChild(video);


  video.play();
}
)

botao2.addEventListener('click', function() {

  var video = document.createElement('video');

  
  video.src = '/memes/nem.mp4'; 

  
  video.controls = true;

  
  video.style.width = '100vw';
  video.style.height = '100vh';

  
  var div = document.getElementById('div-centralizada');


  while (div.firstChild) {
    div.removeChild(div.firstChild);
  }

  // Adiciona o vídeo à div
  div.appendChild(video);

  // Inicia a reprodução do vídeo
  video.play();
}
)

botao3.addEventListener('click', function() {
    // Cria um novo elemento de vídeo
  var video = document.createElement('video');

  // Define o atributo 'src' para o URL do vídeo
  video.src = '/memes/TheRock.mp4'; // Substitua 'filme.mp4' pelo URL do seu vídeo

  // Define o atributo 'controls' para exibir os controles do vídeo
  video.controls = true;

  // Faz o vídeo ocupar a tela toda
  video.style.width = '100vw';
  video.style.height = '100vh';

  // Obtém a div que contém o conteúdo atual
  var div = document.getElementById('div-centralizada');

  // Limpa o conteúdo da div
  while (div.firstChild) {
    div.removeChild(div.firstChild);
  }

  // Adiciona o vídeo à div
  div.appendChild(video);

  // Inicia a reprodução do vídeo
  video.play();
}
)