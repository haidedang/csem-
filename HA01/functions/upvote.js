// Build a closure that lets users upvote
// under these two constraints:
//   1. voters have a certain amount of karma that they can spend on upvotes
//   2. voters cannot upvote too quickly, i.e.,
//      not within 5 seconds after a previous upvote

function up(karma) {
  var time;
  return function(upvotes){
    if((Date.now()-time)<5000) return console.log('you are upvoting too quickly');
    if (upvotes> karma) return console.log('not enough karma: ' + karma);
    karma -= upvotes;
    time = Date.now();
    console.log('upvote : ' + upvotes + ', karma left: ' + karma); 
  }

  // DONE
}

let voter1 = up(100);
voter1(90); // upvote: 90, karma left: 10
voter1(15); // you are upvoting too quickly
setTimeout(function(){voter1(15)},5000); // not eonugh karma: 10
