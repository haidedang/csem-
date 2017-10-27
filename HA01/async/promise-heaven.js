// A "helper" function that creates
// some non-deterministic behavior
function randomError() {
  if (Math.random() > 0.7) {
    return 'A random error occured';
  } else {
    return null;
  }
}

// TODO: write the three missing Promises and assign them to the variables
// "welcome", "to", and "paradise"

welcome.then(to).then(paradise).then(data => console.log(data)).catch(err => console.error(err));

// Example outputs:
// Srsly? A random error occured
// Welcome to paradise ☁☁
// Wut? A random error occured
