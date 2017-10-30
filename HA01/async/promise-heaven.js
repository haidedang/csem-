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
    reject('Oh no! ' + err); 
    return;
    }
    resolve('Welcome');
});

const to = (string) => {
  return new Promise((resolve, reject) => {
      err = randomError();  
      if (err) {
        reject('Wut? ' + err); 
        return;
      }
      resolve(string + ' to');
  })
}

  
const paradise = (string) => {
  return new Promise((resolve, reject) => {
      err = randomError();  
      if (err) {
        reject('Srsly? ' + err) 
        return;
      }
      resolve(string + ' paradise \u2601 \u2601');
  })
}

// DONE


welcome.then(to).then(paradise).then(data => console.log(data)).catch(err => console.error(err))

// Example outputs:
// Srsly? A random error occured
// Welcome to paradise ☁☁
// Wut? A random error occured