function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const render = document.querySelector('button[data-create]');
const destroy = document.querySelector('button[data-destroy]');
const boxes = document.getElementById('boxes');
render.addEventListener('click', getAmount);
destroy.addEventListener('click', destroyBoxes);

function getAmount() {
  const amount = +document.querySelector('#controls input').value;
  createBoxes(amount);
}
function createBoxes(amount) {
  const basicSize = 30;
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < amount; i += 1) {
    const size = basicSize + i * 10;
    const div = document.createElement('div');
    div.style.cssText = `width: ${size}px; height: ${size}px; background-color: rgba( ${getRandomHexColor()} , ${getRandomHexColor()} , ${getRandomHexColor()} )`;
    fragment.appendChild(div);
  }
  boxes.appendChild(fragment);
}

function destroyBoxes() {
  boxes.innerHTML = '';
}
