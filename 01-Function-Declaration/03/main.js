let message = "Welcome to Thailand";

function logMessage(message) {
  message = "Hello everybody";
  console.log(message); // * Hello everybody เปลี่ยนช้อความในฟังก์ชั่น
}

logMessage(message);
console.log(message); // ** Welcome to Thailand

let name = "John";

function sayHi(input) {
  console.log(name); // ***john
  name = input;
}

sayHi();
console.log(name); // ****undefined
