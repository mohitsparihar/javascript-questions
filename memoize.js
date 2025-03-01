/*
Caching is a technique used to improve the performance
of a program by storing the results of expensive operations
and returning the cached result

- Memoization is a technique used to optimize functions that
  are expensive to compute or have repeated computations with 
  the same input.
- The cache is usually implemented as an object or a map that 
  stores the previously computed results.
- When the memoized function is called with a new input, it first 
  checks if the input exists in the cache. If it does, it returns
  the cached value. If it doesn't, it computes the result, stores 
  it in the cache, and returns it.
*/

const memoize = function (fn) {
    const cache = {};
    return function(...args) {
        let key = String(args);
        if(key in cache) {
            return cache(key);
        }

        let result = fn(...args)
        cache[key] = result;
        return result;
    }
}