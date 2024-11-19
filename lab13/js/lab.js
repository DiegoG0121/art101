

const three = "Fizz";
const five = "Buzz";
const seven = "Boom";


function fizzBuzzBoom () {
    let oneLongString = "";
    for(let num = 0; num < 200; num++){
        if(num % 3 == 0 && (num & 5 == 0 || num % 7 == 0)) {
            if(num % 5 == 0 && num % 7 == 0){
                oneLongString += "<br>" + num + ". " + three + five + seven + "!" + "<br>" ;
            } else if(num % 5 == 0) {
                oneLongString += "<br>" + num + ". " + three + five + "!" + "<br>";
            } else {
                oneLongString += "<br>" + num + ". " + three + seven + "!" + "<br>";
            }
        } else if(num % 3 == 0) {
            oneLongString += "<br>" + num + ". " + three + "!" + "</p><br>";
        } else if(num % 5 == 0) {
            oneLongString += "<br>" + num + ". " + five + "!" + "<br>";
        } else if(num % 7 == 0) {
            oneLongString += "<br>" + num + ". " + seven + "!" + "<br>";
        } else {
            oneLongString += "<br>" + num + "." + "<br>";
        }
    }
    return oneLongString;
}

document.getElementById("output").innerHTML = "<div id='fizzBuzzBoom'>" + fizzBuzzBoom() + "</div>";

