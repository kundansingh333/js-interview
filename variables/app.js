console.log("hello from let,var,const");

// 1.scope

// function fun() {
//   let a = 10;
//   var b = 20;
//   const c = 30;
//   console.log(a, b, c);
// }
// fun();
// console.log(a);  //reference error
// console.log(b);  //reference error
// console.log(a);  //reference error

// if (true) {
//   let x = 100;
//   var y = 200;
//   const z = 300;
//   console.log(x, y, z);
// }
// console.log(y);
// console.log(x);//reference error
// console.log(z);//reference error

// 2.initialization

// let a;  //valid
// console.log(a);
// var b;   //valid
// console.log(b);
// const c; //SyntaxError: Missing initializer in const declaration

// 3.redeclaration

// var x = 10;
// var x = 20; // this is valid because var allows redeclaration
// console.log(x); // this will print 20

// let y = 30;
// let y = 40; // this is not valid because let allows reassignment but not redeclaration
// console.log(y); // this will not print 40

// const z = 50;
// const z = 60; // this is not valid because const does not allow redeclaration
// console.log(z); // this will not print 60




// 4.reassignment


var a = 10;
a = 20; // this is valid because var allows reassignment
console.log(a); // this will print 20

let b = 30;
b = 40; // this is valid because let allows reassignment
console.log(b); // this will print 40

const c = 50;
c = 60; // this is not valid because const does not allow reassignment
console.log(c); // this will not print 60


// 5.hoisting (already covered in hoisting folder)
