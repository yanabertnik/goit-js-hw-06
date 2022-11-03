const refs = {
    inputName: document.querySelector('[id="name-input"]'),
outputName: document.querySelector('[id="name-output"]'),
}

const isInputName = (event) => {
    refs.inputName.value.length === 0
        ? (refs.outputName.textContent = "Anonymous")
        : (refs.outputName.textContent = event.currentTarget.value);
};

refs.inputName.addEventListener("input", isInputName);
