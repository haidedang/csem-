process.stdin.resume();
process.stdin.setEncoding("ascii");
var input = "";
const lettersInAlphabet=26;
array = [];
process.stdin.on("data", function (chunk) {
    console.log('in')
    input += chunk;
});
process.stdin.on("end", function () {
    // now we can read/parse input
    console.log('end')
    console.log(isPangram(input));
});

function isPangram(inputString) {
    inputString.toLowerCase().split(" ").join("").split("").reduce((prev,curr)=>{
        if(array.indexOf(curr)<0) array.push(curr)           
    },{})
    if(array.length === lettersInAlphabet) return 'pangram'
    else return 'not pangram'
}

