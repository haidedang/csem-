let foo = [
  ['a', 9], ['b', 12], ['c', 5], ['d', 7]
];

// greaterThan closure
function greaterThan(min) {
    return function(object){    //returns a function
      return  object[1]> min; // this is true
    }
}

let greaterThan5 = foo.filter(greaterThan(5));/* TODO use Array.filter + greaterThan */;
let greaterThan10 = foo.filter(greaterThan(10));
let greaterThan15 = foo.filter(greaterThan(15));

console.log('> 5 ', greaterThan5); // > 5  [ [ 'a', 9 ], [ 'b', 12 ], [ 'd', 7 ] ]
console.log('> 10 ', greaterThan10); // > 10  [ [ 'b', 12 ] ]
console.log('> 15 ', greaterThan15); // > 15  []


