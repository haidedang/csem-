//DONE

const express = require('express');
const router = express.Router();
let pokemon = [
  { name: 'Charmander', strength: 70 },
  { name: 'Rattata', strength: 45 },
  { name: 'Pikachu', strength: 60 },
];

// TODO: Middleware function #1.
// Create two random numbers, each
// between 0 and 20.
// Assign the two numbers to the request object
// property 'randomStrength'.

router.use((req,res,next)=>{

  function random(min,max) {
    return Math.random()*(max-min) + min;
  }

   req.randomStrength = [];
  var s1 = random(0,20);
  var s2 = random(0,20);
  req.randomStrength.push(s1);
  req.randomStrength.push(s2);
  console.log(req.randomStrength);
  next();
})

// Middleware function #2.
// Log on console who is fighting against whom.
router.use('/:p1/vs/:p2', (req, res, next) => {
  console.log(`The fight is on between ${req.params.p1} and ${req.params.p2}.`);
  next();
});

// TODO: POST request handler that performs the fight
// by comparing the pokemon's strength + their
// respective 'randomStrength'.
// Return winner and loser in the response.
router.post('/:p1/vs/:p2', (req, res) => {
  // TODO: implement the route handler

    var pokemon1 = {};
    var pokemon2 = {};

    pokemon.some((poke) => {
        if (req.params.p1 == poke.name) {
            pokemon1.name= poke.name;
            pokemon1.strength= poke.strength;
            pokemon1.strength = poke.strength + req.randomStrength[0];
            console.log(pokemon1);
        }
        return poke.name === req.param.p1;
      });

    pokemon.some( (poke) => {
        if (req.params.p2 == poke.name) {
            pokemon2.name= poke.name;
            pokemon2.strength= poke.strength;
            pokemon2.strength = poke.strength + req.randomStrength[1];
            console.log(pokemon2);
        }
        return poke.name === req.param.p2;
    });

    function fight(pokemon1, pokemon2){

      if (pokemon1.strength > pokemon2.strength ) {

          res.write('The Winner is ' + req.params.p1);
      }
      else {
        res.write('The Winner is ' + req.params.p2);
      }
    }

    fight(pokemon1,pokemon2);
    res.end();
});

module.exports = router;
