var hash = "#";
while (hash.length <= 7) {
  console.log(hash);
  hash = hash += "#";
}




for (var i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
      console.log(i + " " + "FizzBuzz");
  }
  else if (i % 3 == 0) {
    console.log(i + " " + "Fizz");
  }
    else if (i % 5 == 0) {
      console.log(i + " " + "Buzz");
    }
}


var num = 8;
var chess = '';
var i = 0;

for(i = 0; i < num / 2; i++){
  chess = chess + '# ';
}

for(i = 0; i < num; i ++){
  if(i % 2 === 0){
    console.log(' ' + chess);
  }
  else{
    console.log(chess);
  }
}

//this one took me a while, and some googling, but we got there in the end
// it's a lot simpler than I originally thought!
