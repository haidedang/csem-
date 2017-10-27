// Build a closure that lets users upvote
// under these two constraints:
//   1. voters have a certain amount of karma that they can spend on upvotes
//   2. voters cannot upvote too quickly, i.e.,
//      not within 5 seconds after a previous upvote

// In addition to the previous upvote closure, voters can recharge
// their karma with a recharge(number) method


//DONE
function up(karma) {
  var time;
 return {
    vote: function(upvotes){
      if((Date.now()-time)<5000) return console.log('you are upvoting too quickly');
      if (upvotes> karma) return console.log('not enough karma: ' + karma);
      karma -= upvotes;
      time = Date.now();
      console.log('upvote : ' + upvotes + ', karma left: ' + karma); 
    },
    recharge: function(amount){
      karma+= amount;
      console.log( amount  + ' reacharged. Total karma now: ' + karma);
    }
 }
}

let voter1 = up(100);
voter1.vote(90); // upvote: 90, karma left: 10

voter1.recharge(20); // 20 recharged. Total karma now: 30
// call after 5 sec
setTimeout(function(){voter1.vote(15)},5000); // upvote: 15, karma left: 15
