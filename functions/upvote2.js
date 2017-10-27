// Build a closure that lets users upvote
// under these two constraints:
//   1. voters have a certain amount of karma that they can spend on upvotes
//   2. voters cannot upvote too quickly, i.e.,
//      not within 5 seconds after a previous upvote

// In addition to the previous upvote closure, voters can recharge
// their karma with a recharge(number) method

// Done


function up(karma) {
    var karmaLeft = karma;
    var time;


    return {
        vote: function(vote){


        if (Date.now()-time<5000)
            return console.log("wait 5 sec");
        karmaLeft=  karmaLeft - vote;
        if ( karmaLeft <0 )
            console.log("upvote: " + vote + ", not enough karma " + (karmaLeft +vote));
        else
            console.log('upvote: '+ vote + ' karma: ' +  karmaLeft);
        time = Date.now();
    },
        recharge: function(amount){
            karmaLeft = karmaLeft + amount;
            console.log("20 recharged. Total Karma: " + karmaLeft);
        }

    }
}




let voter1 = up(100);
voter1.vote(90); // upvote: 90, karma left: 10
voter1.recharge(20); // 20 recharged. Total karma now: 30
// call after 5 sec
voter1.vote(15); // upvote: 15, karma left: 15
setTimeout(function(){
    voter1.vote(15);
}, 5000);
