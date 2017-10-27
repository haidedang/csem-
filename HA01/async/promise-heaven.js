// A "helper" function that creates
// some non-deterministic behavior
function randomError() {
  if (Math.random() > 0.7) {
    return 'A random error occured';
  } else {
    return null;
  }
}

let welcome = new Promise((resolve, reject)=>{
  err = randomError();
  if (err) {
    console.error('Oh no!', err); return;
    }
    return console.log('Welcome');
});

let to = new Promise((resolve, reject)=>{
  err = randomError();  
    if (err) {
    console.error('Wut?', err); return;
    }
    return console.log(' to');
});

let paradise = new Promise((resolve, reject)=>{
  err = randomError();    
    if (err) {
    console.error('Srsly?', err); return;
    }
    return console.log(' paradise \u2601 \u2601');
});

// TODO: write the three missing Promises and assign them to the variables
// "welcome", "to", and "paradise"

welcome.then(to).then(paradise).then(data => console.log(data)).catch(err => console.error(err));

// Example outputs:
// Srsly? A random error occured
// Welcome to paradise ☁☁
// Wut? A random error occured
