// var text = document.getElementById("text")

// text.innerHTML = "Hello James"

/*

    DATA TYPES IN JAVASCRIPT

*/

// String 
var userName = "Any Text"

var userName = "sunday"
console.log(userName)

// Number

var num = 23


// Boolean

var isEmployed = true

// Object
var myObj = {
    name: "Adeola",
    age: 23
}

// console.log(myObj.dateOfBirth)

// Arrays 
var myArr = [
    {
        name: "James",
        age: 24,
    },
    {
        name: "Emily",
        age: 26,
    }
]


/*

    TYPES OF OPERATORS IN JAVASCRIPT

*/

// Addition operator +

// Subtraction Operator -

// Multiplication *

// Modulus operator %

// Division Operator /

// Equal to ===

// Not equal to !==

// Greater than >

// Less than

var myName = "Opeyemi"

function addNumbers(num1, num2) {
    console.log(myName);

    if (num1 !== num2) {
        return num1 + num2
    }
}


function addNumbers(num1, num2) {
    if (num1 < num2) {
        return num1 / num2
    }
}


// console.log(addNumbers(154,124))
// console.log(addNumbers(122,124))



function addition() {
    const firstnum = document.getElementById("firstnum")
    const secondnum = document.getElementById("secondnum")
    const result = document.getElementById("result")
    const answer = Number(firstnum.value) + Number(secondnum.value)
    return result.innerHTML = answer

}
function subtraction() {
    const firstnum1 = document.getElementById("firstnum1")
    const secondnum1 = document.getElementById("secondnum1")
    const result1 = document.getElementById("result1")
    const answer = Number(firstnum1.value) - Number(secondnum1.value)
    return result1.innerHTML = answer

}
function division() {
    const firstnum2 = document.getElementById("firstnum2")
    const secondnum2 = document.getElementById("secondnum2")
    const result2 = document.getElementById("result2")
    const answer = Number(firstnum2.value) / Number(secondnum2.value)
    return result2.innerHTML = answer

}
function multiplication() {
    const firstnum3 = document.getElementById("firstnum3")
    const secondnum3 = document.getElementById("secondnum3")
    const result3 = document.getElementById("result3")
    const answer = Number(firstnum3.value) * Number(secondnum3.value)
    return result3.innerHTML = answer

}


//JAVESCRIPT STATEMENT
//document.getElementById("Titilayo")


//Javascript Events
//Javascript event is what a browser does or the user does
//Example of what a user does is "onclick","onchange","onmouseover","onmouseout"
//Example of what a browser does is "onload","onscroll"
function callhover() {
    // alert ("anymessage")
}

//Javascript strings and method
const name = "Titilayo is a girl"
//The length method
console.log(name.length)

function checkPasswordLength() {
    console.log("Password")
    const userInput = document.getElementById("length").value
    console.log(userInput.length)
    console.log(userInput.trim().length)
    console.log(userInput.slice(-3))
    console.log(userInput.slice(0, 5))
}

//Array methods
const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(weekdays.length)
console.log(weekdays)
weekdays.push("Days")
console.log(weekdays)

//The spread operator
const combined = [...weekdays, ...myNumbers]
console.log(combined)
const objects = { name: "Esther",age: 21  }
//TO DO LIST
//Forloop,forin
//local storage
