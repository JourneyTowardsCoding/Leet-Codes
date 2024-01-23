QUESTION://2665. Counter II
// Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

// The three functions are:

// increment() increases the current value by 1 and then returns it.
// decrement() reduces the current value by 1 and then returns it.
// reset() sets the current value to init and then returns it.

ANS:
let createCounter = function(init) {
  let counter = init;
  function increment(){
      return ++counter;
  }

  function decrement(){
      return --counter;
  }

  function reset(){
      
      return counter = init;
  }

  return{
      increment:increment,
      decrement:decrement,
      reset:reset
  }
};
createCounter();