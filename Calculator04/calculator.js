// nhánh này sẽ phân tích và viết lại logic từ đầu
let numsBtn = document.querySelectorAll(".number");
let dot = document.querySelector(".dot");
let equa = document.querySelector(".equa");
let pi = document.querySelector(".pi");



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
    "&pi;" : () => {return Math.PI}
};




// 








// KHU VỰC OK RỒI 
pi.addEventListener("click", () => {
    //không cần gán toán tử, vì không có toán hạng 
    operatorToFunction["&pi;"]();
    //Chưa xử lý hiển thị lên màn hình 
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





