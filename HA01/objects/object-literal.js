// Object-literal style object creation
//Old:
// var cat = {
//   meow: 'meowww',
//   speak: function () {
//     return this.meow;
//   },
// };

//DONE
function Cat(meow) {
  this.meow= meow;
  function speak(){
    return this.meow;
  }
}

var loudCat = new Cat("meeeeeooooow")
loudCat.loud = true;
loudCat.shout = function () {
  return this.meow.toUpperCase() + '!!';
};

loudCat.speak = function () {
  if (this.loud) {
    return this.shout();
  } else {
    return this.meow;
  }
};

console.log(loudCat.speak());
loudCat.loud = false;
console.log(loudCat.speak());
