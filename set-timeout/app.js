// let and const---->block scope
// car ----> function scope




for(let i=0; i<5; i++){
    setTimeout(function(){
        console.log(i);
    }, 2000)
};











// in above code we will get 0,1,2,3,4 because let is block scope and each iteration of loop creates a new scope for i and setTimeout will capture the value of i at that time




// for(var i=0; i<5; i++){
//     setTimeout(function(){
//       console.log(i);
//     },2000);
// };







// in above code we will get 5,5,5,5,5 because var is function scope and by the time setTimeout executes the loop is already completed and i becomes 5

// above same thing can be done without using var or let by using IIFE
// iief-> Immediately Invoked Function Expression



// for(let i=0; i<5; i++){
//   function test(i){
//     setTimeout(function (){
//       console.log(i);
//     },2000);
//   }
//   test(i);
// }

//shorthand
// for(let i=0; i<5; i++){
//   (
//     ()=>{
//       setTimeout(function(){
//         console.log(i);
//       }, 2000)

//   })(i);
  
// }


// what is scope Chain ?
// if you find a variable and it is not present in current scope it will look in the outer scope and if it is not present there it will look in the global scope and if it is not present there it will give a refference error this process is called scope chain


{
  var leaky="hello this will leak";
  let notleaky="hello this will not leak";
  const pi=3.14;

}
console.log(leaky); // this will print "hello this will leak" because var is function scope and it is accessible outside the block

console.log(notleaky); // this will give a reference error because notleaky is block scope and it is not accessible outside the block

console.log(pi); // this will give a reference error because pi is block scope and it is not accessible outside the block


// SCOPE

// 1.Globale Scope
// 2.Function Scope
// 3.Block Scope