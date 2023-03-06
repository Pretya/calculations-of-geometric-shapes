

function showResultInDomKvadrat() {
  const squer = document.getElementById('dlinaStoroniKvadrata').value;
  const kvadrat = document.getElementById('ploschadKvadrata');
  kvadrat.innerHTML = squareArea(squer)
}

function showResultInDomPriamougolnika() {
  const rectangleA = document.getElementById('pervayaStoronaPriamougolnika').value;
  const rectangleB = document.getElementById('drugayaStoronaPriamougolnika').value;
  const priamougolnik = document.getElementById('ploschadPriamougolnika');
  priamougolnik.innerHTML = rectangleArea(rectangleA, rectangleB)
}

function showResultInDomParalelograma() {
  const parallelogramA = document.getElementById('dlinaStoronyParalelograma').value;
  const parallelogramH = document.getElementById('dlinaVisotyParalelograma').value;
  const paralelogram = document.getElementById('ploschadParalelograma');
  paralelogram.innerHTML = parallelogramArea(parallelogramA, parallelogramH)
}

function showResultInDomRomba() {
  const rhombusA = document.getElementById('dlinaStoronyRomba').value;
  const rhombusH = document.getElementById('dlinaVisotyRomba').value;
  const romb = document.getElementById('ploschadRomba');
  romb.innerHTML = rhombusArea(rhombusA, rhombusH)
}