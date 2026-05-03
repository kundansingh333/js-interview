// console.log("Event emiiter concept");
import EventEmitter from "https://cdn.skypack.dev/eventemitter3";

// //Event emitter is a pattern that allows us to create and handle custom events in our application. It is a way to decouple the code and make it more modular. It is used in many libraries and frameworks like Node.js, React, Angular, etc.

// // const EventEmitter = require("events");
// // import { EventEmitter } from "events";

const eventemitter = new EventEmitter();
//creating an event
eventemitter.on("greet", (name) => {
  console.log(`Hello ${name}`);
});

//emitting an event
eventemitter.emit("greet", "John");

// Import directly from a CDN that supports ES Modules
