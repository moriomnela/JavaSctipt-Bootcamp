// const date = new Date();

// console.log(`
// ${
// date.getHours() >12 ? date.getHours() - 12:date.getHours()
// }:${date.getMinutes()}:${date.getSeconds()} ${
// date.getHours() >12 ? "PM":"AM"
// }
// `); 


//===Class 17=====
//=======email====
// let email = "nelamoriom@gmail.com";
// const pattern = /^[a-z_0-9\.]{1,}@[a-z]{1,}\.[a-z]{1,5}$/;
// console.log(pattern.test(email));

//=====phone number====
let phone = "01735477827";
const pattern = /^(\.+8801|8801|01)[0-9]{9}$/;
console.log(pattern.test(phone));