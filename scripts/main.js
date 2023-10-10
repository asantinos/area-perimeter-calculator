/**
 * Autor: Alejandro Santos Garcia
 * Github repository: https://github.com/asantinos/area-perimeter-calculator.git
 */

const area = document.getElementById("area");
const perimeter = document.getElementById("perimeter");

const calculateBtn = document.getElementById("calculate");

calculateBtn.addEventListener("click", () => {
  const height = parseFloat(document.getElementById("height").value);
  const width = parseFloat(document.getElementById("width").value);

  let areaResult = height * width;
  let perimeterResult = 2 * (height + width);

  area.textContent = areaResult;
  perimeter.textContent = perimeterResult;
});
