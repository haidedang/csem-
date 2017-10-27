# Exercise 1

Submission deadline: 01.11.2017, end of day

## Functions (25%)

### F1) Build a Reddit-style voting closure (10%)

Fill the _functions/upvote.js_ file with a closure that lets users upvote under these two constraints:

1. voters have a certain amount of karma that they can spend on upvotes
2. voters cannot upvote too quickly, i.e., not within 5 seconds after a previous upvote

The following code is already given to you:

```javascript
function up(karma) {
  // TODO
}

let voter1 = up(100);
voter1(90); // 'upvote: 90, karma left: 10'
voter1(15); // 'not eough karma: 10'
```

The comments in the last two lines show the strings that the `voter1` function calls should return.

Hint: You can use `Date.now()` to get the current time (in Unix/Epoch-style, milliseconds since 1970).

### F2) Extend the Reddit-style voting closure (10%)

Based on the previous task (F1), please fill the _functions/upvote2.js_ file with a closure implementation that adds the following feature: voters can recharge their karma with a `recharge(number)` method.

The following code is already given to you:

```javascript
function up(karma) {
  // TODO
}

let voter1 = up(100);
voter1.vote(90); // 'upvote: 90, karma left: 10'
voter1.recharge(20); // 20 recharged. Total karma now: 30
voter1.vote(15); // 'upvote: 15, karma left: 15'
```

### F3) From ES5 to ES2015 anonymous functions (5%)

Open the file _function/arrow.js_. The console output of `listHotels()` should be:

```
Vulcan Inn Mars
Vulcan Inn Jupiter
```

However, this is not the console output of the current program. Please rewrite the code using ES2015 syntax to fix the issue.

## Arrays (25%)

### A1) Array filter method (10%)

In file _arrays/filter.js_ you see an array with nested arrays as well as some initial structure for filtering items based on the numeric value in the nested array. Please fill out the missing code pieces, so that the console output is identical to what is shown in the comments in the last 3 lines.

```javascript
let foo = [
  ['a', 9], ['b', 12], ['c', 5], ['d', 7],
];

// greaterThan closure
function greaterThan(min) {
  // TODO
}

let greaterThan5 = /* TODO use Array.filter + greaterThan */;
console.log('> 5 ', greaterThan5); // > 5  [ [ 'a', 9 ], [ 'b', 12 ], [ 'd', 7 ] ]
console.log('> 10 ', greaterThan10); // > 10  [ [ 'b', 12 ] ]
console.log('> 15 ', greaterThan15); // > 15  []
```

### A2) Array map and reduce methods (15%)

Compute an array with words and their "weighted word count". In the context of this exercise, weighted word count is defined as: **Sum of (word occurrences in a doc multiplied with the weight of the doc)**

There are different ways to accomplish this task. Please follow the instructions in the given code structure and complete the missing pieces in file _arrays/mapreduce.js_:

```javascript
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
let wordArray; // TODO

// Use Array.map() to transform the previous array into this:
// [ [ [ 'Hello', 3 ], [ 'world', 3 ] ],
//   [ [ 'Hello', 1 ], [ 'foo', 1 ] ],
//   [ [ 'foo', 5 ], [ 'bar', 5 ], [ 'foo', 5 ] ] ]
let wordMap; // TODO

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
let flatWordMap; // TODO

// Use Array.reduce() to produce this final result:
// { Hello: 4, world: 3, foo: 11, bar: 5 }
let weightedWordCount; // TODO
```

## Object-Oriented Programming (25%)

### O1) Object creation (10%)

Take a look at file _objects/object-literal.js_ where a `Cat` and a `LoudCat` object are created. Please re-write the code using the object constructor pattern in lieu of the object literal pattern.

### O2) ES2015 classes and objects (15%)

In file _objects/flight.js_, you see a program with two "classes" of objects: `MarsFlight` and `FastMarsFlight`.

Please rewrite the program using ES2015 `class` syntax (`constructor`, `extends`, `super`, etc.)

Save your ES2015 code in _objects/flight-es2015.js_.

## Asynchronous Programming (25%)

In file _async/callback-hell.js_ is an example that demonstrates the programming anti-pattern of nesting callback functions, leading to a pyramid of doom.

Please rewrite the program using ES2015 `Promises` and save your code in _async/promise-heaven.js_. You need to add three missing `Promises` and assign them to the variables `welcome`, `to`, and `paradise`. Just like in _async/callback-hell.js_, please use the `randomError()` function to simulate non-determinism.

Your objective is to make the following code executable:

```javascript
welcome.then(to).then(paradise).then(data => console.log(data)).catch(err => console.error(err));
```

The output depends on the errors produced by the `randomError()` function. Exemplary outputs are:

```
Srsly? A random error occured
```

```
Welcome to paradise ☁☁
```

```
Wut? A random error occured
```