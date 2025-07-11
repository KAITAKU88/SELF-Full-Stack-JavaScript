# Game Rock Paper Scissors (Đá - Bao - Kéo)
- Ta sẽ tạo game, và game này sẽ chơi hoàn toàn trong console
- Đây là dự án JavaScript đầu tiên được xây dựng từ đầu.
- Với mỗi bước trong dự án, hãy đảm bảo thực hiện những điều sau:
    1. Lập kế hoạch và viết pseudocode (mã giả) cho giải pháp (thuật toán) của bạn
    2. Sau đó viết mã thật
    3. Test code của bạn để đảm bảo chắc chắn là nó làm việc 
    4. Đảm bảo commit sớm và thường xuyên 


# CÁC BƯỚC
## BƯỚC 1: KHỞI TẠO DỰ ÁN 
1. Tạo 1 Git repo mới cho dự án: rock-paper-scissors
2. Tạo 1 document html trống với thẻ <script>
3. Tạo file .js từ bên ngoài và liên kết với file .html 
4. Bạn không cần viết bất kỳ mã HTML nào, vì game được chơi hoàn toàn trong console.
5. Viết mã console.log("Hello World"); để kiểm tra xem nó có được in ra Console panel khi mở webpage trong trình duyệt không

## BƯỚC 2: VIẾT LOGIC ĐỂ NHẬN VỀ SỰ LỰA CHỌN CỦA MÁY TÍNH
- Game này sẽ chơi với máy tính. Bạn sẽ viết 1 hàm mà trả về ngẫu nhiên "rock", "paper", hoặc "scissors"
- Tạo 1 hàm tên là getComputerChoice
- Viết code mà hàm này trả về ngẫu nhiên một trong 3 chuỗi là "rock", "paper", hoặc "scissors"
-
## BƯỚC 3: VIẾT LOGIC ĐỂ NHẬN VỀ LỰA CHỌN CỦA NGƯỜI CHƠI
- Game này sẽ được chơi bởi 1 con người. Ta sẽ cần viết 1 hàm nhận và trả về lựa chọn của người chơi.
- Tạo 1 hàm tên là getHumanChoice.
- Viết code để hàm này trả về 1 lựa chọn hợp lệ tùy theo cái mà người dùng nhập vào.
- Sử dụng prompt method để nhận về input của người chơi.
- Tại thời điểm này ta không xử lý trường hợp người dùng nhập sai (sẽ học sau). Tức là ta sẽ giả sử người dùng luôn nhập đúng. (Tất nhiên nếu bạn có thể xử lý tình huống người dùng nhập sai thì quá tốt )
- Kiểm tra hàm xem hoạt động đúng không bằng cách sử dụng console.log

## BƯỚC 4: KHAI BÁO BIẾN SCORE CỦA NGƯỜI CHƠI 
- Game sẽ theo dõi điểm (score) của người chơi. Vì vậy bạn cần viết các biến để theo dõi điểm của người chơi.
- Tạo 2 biến tên là humanScore và computerScore phạm vi toàn cục.
- Giá trị khởi tạo của chúng đều là 0.
-
## BƯỚC 5:VIẾT LOGIC (THUẬT TOÁN) ĐỂ CHƠI 1 VÁN (SINGLE ROUND)
- Game này sẽ được chơi theo từng vòng (round).
- hãy tạo 1 hàm tên là playRound
- Xác định 2 tham số là humanChoice và computerChoise làm tham số của hàm.
- Viết code để in ra console.log thông báo xem ai thắng trong mỗi lần chơi.
- Tăng điểm của người chơi lên. 

## BƯỚC 6: VIẾT THUẬT TOÁN (LOGIC) ĐỂ PLAY TOÀN BỘ GAME 
- Game sẽ chơi 5 vòng.
- Bạn sẽ viết 1 hàm tên là playGame() mà sẽ gọi playRound() 5 vòng (rounds). Nhớ theo dõi scores và in ra người chiến thắng ở vòng cuối cùng.
- Di chuyển hàm playRound và biến score để chúng được khai báo bên trong hàm playGame.
- Chơi 5 vòng bằng cách gọi playRound 5 lần.
- Nếu bạn biết về vòng lặp thì có thể sử dụng chúng, nếu không thì cũng không cần lo lắng,vì loops sẽ được học trong các bì tiếp theo. 

## WARNING: 
- Khi làm các dự án tương tác giống như thế này, bạn có thể muốn thực hiện nhiều tính năng hơn, như giao diện người dùng... Chúng tôi khuyên là không nên làm như vậy, hãy tiết kiệm sức lực để làm tiếp nhiều dự án khác, làm đẹp cho portfolio của bạn. 
