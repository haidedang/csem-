// Build a closure that lets users upvote
// under these two constraints:
//   1. voters have a certain amount of karma that they can spend on upvotes
//   2. voters cannot upvote too quickly, i.e.,
//      not within 5 seconds after a previous upvote

//Done

function up(karma) {
  var karmaLeft = karma;
  var time;

  return function(vote){



     if (Date.now()-time<5000)
        return console.log("wait 5 sec");
     karmaLeft=  karmaLeft - vote;
     if ( karmaLeft <0 )
         console.log("upvote: " + vote + ", not enough karma " + (karmaLeft + vote));
     else
      console.log('upvote: '+ vote + ' karma: ' +  karmaLeft);
      time = Date.now();
  }
}


let voter1 = up(100);
voter1(90); // upvote: 90, karma left: 10
// voter1(15); // you are upvoting too quickly
// // call after 5 sec
voter1(15);
setTimeout(function(){
    voter1(15)},5000
);
// not eough karma: 10
