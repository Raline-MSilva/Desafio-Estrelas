const imagem = document.querySelector('#imagem');
const imagem1 = document.querySelector('#imagem1');
const imagem2 = document.querySelector('#imagem2');
const imagem3 = document.querySelector('#imagem3');
const nomeDoPersonagem = document.querySelector('#nomeDoPersonagem');
const nomeDoPersonagem1 = document.querySelector('#nomeDoPersonagem1');
const nomeDoPersonagem2 = document.querySelector('#nomeDoPersonagem2');
const nomeDoPersonagem3 = document.querySelector('#nomeDoPersonagem3');
const numeroMaximoDePersonagens = 671;

gerarImagemAleatoria = () => {
  return Math.floor(Math.random() * 671);
}
pegarPersonagem = () => {
  let imagemAleatoria = gerarImagemAleatoria();
  return fetch(`https://rickandmortyapi.com/api/character/${imagemAleatoria}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        "Content-type": 'application/json'
      }
  }).then((response) => response.json() ).then((data) => {
      imagem.src = data.image;
      nomeDoPersonagem.innerHTML = data.name;

  });
 }
pegarPersonagem1 = () => {
  let imagemAleatoria = gerarImagemAleatoria();
  return fetch(`https://rickandmortyapi.com/api/character/${imagemAleatoria}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        "Content-type": 'application/json'
      }
  }).then((response) => response.json() ).then((data) => {
      imagem1.src = data.image;
      nomeDoPersonagem1.innerHTML =data.name;

  });
 }


pegarPersonagem2 = () => {
  let imagemAleatoria = gerarImagemAleatoria();
  return fetch(`https://rickandmortyapi.com/api/character/${imagemAleatoria}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        "Content-type": 'application/json'
      }
  }).then((response) => response.json() ).then((data) => {
      imagem2.src = data.image;
      nomeDoPersonagem2.innerHTML = data.name;
 
  });
 }

pegarPersonagem3 = () => {
  let imagemAleatoria = gerarImagemAleatoria();
  return fetch(`https://rickandmortyapi.com/api/character/${imagemAleatoria}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        "Content-type": 'application/json'
      }

  }).then((response) => response.json() ).then((data) => {
      imagem3.src = data.image;
      nomeDoPersonagem3.innerHTML = data.name;

  });
 }
 novaFuncao = () => {
   pegarPersonagem();
   pegarPersonagem1();
   pegarPersonagem2();
   pegarPersonagem3();
 }
document.onLoad=novaFuncao();

