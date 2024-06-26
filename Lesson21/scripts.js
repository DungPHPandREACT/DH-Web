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
const listNumber = [3,2,8,6,5, 11, 43, 200];
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
let min = listNumber[0];
let max = listNumber[0];
for(let i = 0; i < listNumber.length;i++){
    if(listNumber[i] < min ){
        min = listNumber[i]
    }
    if(listNumber[i] > max ){
        max = listNumber[i]
    }
}

console.log('min: ', min)
console.log('max: ', max)