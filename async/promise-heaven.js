// A "helper" function that creates
// some non-deterministic behavior
// DONE 

function randomError() {
  if (Math.random() > 0.7) {
    return 'A random error occured';
  } else {
    return null;
  }
}

// TODO: write the three missing Promises and assign them to the variables
// "welcome", "to", and "paradise"



//1st promise

var welcome = new Promise(
    function(resolve,reject){
        var err = randomError();
      if(!err){
        var x = 'Welcome';
        resolve(x);
      } else {
        var text = "Srsly?" + err;
        reject(text);
      }
    }
)

// 2nd promise

// var to = function(first){
//   var text = first + " to";
//   return Promise.resolve(text);
// }

var to = function(first){
  return new Promise(
        function(resolve,reject){
            var err = randomError();
            if(!err){
                var x = first + ' to';
                resolve(x);
            } else {
                var text = "wut?" + err;
                reject(text);
            }
        }
    )
}

//3rd promise

var paradise = function(second){
    var text = second + " paradise";
    return Promise.resolve(text);
}




var test = function(){
  welcome
      .then(to)
      .then(paradise)
      .then(data => console.log(data))
      .catch( error => console.log(error))

};

test();

// welcome
//     .then(to)
//     .then(paradise)
//     .then(data => console.log(data))
//     .catch(err => console.error(err));

// Example outputs:
// Srsly? A random error occured
// Welcome to paradise ☁☁
// Wut? A random error occured
