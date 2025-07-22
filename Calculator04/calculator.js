let num1 = 0; //toán hạng thứ 1
let num2 = 0; //toán hạng thứ 2
let operator = ""; //nhận toán tử 
// let screen = 100; 
let memoryNum = 0; //Giá trị trong bộ nhớ độc lập 

let display = document.querySelector(".screen");

let mc = document.querySelector(".mc");
let mr = document.querySelector(".mr");
let mMinus = document.querySelector(".mMinus");
let mPlus = document.querySelector(".mPlus");
let ce = document.querySelector(".ce");
let sqrt = document.querySelector(".sqrt");
let percent = document.querySelector(".percent");
let divide  = document.querySelector(".divide");
let seven = document.querySelector(".seven");
let eight = document.querySelector(".eight");
let nine = document.querySelector(".nine");
let multiply = document.querySelector(".muliply");
let four = document.querySelector(".four");
let five = document.querySelector(".five");
let six = document.querySelector(".six");
let minus = document.querySelector(".minus");
let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let plus = document.querySelector(".plus");
let zero = document.querySelector(".zero");
let dot = document.querySelector(".dot");
let plusMinus = document.querySelector(".plusMinus");
let equa = document.querySelector(".equa");
let pi = document.querySelector(".pi");
let square = document.querySelector(".square");
let round_0 = document.querySelector(".round_0");
let round_2 = document.querySelector(".round_2");
let clearOne = document.querySelector(".clearOne");

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







//Gắn sự kiện cho các button 

plusMinus.addEventListener("click", () => {
    display.textContent = (-1) * display.textContent;
})

//Giá trị PI, nút Pi
pi.addEventListener("click", () => {
    display.textContent = mathRound(Math.PI, 15);
});

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

