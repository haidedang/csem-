// Exercise: compute an array with words and their weighted word count
// Weighted word count is here defined as:
// Sum of (word occurrences in a doc * weight of the doc)

// The document array contains nested [text,weight] arrays.
const documents = [
  ['Hello world', 3],
  ['Hello foo', 1],
  ['foo bar foo', 5],
];

// Use Array.map() to produce this intermediary result:
// [ [ 3, [ 'Hello', 'world' ] ],
//   [ 1, [ 'Hello', 'foo' ] ],
//   [ 5, [ 'foo', 'bar', 'foo' ] ] ]
let wordArray = documents.map(arr => [arr[1], arr[0].split(" ")]); // DONE
//console.log(wordArray);

// Use Array.map() to transform the previous array into this:
// [ [ [ 'Hello', 3 ], [ 'world', 3 ] ],
//   [ [ 'Hello', 1 ], [ 'foo', 1 ] ],
//   [ [ 'foo', 5 ], [ 'bar', 5 ], [ 'foo', 5 ] ] ]
//let wordMap= wordArray.map(arr => [[arr[1][0],arr[0]] , [arr[1][1], arr[0]], [arr[1][2],arr[0]]]);
let wordMap = wordArray.map(arr => arr[1].map(elem => [elem, arr[0]]));  // DONE
//console.log(wordMap);

// Flatten the array that the last step produced by using Array.reduce()
// and Array.concat()
// The resulting array should look like this:
// [ [ 'Hello', 3 ],
//   [ 'world', 3 ],
//   [ 'Hello', 1 ],
//   [ 'foo', 1 ],
//   [ 'foo', 5 ],
//   [ 'bar', 5 ],
//   [ 'foo', 5 ] ]
let flatWordMap = wordMap.reduce((a,b) => a.concat(b));
//console.log(flatWordMap);

// Use Array.reduce() to produce this final result:
// { Hello: 4, world: 3, foo: 11, bar: 5 }

let weightedWordCount =  flatWordMap.reduce(function(result,data){
  result.indexOf(data);
  if (result.indexOf(data)<0){
    result.push(data);
  }else{
    result.indexOf(data)[1] += data[1];
  }
});

//funktioniert nicht, da indeOf nicht geht

console.log(weightedWordCount);
