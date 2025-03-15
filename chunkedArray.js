var chunk = function (arr, size) {
    const result = []
    arr.forEach((el, i) => {
        if(i % size === 0) {
            result.push([])
        }
        result.at(-1).push(el)
    })
    return result;
};

// Using foor loop and temp variable for storing the chunked array
var chunk2 = function (arr, size) {
    const result = [];
   let temp = [];

   for (let i = 0; i < arr.length; i++) {
       temp.push(arr[i]);
       if (temp.length === size) {
           result.push(temp);
           temp = []; // Reset temp for the next chunk
       }
   }

   if (temp.length) {
       result.push(temp); // Push remaining elements if any
   }

   return result;
};

// Using slice
const chunk3 = (arr, size) => {
    const chunkedArray = [];
  
    for (let i = 0; i < arr.length; i += size) {
      chunkedArray.push(arr.slice(i, i + size));
    }
  
    return chunkedArray;
};

// Using reduce
const chunk4 = (arr, size) => {
    return arr.reduce((chunkedArray, element) => {
      const lastChunk = chunkedArray[chunkedArray.length - 1];
      if (!lastChunk || lastChunk.length === size) {
        chunkedArray.push([element]);
      } else {
        lastChunk.push(element);
      }
      return chunkedArray;
    }, []);
  };

console.log(chunk([1, 9, 6, 3, 2, 4], 3)); // [[1,9,6],[3,2,4]]
console.log(chunk([8,5,3,2,6], 6)); // [[8,5,3,2,6]]
