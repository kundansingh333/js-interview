console.log("hello from hoisting");

//var
console.log(a);
var a;
console.log(a);
//before initialization it will give undefined because of hoisting and after initialization it will give the value of a which is 10
a=10;
console.log(a);


//let,const,class
// console.log(b);
let b;
console.log(b);
b=20;
console.log(b);
//before initialization it will give reference error because of temporal dead zone and after initialization it will give the value of b which is 20

call();
function call(){
  console.log("hello from function");
}

//function expression
// call2();
// call2;
var call2=function(){
  console.log("hello from call2");
}
call2();




