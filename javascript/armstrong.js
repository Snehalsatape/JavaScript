// // program to check an Armstrong number of three digits

// let sum = 0;
// const number = prompt('Enter a three-digit positive integer: ');

// // create a temporary variable
// let temp = number;
// while (temp > 0) {
//     // finding the one's digit
//     let remainder = temp % 10;

//     sum += remainder * remainder * remainder;

//     // removing last digit from the number
//     temp = parseInt(temp / 10); // convert float into integer
// }
// // check the condition
// if (sum == number) {
//     console.log(`${number} is an Armstrong number`);
// }
// else {
//     console.log(`${number} is not an Armstrong number.`);


function isArmstrong(number) {
    let sum = 0;
    let temp = number;
    const digits = String(number).length;
    
    while (temp > 0) {
        let remainder = temp % 10;
        sum += Math.pow(remainder, digits);
        temp = Math.floor(temp / 10);
    }
    
    return sum === number;
}

let userInput = prompt("Enter a 4-digit number:");
let number = parseInt(userInput);

if (userInput.length !== 4 || isNaN(number)) {
    alert("Please enter a valid 4-digit number.");
} else {
    if (isArmstrong(number)) {
        alert(number + " is an Armstrong number.");
    } else {
        alert(number + " is not an Armstrong number.");
    }
}