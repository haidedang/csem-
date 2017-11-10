const events = require('events');

let em = new events.EventEmitter();
let bookings = [];

function performBooking(newBooking) {
  bookings.push(newBooking);
}

// TODO: Attach an event handler (callback)
// that listens for 'booking' events.

//DONE

// standard input and output streams also
// use events
process.stdin.on('readable', () => {
  let input = process.stdin.read();
  if (input !== null) {
    let tInput = input.toString().trim();
    console.log('tInput'+ tInput);


    if (tInput === 'show') {
      console.log('Bookings: ', bookings);
    } else if (tInput === 'exit') {
      process.exit(0);
    }
    else {
      // TODO: emit a new event

      //   performBooking(tInput);
            bookings = [];
            em.on('data', () => {
              console.log('Tinput von event ist : ')
                console.log(tInput);
              performBooking(tInput);
              console.log(bookings);

            });
            em.emit('data');
    }
  }
});
