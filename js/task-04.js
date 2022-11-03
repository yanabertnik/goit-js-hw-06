const refs = {
    counter: document.querySelector('#counter'),
    counterValue: document.querySelector('#value'),
    incrementBtn: document.querySelector('button[data-action="increment"]'),
decrementBtn: document.querySelector('button[data-action="decrement"]'),
}

const counter = {
    value: 0,
    increment() {
        this.value += 1;
    },
    decrement() {
        this.value -= 1;
    }
}

refs.incrementBtn.addEventListener('click', function () {
    counter.increment();
    refs.counterValue.textContent = counter.value;
});

refs.decrementBtn.addEventListener('click', function () {
    counter.decrement();
    refs.counterValue.textContent = counter.value;
});