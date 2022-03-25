function magic() {
  return function (x) {
    return x * 42;
  };
}
const answer = magic();
console.log(answer); // * function answer จะรับค่าฟังก์ชั่นด้านใน magic
console.log(answer(1337)); // ** function answer จะเป็นฟังก์ชั่นด้านใน magic เมื่อแทนค่าจะได้ 1337 * 42 = 56154
console.log(magic(1337)(42)); // *** ค่า 1337 ใส่ magic โดยตรง จะไม่มีผลเนื่องจาก function magic จะไม่ได้รับ parameter เข้าไป แต่จะคืนค่าเป็น funtion ออกมา ซึ่ง parameter ที่ใส่เข้าไปในฟังก์ชั่นนี้คือ 42 และจะ return 42*42 = 1764
