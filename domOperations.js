let squer = document.getElementById('dlinaStoroniKvadrata');
let rectangleA = document.getElementById('pervayaStoronaPriamougolnika');
let rectangleB = document.getElementById('drugayaStoronaPriamougolnika');
let parallelogramA = document.getElementById('dlinaStoronyParalelograma');
let parallelogramH = document.getElementById('dlinaVisotyParalelograma');
let rhombusA = document.getElementById('dlinaStoronyRomba');
let rhombusH = document.getElementById('dlinaVisotyRomba');

function showResultInDomKvadrat() {
  const kvadrat = document.getElementById('ploschadKvadrata');
  kvadrat.innerHTML = squareArea(document.getElementById('dlinaStoroniKvadrata').value)
}

function showResultInDomPriamougolnika() {
  const Priamougolnik = document.getElementById('ploschadPriamougolnika');
  Priamougolnik.innerHTML = rectangleArea(document.getElementById('pervayaStoronaPriamougolnika').value, document.getElementById('drugayaStoronaPriamougolnika').value)
}

function showResultInDomParalelograma() {
  const Paralelogram = document.getElementById('ploschadParalelograma');
  Paralelogram.innerHTML = parallelogramAndRhombusArea(document.getElementById('dlinaStoronyParalelograma').value, document.getElementById('dlinaVisotyParalelograma').value)
}

function showResultInDomRomba() {
  const Romb = document.getElementById('ploschadRomba');
  Romb.innerHTML = parallelogramAndRhombusArea(document.getElementById('dlinaStoronyRomba').value, document.getElementById('dlinaVisotyRomba').value)
}