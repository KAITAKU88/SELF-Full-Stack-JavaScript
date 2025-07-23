// nhánh này sẽ phân tích và viết lại logic từ đầu
//trả về các phím số 
let numsBtn = document.querySelectorAll(".number");
let dot = document.querySelector(".dot");
let equa = document.querySelector(".equa");
let pi = document.querySelector(".pi");
let screen = document.querySelector(".screen");
//Trả về các toán tử cần 2 toán hạng 
let opes = document.querySelectorAll(".operator");
//các toán tử cần 1 toán hạng
let square = document.querySelector(".square");
let sqrt = document.querySelector(".sqrt");
let plusMinus = document.querySelector(".plusMinus");
let round_0 = document.querySelector(".round_0");
let round_2 = document.querySelector(".round_2");
let mc = document.querySelector(".mc");
let mr = document.querySelector(".mr");
let mPlus = document.querySelector(".mPlus");
let mMinus = document.querySelector(".mMinus");



let memoVar = 0;//biến độc lập cho mc, mr, m+, m-



let operators = "";
let num1 = 0;
let num2 = 0; //đây là 2 toán hạng trong phép tính toán 



//object mapping để chuyển từ operator string sang function 
let operatorToFunction = {
    '/' : (a, b) => {return a/b},
    'x' : (a, b) => {return a*b},
    '+' : (a, b) => {return a + b},
    '-' : (a, b) => {return a - b},
    "pi" : () => {return Math.PI},
    "sqrt" : (a) => {return Math.sqrt(a)},
    "square" : (a) => {return Math.pow(a, 2)},
    "plusMinus" : (a) => {return (-1)*a},
    "r2" : (a) => {return Number(a).toFixed(2)},  //hàm này là gì ?????
    "r0" : (a) => {return Math.round(a)} ,  ///////////////////////???
};






// KHU VỰC OK RỒI 
round_0.addEventListener("click", () => {
    screen.textContent = operatorToFunction["r0"](screen.textContent);
})

round_2.addEventListener("click", () => {
    screen.textContent = operatorToFunction["r2"](screen.textContent);
})

plusMinus.addEventListener("click", () => {
    screen.textContent = operatorToFunction["plusMinus"](screen.textContent);
})

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
        operators = element.textContent;
    })
});

//khi dấu = được nhấn thì 
equa.addEventListener("click", () => {
    //Thực hiện phép tính toán 
    operatorToFunction[operator](num1, num2);  //vấn đề quan trọng là xác định num1, num2???
    //chưa xử lý hiển thị lên màn hình 
});





