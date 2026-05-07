console.log("Hello, World!");
const user = {
  name: "John Doe",
};

console.log(user.name); // Output: John Doe
console.log(user?.name); // Output: John Doe

console.log(user.address?.city); // Output: undefined (address is not defined in user object that's why it returns undefined instead of throwing an error)

// truthy checking:

console.log(user.address && user.address.city); // check if address exists and then access city property, if address is undefined it will return undefined instead of throwing an error

console.log(user.address?.city); // using optional chaining operator to access city property, if address is undefined it will return undefined instead of throwing an error
