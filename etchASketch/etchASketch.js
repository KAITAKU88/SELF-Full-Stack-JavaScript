const container = document.querySelector(".container");
const gridSize = container.offsetWidth;
const button = document.querySelector("button");
let  numSquare = 16;
let sizeSquare = Math.trunc(gridSize / numSquare);

function randomRGB() {
  const r = Math.floor(Math.random() * 256); // đỏ
  const g = Math.floor(Math.random() * 256); // xanh lá
  const b = Math.floor(Math.random() * 256); // xanh dương
  return {r, g, b};
}

function createSquare(sizeSquare) {
    const div = document.createElement("div");
    div.style.width = `${sizeSquare}px`;
    div.style.height = `${sizeSquare}px`;
    div.style.border = "0.1px solid black";
    return div;
}

function createGrid(numSquare, sizeSquare) {
    for (let i = 1; i <= numSquare; i++) {
        const div = document.createElement("div");
        div.style.width = gridSize;
        div.style.flex = 1;
        div.style.display = "flex";
        container.appendChild(div);
        for (let j = 1; j <= numSquare; j++) {
            const smallDiv = createSquare(sizeSquare);
            let hover = 0;
            const color = randomRGB();
            smallDiv.style.flex = 1;
            div.appendChild(smallDiv);            
            smallDiv.addEventListener("mouseenter", () => {
                hover++;
                smallDiv.style.background = `rgb(${color.r}, ${color.g}, ${color.b}, ${hover * 0.1})`;
            })
        }
    }
}

//Khi phát hiện page đã tải xong thì gọi hàm tạo grid 
document.addEventListener("DOMContentLoaded", createGrid(16, sizeSquare));

button.addEventListener("click", () => {
    container.innerHTML = ""; //xóa toàn bộ các square 
    numSquare = +prompt("Nhập số square mỗi cạnh: ");
    sizeSquare = Math.trunc(gridSize / numSquare);
    createGrid(numSquare, sizeSquare);    
})


