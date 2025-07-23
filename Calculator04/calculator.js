// nhánh này sẽ phân tích và viết lại logic từ đầu

//trả về các phím số 
let numsBtn = document.querySelectorAll(".number");
let dot = document.querySelector(".dot");
let equa = document.querySelector(".equa");
let pi = document.querySelector(".pi");
let acce = document.querySelector(".acce");
let screen = document.querySelector(".screen");
//Trả về các toán tử cần 2 toán hạng 
let opes = document.querySelectorAll(".operator");
//các toán tử cần 1 toán hạng
let square = document.querySelector(".square");
let sqrt = document.querySelector(".sqrt");
let plusMinus = document.querySelector(".plusMinus");
let round_0 = document.querySelector(".round_0");
let round_2 = document.querySelector(".round_2");
let clearOneLast = document.querySelector(".clearOne");
//Trả về các phần tử mc, mr, m+, m-
let memoryElements = document.querySelectorAll(".memory");



let memoVar = 0;//biến độc lập cho giá trị trong bộ nhớ dùng cho mc, mr, m+, m-
let memoOperator="";//Đại diện cho các toán tử mc, mr, m-, m+

let operators = ""; //đại diện cho các toán tử 2 toán hạng như +, -, *, /, %
let num1 = 0;
let num2 = 0; //đây là 2 toán hạng trong phép tính toán 


//hàm xử lý phần trăm, đưa hàm này vào bên trong đối tượng operatorToFunction 


//object mapping để chuyển từ operator string sang function 
let operatorToFunction = {
    '/' : (a, b) => {return a/b},
    'x' : (a, b) => {return a*b},
    '+' : (a, b) => {return a + b},
    '-' : (a, b) => {return a - b},
    '%' : (a, b) => {return },           //xử lý hàm %????????????????????
    "pi" : () => {return Math.PI},
    "sqrt" : (a) => {return Math.sqrt(a)},
    "square" : (a) => {return Math.pow(a, 2)},
    "plusMinus" : (a) => {return (-1)*a},
    "r2" : (a) => {return Number(a).toFixed(2)},  
    "r0" : (a) => {return Math.round(a)} ,  
    "mc" : () => {memoVar = 0}, //xóa bộ nhớ độc lập 
    "mr" : () => {screen.textContent = memoVar},
    "m-" : () => {memoVar -= screen.textContent},
    "m+" : () => {memoVar += screen.textContent},
    //Nếu số chỉ còn 1 ký tự, khi xóa nốt thì sẽ hiển thị 0 thay vì màn hình rỗng 
    "CL" : (a) => {return (a.length > 1) ? a.substring(0, a.length - 1): 0;
    }
};






// KHU VỰC OK RỒI 

memoryElements.forEach((element, index, arr) => {
    element.addEventListener("click", () => {
        memoOperator = element.textContent;
        operatorToFunction[memoOperator]();
        console.log(memoVar);
    })
})

clearOneLast.addEventListener("click", () => {
    screen.textContent = operatorToFunction["CL"](screen.textContent);
})

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
        //cần xử lý gì với num2, num1 ở đây 
    })
});

//khi dấu = được nhấn thì 
equa.addEventListener("click", () => {
    //Thực hiện phép tính toán 
    operatorToFunction[operators](num1, num2);  //vấn đề quan trọng là xác định num1, num2???
    //chưa xử lý hiển thị lên màn hình 
});

//khi các button số được nhấn


//Khi nút dot được nhấn 



// Khi nút % được nhấn 



//Khi AC, CE được nhấn 
