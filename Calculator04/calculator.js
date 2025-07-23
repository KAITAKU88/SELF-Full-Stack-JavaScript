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
let num1 = "0";//ta khai là chuỗi, không phải số vì để nối chuỗi sau này 
let num2 = "0"; //đây là 2 toán hạng trong phép tính toán 
let isNum2 = false;// Mặc định giá trị trên screen được gán cho num1 


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
    },
    "ACCE" : () => {
        if (acce.textContent == "CE") {
            num2 = 0;
            screen.textContent = 0;
            acce.textContent = "AC";
        } else {
            num1 = 0;
            num2 = 0;
            screen.textContent = 0;
        }
    },   
    "numsbutton": (element) => {
        return createNumberDisplay(element);
    },
    "dot" : (element) => {
        return createNumberDisplay(element);
    }

};

//Kết hợp nội dùng hàm dot, hàm numsbutton, acce.textContent,

function createNumberDisplay (element) {
    if(element.textContent !== ".") {
        //xử lý hàm để loại số 0 ở đầu, nhưng không loại bỏ số 0 ở sau 
        if(screen.textContent == "0") {
            //do nothing
            screen.textContent = element.textContent
        } else {
            screen.textContent += element.textContent;

        }

        if(screen.textContent != "0") {
            acce.textContent = "CE";
        }
        
        return screen.textContent;

    }
    else {
        acce.textContent = "CE";
        //Kiểm tra, nếu số trên màn hình chưa có dấu . thì mới thực hiện 
        if (String(screen.textContent).includes(".") == true) {
            console.log("included `.`");
            //do nothing
        } else {
            if (screen.textContent == "0") {
                screen.textContent = "0.";
            }
            else {
                screen.textContent += ".";
            }
        }
        return screen.textContent;
    }
}







// Khi nút % được nhấn 




/*
Khi 1 trong 5 toán tử %, /, x, -< + 
- Sau khi nhấn 1 trong 5 toán tử ta đã có num1 và toán tử operators.
- Ta cần num2 nữa để thực hiện phép toán 
*/
opes.forEach((element) => {
    element.addEventListener("click", () => {
        //Nhận diện toán tử 
        operators = element.textContent;
        //Gán giá trị trên màn hình cho num1 
        num1 = screen.textContent;
        //kích hoạt num2, để bắt đầu gán cho num2.
        isNum2 = true;
    })
});

equa.addEventListener("click", () => {
    //
    //Viết 1 hàm để dùng trong đây, hàm này dùng cho cả dot và numsBtn luôn. Viết hàm độc lập bên ngoài
    //hàm này cho phép nhận các element.textContent để nối thành 1 số có nghĩa.
    


    //sau khi nhấn = ta có đủ 3 yếu tố để thực hiện phép toán 
})






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
    acce.textContent = "CE";
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

//khi các button number được nhấn
numsBtn.forEach((element) => {
    element.addEventListener("click", () => {
         operatorToFunction["numsbutton"](element);
        // if(screen.textContent != "0") {
        //     acce.textContent = "CE";
        // }
    })
})

//Khi nút dot được nhấn 

dot.addEventListener("click", () => {
    acce.textContent = "CE";
    operatorToFunction["dot"](dot);

})



//Khi AC, CE được nhấn 
acce.addEventListener("click", () => {
    operatorToFunction["ACCE"]();
})

