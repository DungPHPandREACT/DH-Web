// Cách 1:
// Mảng rỗng
// const numbers = [];

// Mảng có các phần tử bên trong
// const listName = ['Nguyễn Văn A', 'Trần Thị B', 'Vũ Văn C'];

// console.log(listName);

// Cách 2:
// Mảng rỗng
// const numbers = new Array();
// console.log(numbers);

// const listName = new Array(
//     'Nguyễn Văn A', // 0
//     'Trần Thị B', // 1
//     'Vũ Văn C' // 2
// );

// for(let i = 0; i<listName.length;i++){
//     console.log(i);
//     console.log(listName[i])
// }


// VD1: Khai báo 1 mảng gồm 4 số bất kỳ khác nhau. 
// const numbers = [10, 7, 4, 9];
// // -In ra phần tử có chỉ số 0 và 3 trong mảng. 
// console.log(numbers[0]);
// console.log(numbers[3]);
// // -Thực hiện phép cộng giữa phần tử có chỉ số 1 và 2. 
// const sum = numbers[1] + numbers[2];
// console.log(sum);

// -Thực hiện hoán đổi giá trị của phần tử có chỉ số 1 và 3.
// Ban đầu
// [10, 7, 4, 9]
// console.log(numbers);
// let temp = numbers[1];
// numbers[1] = numbers[3];
// numbers[3] = temp;
// // Mong muốn
// // [10, 9, 4, 7]
// console.log(numbers);

// VD2: Khai báo 1 mảng gồm các số bất kỳ. 
// const listNumber = [3,2,8,6,5, 11, 43, 200];
// -Hãy in ra các số chẵn trong mảng đó. 
// for(let i = 0; i < listNumber.length;i++){
//     if(listNumber[i] % 2 === 0){
//         console.log(listNumber[i])
//     }
// }
// -Hãy tính tổng các phần tử trong mảng. 
// let sum = 0;
// for(let i = 0; i < listNumber.length;i++){
//     sum = sum + listNumber[i];
// }
// console.log(sum);
// -Hãy tìm phần tử nhỏ nhất trong mảng.
// let min = listNumber[0];
// let max = listNumber[0];
// for(let i = 0; i < listNumber.length;i++){
//     if(listNumber[i] < min ){
//         min = listNumber[i]
//     }
//     if(listNumber[i] > max ){
//         max = listNumber[i]
//     }
// }

// console.log('min: ', min)
// console.log('max: ', max)

// for(let number of listNumber){
//     console.log(number);
// }

// const numbers = [1,2,3];
// console.log(numbers);
// numbers.push(4,5,6,7);
// console.log(numbers);
// numbers.unshift(-2,-1,0);
// console.log(numbers);
// numbers.pop();
// numbers.pop();
// console.log(numbers);
// numbers.shift();
// console.log(numbers);

// const numbers = [1,2,3];
// Sử dụng splice để xóa
// array.splice(index, countDelete)
// numbers.splice(0,3);
// console.log(numbers);

// Sử dụng splice để thêm phần tử
// array.splice(index, 0, element1,..., elementN);
// numbers.splice(2,0, 'a', 'b', 'c');
// console.log(numbers)

// numbers.splice(1,1, 'hai')
// console.log(numbers)

// Cho mảng sau: numbers = [10, 4, -7, 9, 100, 3, -21, 0, 33];
const numbers = [10, 4, -7, 9, 100, 3, -21, 0, 33];
// Tìm phần tử nhỏ nhất / lớn nhất trong mảng.
// Tính tổng các phần tử trong mảng.
// Tính trung bình cộng.
const avg = sum / numbers.length;
// Tìm phần tử đầu tiên chia hết cho 3 trong mảng.
for(let number of numbers){
    if(number % 3 === 0){
        console.log(number);
        break;
    }
}
// Tìm các phần tử là số nguyên tố trong mảng.
for(let number of numbers){
    let count = 0;
    for(let i = 1; i <= number; i++){
        if(number % i === 0){
            count++;
        }
    }
    if(count===2){
        console.log(number, ' là số nguyên tố')
    }
}