var entryCount = 0;
var displayCount = 0;


var word ="";
var target ="typethis";

function checkWord (){

   if (word == target.slice(0,word.length)) {
              console.log("good so far");

   }
   else{
    console.log("wrong");

   }

   if (word == target) {
    console.log("done!");
   }
}

document.onkeydown = function(e) {
  if (e.keyCode == 8) {
    word = word.slice(0,word.length - 1);
  }
  if (e.keyCode == 13) {
    // reset the program
    word = " ";
  }
  if (e.key == " ") {
   //reset also
   word = " " ;
  }
   

  // anything contained in this string is allowed to print to the screen
  // you can add numbers or symbols
  if ("abcdefghijklmnopqrstuvwxyz".includes(e.key.toLowerCase())) {
    word = word + e.key;
      checkWord();

  }
  

}


  console.log (word);
  // console.log("entry #" + entryCount + " : " + e.keyCode + " | " + e.key + ". Showing " + displayCount);

