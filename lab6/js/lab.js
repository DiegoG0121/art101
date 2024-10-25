// index.js - purpose and description here
// Author: Your Name
// Date:

// Constants

// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();

// list of modes of transportation
myMainTransportation = ["Bus", "Scooter", "Car", "Bike"];

// this contains a list of information towards my main form of transportation
const wipInfo = {
  make: "NineBot-SegWay",
  model: "G30Max Electric Kick", 
  color: "black",
  year: 2019,
  age: function(){ 
    return 2024 - this.year;
  }
};

// adds spaces between each item in the list when printed out into text format
function addSpace(listInput){

  this.listInput = listInput;
  newList = [];
  for(let i = 0; i < this.listInput.length; i++){
    newList[i] = myMainTransportation[i]+" ";
  }

  return newList;
}

//will print out my different modes of transportation
document.writeln("These are my main form of tansportation: " + addSpace(myMainTransportation) + "<br>");
//print out my information in its format
document.writeln("My main ride: <pre>",
  JSON.stringify(wipInfo, null, '\t'), "</pre>");

//if I own it or not
ownIt = true;

//will print one or another based on the boolean
if(ownIt) {
  document.writeln("I do own it!");
} else {
  document.writeln("I don't own it!");
}
