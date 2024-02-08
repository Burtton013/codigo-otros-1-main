const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name');
const $b = document.querySelector('.blog'); //tenia un identificador #
const $l = document.querySelector('.location');//Hace falta en el html

//Problema: Se estaba realizando un async/await en una funcion no asincrona
//Solucion: Hacer displayUser una funcion asincrona

async function displayUser(username) { 
  $n.textContent = 'cargando...';
  try {
    const response = await fetch(`${usersEndpoint}/${username}`);
    const data = await response.json();
    $n.textContent = `${data.name}`;
    $b.textContent = `${data.blog}`;//Las comillas estaban mal
    $l.textContent = `${data.location}`;
  } catch (err) {
    console.log('OH NO!');
    console.log(err);
    $n.textContent = `Algo salió mal: ${err}`; //No se estaba haciendo referencia a la variable $n
  }
}

displayUser('stolinski');