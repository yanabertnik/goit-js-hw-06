const list = document.querySelector("#categories");
const categoriesAll = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesAll.length}`);

for(let i = 0; i < categoriesAll.length; i += 1) {
    console.log(`Category: ${categoriesAll[i].firstElementChild.textContent}`);
    console.log(`Elements: ${categoriesAll[i].lastElementChild.childElementCount}`);
}