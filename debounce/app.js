console.log("Debounce example");
// debounce-> smart way to handle  events that fire repeatdly within a short time


//without debounce


// let searchbox = document.getElementById("search-box");

// function makeApiCall(query) {
//   console.log(`making API call with query: ${query}`);
// }
// searchbox.addEventListener("input", (e) => {
//   makeApiCall(e.target.value);
// });


//with debounce

let input=document.getElementById("search-box");


function makeApiCall(query){
  console.log(`making API call with query: ${query}`);
}

function debounce(func,delay){
  let timeoutId;
  return function(...args){

    //clear previous timer
    if(timeoutId){
      clearTimeout(timeoutId);
    }

    //start new timer
    timeoutId=setTimeout(()=>{
      func.apply(this,args);  //call the original function with correct context and arguments
    }, delay)
  }
}

// .apply(this,args) is used to call the original function with the correct context and arguments. In this case, it ensures that when the debounced function is called, it will execute the original function (makeApiCall) with the correct value of 'this' and the arguments passed to it.

const processChange=debounce((e)=>{
  makeApiCall(e.target.value);
}, 1000);
input.addEventListener("input",processChange);
