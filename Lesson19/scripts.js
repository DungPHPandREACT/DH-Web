// BT3: Nhập 3 số a,b,c. Tìm số lớn nhất và nhỏ nhất trong 3 số
// let a,b,c, min, max;

// a = prompt('Nhập a: ');
// a = Number(a);
// b = prompt('Nhập b: ');
// b = Number(b);
// c = prompt('Nhập c: ');
// c = Number(c);

// if(a<=b && a<=c){
//     min = a;
// } else if(b<= c && b<=a){
//     min = b;
// } else{
//     min = c;
// }

// console.log("min = ", min);

// BT2: Tính thuế thu nhập và lương ròng
// (số tiền lương thực sự mà nhân viên đó nhận được).
// Với các thông số giả sử như sau:
// -30% thuế thu nhập nếu lương từ 15 triệu.
// -20% thuế thu nhập nếu lương từ 7 đến 15 triệu.
// -10% thuế thu nhập nếu lương dưới 7 triệu.

// (tiền lương nhập từ bàn phím,
// lương ròng là lương thực nhận sau khi đóng thuế)

// let salary = prompt('Nhập lương: ');
// salary = Number(salary);
// let salaryNet;

// if(salary >= 15000000) {
//     salaryNet = salary - (salary * 30 / 100);
// } else if(salary >= 7000000 && salary < 15000000){
//     salaryNet = salary - (salary * 20 / 100);
// } else{
//     salaryNet = salary - (salary * 10 / 100);
// }

// console.log('Lương thực nhận là: ', salaryNet);

// for(let number = 1; number <= 5; number++){
//     console.log(number);
// }

// BT1: In ra dãy số từ 1 đến 500.
// for(let i = 1; i<=500; i++){
//     console.log(i);
// }

// BT2: In ra các số chia hết cho 2 và 3 từ 1 đến 300.
// for(let j = 1; j<=300; j++){
//     if(j % 2 === 0 && j % 3 ===0){
//         console.log(j);
//     }
// }

// for(let j = 6; j<=300; j = j + 6){
//     console.log(j);
// }

// Sử dụng vòng lặp while
// let j = 1;
// while(j<=500){
//     if(j % 2 === 0 && j % 3 === 0){
//         console.log(j);
//     }
//     j++;
// }

// BT3: Tính tổng các số chẵn trong đoạn [-30, 50].
// let sum = 0;
// // NaN (not a number)
// for(let x = -30; x<=50; x++){
//     if(x%2 === 0){
//         sum = sum + x;
//     }
// }
// console.log(sum);

// for (let i = 1; i <= 5; i++) {
//   if (i == 3) {
//     continue;
//   }
//   console.log(i);
// }

// BT4: Nhập vào số n. Tính giai thừa của số n.
// let n = prompt("Nhập n: ");
// n = Number(n);
// let factorial = 1;
// for(let i =1;i<=n;i++){
//     factorial = factorial * i;
// }
// console.log(factorial);

// BT5: Nhập vào 3 số a, b, x (a < b).
// Tìm trong khoảng a, b số nhỏ nhất mà chia hết cho x.

// BT7: Nhập vào số n. Hãy in ra số ước của n.

// BT8: Nhập vào số n. Viết chương trình kiểm tra xem n có phải số nguyên tố không?
// Số nguyên tố là số chia hết cho 1 và chính nó: 2,3,5,7..

// let n = prompt('Nhập n:');
// let count = 0;

// for(let i =1; i<=n; i++){
//     if(n % i === 0){
//         count++;
//     }
// }
// if(count === 2){
//     console.log(n, ' là số nguyên số')
// } else {
//     console.log(n, ' không phải là số nguyên tố')
// }

// BT11: Trò chơi đoán số:
// Máy tính tự động tạo ra 1 số correct bất kỳ từ 1 đến 20.
// Người dùng nhập vào 1 số answer.
// Nếu answer bằng correct → in ra “Đoán đúng”.
// Ngược lại → in ra “Đoán sai” và yêu cầu nhập lại answer.
// Nếu nhập sai answer quá 5 lần → in ra “Bạn đã thua cuộc”.

// let correct = Math.random() * 10 * 2;
// correct = Math.floor(correct)
// let answer;
// for(let i = 1; i<=5; i++){
//     answer = prompt('Nhập đáp án');
//     answer = Number(answer);
//     if(answer === correct){
//         alert('Đoán đúng');
//         break;
//     } else{
//         alert('Đoán sai');
//     }
//     if(i === 5){
//         alert('Bạn đã thua cuộc');
//     }
// }

// Nhập vào 2 số m, n (m >= 2, n > =2).
// Hãy in ra màn hình hình chữ nhật có độ chiều rộng là m và chiều cao là n.

let m, n;
do {
  m = prompt("Nhập m (m>=2): ");
} while (m < 2);

do {
  n = prompt("Nhập n (n>=2): ");
} while (n < 2);

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= m; j++) {
    document.write("* ");
  }
  document.write("<br />");
}
