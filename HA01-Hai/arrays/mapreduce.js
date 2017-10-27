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
let wordArray = documents.map(function(item){
  var temp = item[0];
  item[0] = item[1];
  item[1] = temp.split(" ");
  return item;
});

console.log(wordArray);



// Use Array.map() to transform the previous array into this:
// [ [ [ 'Hello', 3 ], [ 'world', 3 ] ],
//   [ [ 'Hello', 1 ], [ 'foo', 1 ] ],
//   [ [ 'foo', 5 ], [ 'bar', 5 ], [ 'foo', 5 ] ] ]
let wordMap = wordArray.map(function(item){
    var arr = [];
    for( var i= 0; i< item[1].length; i++){
      arr.push(item[1].slice(i, i+1));
      arr[i].push(item[0]);
    }
    return arr;
}); // TODO
console.log(wordMap);

// Flatten the array that the last step produced by using Array.reduce()
// and Array.concat()
// The resulting array should look like this:
// [ [ 'Hello', 3 ],
//   [ 'world', 3 ],
//   [ 'Hello', 1 ],
//   [ 'foo', 1 ],
//   [ 'foo', 5 ],
//   [ 'bar', 5  ],
//   [ 'foo', 5 ] ]
let flatWordMap = wordMap[0].concat(wordMap[1]).concat(wordMap[2]);  // TODO
console.log(flatWordMap);

// Use Array.reduce() to produce this final result:
// { Hello: 4, world: 3, foo: 11, bar: 5 }


let weightedWordCount = flatWordMap.reduce(function(a,b){
    for ( var i=0; i< a.length; i++){
      if (a[i] == b[0]){
        a[i+1] = a[i+1] +b[1];
          return a;
      }
    }
    var result = a.concat(b);
    return result;
})
    .reduce(function(ar, it, i) {
    const ix = Math.floor(i/2);
    if(!ar[ix]) {
        ar[ix] = [];
    }
    ar[ix].push(it);
    return ar;
}, [])
    .reduce(function (o, currentArray) {
    var key = currentArray[0], value = currentArray[1];
    o[key] = value;
    return o;
}, {});


// TODO

console.log (weightedWordCount);
