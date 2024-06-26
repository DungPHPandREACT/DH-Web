// let score = prompt("Nhập điểm");

// VD1: Hãy viết chương trình nhập vào một chuỗi s.
// let s = prompt("Nhập s:")
// Nếu chuỗi s có độ dài >= 8, in ra màn hình console “Chuỗi này ok”.
// Ngược lại, in ra “Ngắn quá, dài thêm tí nữa”.
// if(s.length >= 8){
//     console.log("Chuỗi này ok")
// } else{
//     console.log("Ngắn quá, dài thêm tí nữa")
// }

// Phương thức .length trả về độ dài của chuỗi
// VD: const str = "ABCD";
// console.log(str.length) // 4

// VD2: Nhập đầu vào là điểm trung bình của học sinh
// const score = prompt("Nhập điểm trung bình");
// Nếu điểm >= 8  in ra màn hình "Học sinh giỏi"
// Nếu điểm là giá trị nằm trong khoảng 6.5 -> 7.9 in ra màn hình "Học sinh khá"
// Nếu điểm là giá trị nằm trong khoảng 5 -> 6.4 in ra màn hình "Học sinh trung bình"
// Nếu điểm <5 thì in ra màn hình "Học sinh yếu"
// if (score >= 8.0) {
//   console.log("Học sinh giỏi");
// } else if (6.5 <= score && score < 8.0) {
//   console.log("Học sinh khá");
// } else if ((score) => 5.0 && score < 6.5) {
//   console.log("Học sinh trung bình");
// } else {
//   console.log("Học sinh yếu");
// }

// VD: In ra tên tháng
// const month = 2;

// if(month === 1){
//     console.log("Tháng 1")
// }

// switch (month){
//     case 1:
//         console.log("Tháng 1");
//         break;
//     case 2:
//         console.log("Tháng 2");
//         break;
//     case 3:
//         console.log("Tháng 3");
//         break;
//     case 4:
//         console.log("Tháng 4");
//         break;
//     case 5:
//         console.log("Tháng 5");
//         break;
//     case 6:
//         console.log("Tháng 6");
//         break;
//     case 7:
//         console.log("Tháng 7");
//         break;
//     case 8:
//         console.log("Tháng 8");
//         break;
//     case 9:
//         console.log("Tháng 9");
//         break;
//     case 10:
//         console.log("Tháng 10");
//         break;
//     case 11:
//         console.log("Tháng 11");
//         break;
//     case 12:
//         console.log("Tháng 12");
//         break;
//     default:
//         console.log("Tháng không hợp lệ");
//         break;

// }

// const score = 8;
// let message;
// if (score >= 8.0) {
//   message = "Học sinh giỏi";
// } else {
//   message = "Chưa đạt yêu cầu";
// }
// // Sử dụng toán tử 3 ngôi
// message = score >= 8.0 ? "Học sinh giỏi" : "Chưa đạt yêu cầu"


// BT4: Viết chương trình để tìm nghiệm của phương trình bậc hai 
// ax2 + bx + c = 0.  (a,b,c nhập từ bàn phím)
// Theo các nguyên tắc:
// - Nếu a và b cùng bằng 0 thì phương trình vô nghiệm.
// - Nếu b2-4ac là âm, thì phương trình vô nghiệm.
// - Nếu a=0 thì phương trình có một nghiệm là (-c/b).
// - Nếu không, phương trình có hai nghiệm.

// const a = prompt('Nhập a: ');
// const b = prompt('Nhập b: ');
// const c = prompt('Nhập c: ');

// const delta = b**2 - (4*a*c);

// if((a == 0 && b == 0) || delta < 0){
//     console.log("Phương trình vô nghiệm");
// } else if(delta == 0){
//     const value = (-c)/b
//     console.log("Phương trình có nghiệm kép là: ", value);
// } else {
//     const value1 = (-b + Math.sqrt(delta)) / 2*a;
//     const value2 = (-b - Math.sqrt(delta)) / 2*a;
//     console.log("Phương trình có hai nghiệm là: ", value1, value2);
// }

// BT1: Nhập vào 2 số w và h là chiều cao và cân nặng của 1 người. 
// Hãy tính chỉ số BMI và đưa ra kết quả: 
// Nếu BMI < 18.5 → in ra “Nhẹ cân” 
// Nếu 18.5 <= BMI < 23 → in ra “Bình thường” 
// Nếu 23 <= BMI < 25 → in ra “Thừa cân” 
// Nếu BMI >= 25 → in ra “Béo phì”
const w = prompt('Nhập cân nặng (kg): ');
const h = prompt('Nhập chiều cao (m): ');
const BMI = w / h**2;

if(BMI < 18.5){
    console.log('Nhẹ cân');
} else if(BMI >= 18.5 && BMI < 23){
    console.log('Bình thường');
} else if(BMI >= 23 && BMI < 25){
    console.log('Thừa cân');
} else {
    console.log('Béo phì');
}