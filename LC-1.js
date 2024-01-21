QUESTION:
// Write a function createHelloWorld. It should return a new function that always returns "Hello World".

ANS:
const createHelloWorld = function () {

   return function () {
       return "Hello World"
   }
};

