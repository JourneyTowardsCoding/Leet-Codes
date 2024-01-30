QUESTION://2623. Memoize

// Given a function fn, return a memoized version of that function.

// A memoized function is a function that will never be called twice with the same inputs. Instead it will return a cached value.

// You can assume there are 3 possible input functions: sum, fib, and factorial.

// sum accepts two integers a and b and returns a + b.
// fib accepts a single integer n and returns 1 if n <= 1 or fib(n - 1) + fib(n - 2) otherwise.
// factorial accepts a single integer n and returns 1 if n <= 1 or factorial(n - 1) * n otherwise.
 
ANS:

  function memoized(fn){
    const cache = {};
    return function(...args){
      const key = JSON.stringify(atgs);
      if(key in cache){
        return cache[key];
      }
      cache[key] = fn(...args);
      return cache[key];
    }
  }

