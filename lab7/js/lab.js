//sorts the name of the user
function sortNameTag(){

    let name = window.prompt("Please enter your name:");
    //turns the string into an array
    var splitName = name.split("");
    //sorts the array
    var sortedArray = splitName.sort();
    //makes the array into a string
    var newName = sortedArray.join("");
    
    document.writeln(newName);

}

//calling the function
sortNameTag();