// const { memo } = require("react");

let num1 = 0; //toán hạng thứ 1
let num2 = 0; //toán hạng thứ 2
let operator = ""; //nhận toán tử 
//Đây là 1 biến để tổng hợp giá trị trước khi hiển thị lên màn hình
let toScreen = ""; 
let memoryNum = 0; //Giá trị trong bộ nhớ độc lập 
let num1HasValue = false;
let num2HasValue = false;

let isOperator = false; //mặc định là phím này chưa được nhấn 

let display = document.querySelector(".screen");

let mc = document.querySelector(".mc");
let mr = document.querySelector(".mr");
let mMinus = document.querySelector(".mMinus");
let mPlus = document.querySelector(".mPlus");
let acce = document.querySelector(".acce");
let sqrt = document.querySelector(".sqrt");
let percent = document.querySelector(".percent");
let divide  = document.querySelector(".divide");
let multiply = document.querySelector(".muliply");
let minus = document.querySelector(".minus");
let plus = document.querySelector(".plus");
let dot = document.querySelector(".dot");
let plusMinus = document.querySelector(".plusMinus");
let equa = document.querySelector(".equa");
let pi = document.querySelector(".pi");
let square = document.querySelector(".square");
let round_0 = document.querySelector(".round_0");
let round_2 = document.querySelector(".round_2");
let clearOne = document.querySelector(".clearOne");

let nums = document.querySelectorAll(".number");//trả về tất cả các số và dấu .
let opes = document.querySelectorAll(".operator") ;//4 toánn tử +-*/



//Khai báo cách hàm tính toán 

//hàm làm tròn 1 số xuống n chữ số, gồm cả thập phân và phần nguyên 
function mathRound(float, n) {
    // .toPrecision(n) để làm tròn 1 số xuống n ký tự bao gồm cả phần nguyên và phần thập phân
    return float.toPrecision(n);
}
//Hàm làm tròn 1 số xuống còn n chữ số phần thập phân 
function mathFixed(float, n) {
    return Number(float).toFixed(n);
}

//Hàm xóa 1 ký tự cuối cùng của chuỗi và trả về chuỗi đó 
function removeLastOfString(str) {
    return str.substring(0, str.length - 1);
}


//Gắn sự kiện cho các button 
mPlus.addEventListener("click", () => {
    memoryNum += +display.textContent;
})

mMinus.addEventListener("click", () => {
    memoryNum -= +display.textContent;
})

mr.addEventListener("click", () => {
    display.textContent = memoryNum;
});

mc.addEventListener("click", () => {
    memoryNum = 0;
})

plusMinus.addEventListener("click", () => {
    display.textContent = (-1) * display.textContent;
})

//Giá trị PI, nút Pi
pi.addEventListener("click", () => {

    display.textContent = mathRound(Math.PI, 15);
});


//Nút căn bậc 2
sqrt.addEventListener("click", () => {
    display.textContent = mathRound(Math.sqrt(display.textContent), 15);
})

//Nút bình phương x^2
square.addEventListener("click", () => {
    display.textContent = mathRound(Math.pow(display.textContent, 2), 15);


    //Khi bấm nút này liên tục thì số lớn sẽ bị group và dài quá
    //Chưa xử lý được 
})

//Nút R0
round_0.addEventListener("click", () => {
    display.textContent = Math.round(display.textContent);
})



//Nút R2
round_2.addEventListener("click", () => {
    display.textContent = mathFixed(display.textContent, 2);
}) 


//Nút CL là Xóa 1 ký tự
clearOne.addEventListener("click", () => {

    if(display.textContent.length == 1) {
        display.textContent = "0";
    } else {
        display.textContent = removeLastOfString(display.textContent);
    }


})


nums.forEach((element, index, arr) => {
    element.addEventListener("click", () => {


        display.textContent += element.textContent;    

        if (display.textContent.includes(".") == false) {
            //loại bỏ số 0 thừa 
            display.textContent *= 1;
        }

        if (acce.textContent == "AC") {
        acce.textContent = "CE";
        } 

    })
    
})

dot.addEventListener("click", () => {
    if (display.textContent.includes(".")) {
        //không làm gì hết
    } else if (display.textContent == "") {
        display.textContent += "0.";
        //Nếu không có phần này thì có thể sẽ hiển thị .3875 
        //Nếu có thì sẽ hiển thị dạng chuẩn là 0.3875 
    } else {
        //thêm dấu chấm thập phân vào số trên màn hình 
        display.textContent += ".";
    }

    if (acce.textContent == "AC") {
        acce.textContent = "CE";
    }

})


acce.addEventListener("click", () => {
    if (acce.textContent == "CE") {
        num2 = 0;
        display.textContent = "0";
    } else {
        num1 = 0;
        num2 = 0;
        display.textContent = "0";
        
    }
    acce.textContent = "AC";
})




// ==================================================
opes.forEach((element, index, arr) => {
    element.addEventListener("click", () => {
        operator = element.textContent;
        if(isOperator == false) {
            //ép thành number
            //gán số trên màn hình cho num1 
            num1 = +display.textContent;  
            console.log(num1, operator);
            isOperator = true;
        }
        else {

            num2 = +display.textContent;
            console.log(num2, operator);
        }
    })
})


// //Khi bấm nút bằng nó chỉ làm 1 nhiệm vụ là 
// equa.addEventListener("click", () => {
//     console.log(calculate(1, 2, "/"));
// })