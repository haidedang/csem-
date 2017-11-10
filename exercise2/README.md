# Exercise 2

Submission deadline: 22.11.2017, end of day

## Node.js (50%)

### N1) Handling command line arguments (10%)

Write a program _nodejs/sum.js_ that calculates the sum of all command line arguments that are passed in when starting the program.

For example:

```
$ node sum.js 1 2 3
6
```

### N2) Event Emitter (10%)

Please complete the code in _nodejs/booking.js_ so that the following program works. In the example shown below, you start the program via `node booking.js` and then input `Picard`, hit ENTER, and so on. You leave the program by entering `exit`.

```
$ node booking.js
Picard
Worf
show
Bookings:  [ 'Picard', 'Worf' ]
exit
```

### N3) Streams (10%)

Please complete the code in _nodejs/copy.js_ so that a file (file path provided as command line argument) is copied when the program is executed.

For example:

`node copy.js dummy.txt`

would create a new file _dummy-copy.txt_ with the same content as _dummy.txt_.

### N4) HTTP (20%)

Please complete the code in _nodejs/index.js_ so that the _nodejs/index.html_ file is served as a response to the following request:

- GET request
- URL path /foo
- If the method or path does not match, return an HTTP response with status code 404 and show the user an error message.

## Express (50%)

Prerequisites:

- Install the dependencies via `$ npm i` (in the _nodejs-express/_ directory)

Use Node.js and express to create a game in which 2 Pokemon fight against one another. In the _nodejs-express/routes.js_ file you see an array with three pokemons. Each pokemon has a name as well as a number that indicates its strength.

You can trigger a fighting match between two pokemon by sending an HTTP POST request at a URL path `/pokemon1/vs/pokemon2`, for example `/Pikachu/vs/Rattata`. To make fights more interesting, please write a middleware function that creates two random numbers which are later, in the routing handler, added to the strength of the first, and second pokemon, respectively.

The HTTP POST route handler computes and returns the result of the fight, i.e., the winner and loser. The winner is the pokemon with higher (strength + random strength) value.

Test the game by starting `$ node index.js` and sending an HTTP POST request via Postman at <http://localhost:3000/pokefight/Pikachu/vs/Rattata>.