function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  body: document.querySelector("body"),
  changeColorBtn: document.querySelector(".change-color"),
  fondColor: document.querySelector(".color"),
}

const getChangeColor = (event) => {
  const randomColor = getRandomHexColor();
  refs.body.style.backgroundColor = randomColor;
  refs.fondColor.textContent = randomColor;
}

refs.changeColorBtn.addEventListener("click", getChangeColor);
getChangeColor();