// Write a program that calculates the sum
// of all command line arguments that
// are passed in when starting the program.
//
// For example:
// node sum.js 1 2 3
// 6

//Done


process.stdin.on('data', function(data){

    var res = data.toString();
    var result = res.split(" ");

    var erg = result.map(Number).reduce(function(a,b){
        return a+b;
        }
    );
    console.log (erg);

});



