// nhánh này sẽ phân tích và viết lại logic từ đầu
let numsBtn = document.querySelectorAll(".number");
let dot = document.querySelector(".dot");
let equa = document.querySelector(".equa");
let pi = document.querySelector(".pi");
let screen = document.querySelector(".screen");
let square = document.querySelector(".square");
let sqrt = document.querySelector(".sqrt");



let operator = "";
let num1 = 0;
let num2 = 0; //đây là 2 toán hạng trong phép tính toán 


let opes = document.querySelectorAll(".operator");

let forOneOperand = {
    

}

//object mapping để chuyển từ operator string sang function 
let operatorToFunction = {
    '/' : (a, b) => {return a/b},
    'x' : (a, b) => {return a*b},
    '+' : (a, b) => {return a + b},
    '-' : (a, b) => {return a - b},
    "pi" : () => {return Math.PI},
    "sqrt" : (a) => {return Math.sqrt(a)},
    "square" : (a) => {return Math.pow(a, 2)},
    "+-" : (a) => {return (-1)*a},
};




// 








// KHU VỰC OK RỒI 

square.addEventListener("click", () => {
    //tính toán xong hiển thị lên màn hình 
    screen.textContent = operatorToFunction["square"](screen.textContent);
})

sqrt.addEventListener("click", () => {
    //Tính toán xong thì hiển thị kết quả lên màn hình 
    screen.textContent = operatorToFunction["sqrt"](screen.textContent);
})


pi.addEventListener("click", () => {
    //không cần gán toán tử, vì không có toán hạng 
    //hiển thị lên màn hình 
    screen.textContent = operatorToFunction["pi"]();
})


//Với mỗi nút toán hạng được click thì : 
opes.forEach((element, index, arr) => {
    element.addEventListener("click", () => {
        //Khi 1 toán tử được nhấn thì trả về toán hạng đó để tính toán 
        operator = element.textContent;
    })
});

//khi dấu = được nhấn thì 
equa.addEventListener("click", () => {
    //Thực hiện phép tính toán 
    operatorToFunction[operator](num1, num2);  //vấn đề quan trọng là xác định num1, num2???
    //chưa xử lý hiển thị lên màn hình 
});





