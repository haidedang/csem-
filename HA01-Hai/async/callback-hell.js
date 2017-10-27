// A "helper" function that creates
// some non-deterministic behavior
function randomError() {
  if (Math.random() > 0.7) {
    return 'A random error occured';
  } else {
    return null;
  }
}

// Welcome to callback hell
function welcome(callback) {
  callback(null, 'Welcome');
}

welcome(function (err, res) {
  err = randomError();
  if (err) {
    console.error('Oh no!', err);
    return;
  }

  var toPrint = (function (err, res) {
      err = randomError();
      if (err) {
        console.error('Wut?', err);
        return;
      }

      return ' to' + (function (err, res) {
            err = randomError();
            if (err) {
              console.error('Srsly?', err);
              return;
            }

            return ' hell!!';
          })();
    })();

  console.log(res + toPrint);
});
