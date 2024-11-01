function isEven(x){
    return (x % 2 == 0)
}

function yesNo(x){ 

    if(isEven(x)){
        return "Yes!"
    } else {
        return "No!"
    }

}

console.log("Is 10 even? " + yesNo(10))
console.log("Is 5 even? " + yesNo(5))

const numberArray = [1, 3, 5, 8, 99, 100, 12, 12]

var even = numberArray.map(isEven)
console.log("Testing the eveness of my array: " + even) 

var rootedNum = numberArray.map(function (x){
    return (x ** 0.5)
})

console.log("The squareroot of my array: " + rootedNum)

document.writeln("This is my array:" + numberArray + "<br>")
document.writeln("<br>")
document.writeln("Evennes of the array: " + even + "<br>")
document.writeln("<br>")
document.writeln("Squareroot of the array: " + rootedNum + "<br>")
document.writeln("<br>")