let let_number = 10;
//let number = 20; Response: Error
let_number = 15;
console.log('Let: ' + let_number);

const conts_number = 44;
//number = 50; Response: Error
console.log('Const: ' + number);

const numbers = [50, 60, 30];
//numbers = [50, 60, 30, 40]; Response: Error
numbers.push(10);
console.log('Array Const: ' + numbers);