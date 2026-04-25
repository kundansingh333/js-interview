// console.log("hello from closure");

//Execution context
// const username="rahul";
// function login(){
//   const password="secret";
//   console.log(`username is ${username} and password is ${password}`);

// }
// login();


// ******CLOSURE CONCEPT******
// closure is a function that has access to its outer function scope even after the outer function has returned

function callApi(method){
  return function(url){
    console.log(`calling ${url} with ${method} method`);
  }
};

url="https://api.example.com/data";
const get=callApi("GET");
get(url);