# Mã giả của chương trình 
## Biến 
>- Tạo biến `num1` để nhận giá trị đầu tiên khi người dùng nhập vào
>- Tạo biến `num2` để nhận giá trị thứ 2 khi người dùng nhập vào. Ta gọi Giá trị lưu trong `num1` và `num2` được gọi là lưu trong bộ nhớ tạm thời. Mặc định ban đầu đều bằng `0`
>- Tạo biến `operator` để nhập toán tử khi người nhập bấm phím cộng, trừ, nhân, chia.
>- Tạo biến `screen` để update giá trị hiển thị trên màn hình. Mặc định ban đầu là  `"0"`
>- Tạo biến `memoryNum` để lưu các giá trị 1 cách độc lập. Mặc định ban đầu là bằng `0`

## Hàm
>- Khi nhấn hím căn x thì sẽ trả về `screen = sqrt(screen)`
>- Phím X^2 sẽ thực hiện phép gán: `screen = screen * screen` 
>- Khi người dùng nhấn vào phím Pi thì trả về số Pi 
>- Khi người dùng nhấn phím `R2` thì sẽ gọi hàm `roundFunc` để làm tròn đến 2 chữ số. Hàm `roundFunc` được viết để làm tròn đến số chữ số bất kỳ. Nhưng ở đây khi người dùng nhấn `R2` sẽ được gọi để làm tròn 2 chữ số.
>- Ngay dưới R2 là R0, tức là 2 phím này sẽ có kích thước bằng 1/2 các phím khác. Cũng gọi hàm `roundFunc` nhưng làm tròn để số nguyên gần nhất.  
>- Khi phím +/- được nhấn thì đơn giản là thực hiện phép gán: `screen = (-1) * screen`




>- Khi phím `CLEAR` được nhấn 1 lần thì sẽ xóa bớt 1 số trên giá trị của `screen`, ví dụ `abc` thì chỉ còn `ab`. Chính là `screen = (screen - c)/10`
>- Khi nhấn phím `CE` thì xóa toàn bộ những gì đang hiển thị trên màn hình (thường là `num2`). Tức là lúc này gán `screen = ""`
>- Khi nhấn `AC` thì xóa toàn bộ giá trị lưu trong bộ nhớ tạm thời , tức là xóa cả `num1` (đã nhập và không hiển thị trên màn hình), và `num2` (chưa nhập, hoặc đã nhập và đang hiển thị trên màn hình).
>- Khi nhấn phím `m+` thì sẽ cộng thêm giá trị đang hiển thị vào bộ nhớ độc lập. Tức là `memoryNum += screen`
>- Khi nhấn `m-` sẽ là `memoryNum -= screen`
>- Khi nhấn `mr` khi sẽ gọi giá trị trong bộ nhớ độc lập. Tức là `screen = memoryNum`
>- Khi nhấn `mc` sẽ xóa bộ nhớ độc lập. Tức là gán `memoryNum = 0`.

## Lưu ý
- Các phím `mc, mr, m-, m+, căn bậc 2, bình phương, PI, R2, R0, CLEAR` đều là thao tác với 1 đối số, thường là số đang hiển thị trên màn hình `screen`  
- Phím `%` sẽ cần xử lý phức tạp hơn.  
- Các Toán tử +, -, x, / cũng sẽ phức tạp hơn vì cần 2 đối số. Làm sao để biết khi nào kết thúc nhập liệu cho đối số 1, khi nào kết thúc nhập liệu cho đối số 2 và tính toán.   
- Gắn trình lắng nghe sự kiện lên các phím cộng, trừ, nhân, chia. Khi phát hiện thấy thì sẽ làm 2 việc:  
    - Gán số trên màn hình cho num1, tức là lúc này `num1 = screen`
    - 
    - Gán toán tử tương ứng cho biến `operator`
- Gắn trình lắng nghe sự kiện trên phím dấu `=`. Khi phím này được nhấn sẽ làm như sau:
    - Kiểm tra nếu giá trị nhập trên màn hình là `0` thì đưa ra thông báo : `screen = "Not a Number"` hoặc `screen = NaN`
    - Nếu số trên màn hình khác 0 thì gán nó cho cho num2 tức là `num2 = screen`.
    - Gọi hàm tính toán `operateFunc` để tính toán tùy theo toán tử.
- Có thể nào chỉ sử dụng 1 hàm `operateFunc` để tính toán 3 phép tính, không cần viết từng hàm con như `add, subtract, multiply, divide` hay  không 

## 2 bước
- Dùng HTML, CSS tạo giao diện gần giống
- Dùng JS để viết logic cho ứng dụng 