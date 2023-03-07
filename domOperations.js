

function showResultInDomKvadrat() {
  const squerSide = document.getElementById('dlinaStoroniKvadrata').value;
  const kvadrat = document.getElementById('ploschadKvadrata');
  kvadrat.innerHTML = squareArea(squerSide)
}

function showResultInDomPriamougolnika() {
  const rectangleSideOne = document.getElementById('pervayaStoronaPriamougolnika').value;
  const rectangleSideTwo = document.getElementById('drugayaStoronaPriamougolnika').value;
  const priamougolnik = document.getElementById('ploschadPriamougolnika');
  priamougolnik.innerHTML = rectangleArea(rectangleSideOne, rectangleSideTwo)
}

function showResultInDomParalelograma() {
  const parallelogramSide = document.getElementById('dlinaStoronyParalelograma').value;
  const parallelogramHeight = document.getElementById('dlinaVisotyParalelograma').value;
  const paralelogram = document.getElementById('ploschadParalelograma');
  paralelogram.innerHTML = parallelogramArea(parallelogramSide, parallelogramHeight)
}

function showResultInDomRomba() {
  const rhombusSide = document.getElementById('dlinaStoronyRomba').value;
  const rhombusHeight = document.getElementById('dlinaVisotyRomba').value;
  const romb = document.getElementById('ploschadRomba');
  romb.innerHTML = rhombusArea(rhombusSide, rhombusHeight)
}