///////////////////////////////////////////////////// Password Gen

// user choice arrays
var lowerCase = [...'abcdefghijklmnopqrstuvwxyz'];
var upperCase = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
var numOnly = [...'0123456789'];
var charOnly = [...'!"#$%&\'()*+,-./:;<=>?@[\]^_`{|}~'];
var passwordArray = [];

// boolean user choices
var lowers;
var uppers;
var nums;
var chars;

// this will be used for length of password
var length = 0;  

// Assignment code here
function generatePassword() {
  var generatedPassword;
  
  // resetting array and length if user wants to generate another password
  passwordArray = [];
  length = 0;

  // finding length of password and verifying user input
  while (length === 0) {
    var userInput = prompt("Enter password length (8-128).");
    if (userInput >= 8 && userInput <= 128) {
      length = userInput;
    } else {
      alert("Invalid entry, password length must be between (8-128).");
    }
  }
  console.log("length: " + length);

  // finding password criteria
  lowers = confirm("Would you like to use lower case letters?");
  uppers = confirm("Would you like to use upper case letters?");
  nums = confirm("Would you like to use numbers?");
  chars = confirm("Would you like to use special characters?");
  console.log("lower: " + lowers + " uppers: " + uppers + " nums: " + nums + " chars: " + chars);

  // creates passwordArray depending on user criteria
  // checking if user wants lower caser letters
  if (lowers) {
    passwordArray = passwordArray.concat(lowerCase);
  }

  // checking if user wants upper case letters
  if (uppers) {
    passwordArray = passwordArray.concat(upperCase);
  }

  // checking if user wants numbers 
  if (nums) {
    passwordArray = passwordArray.concat(numOnly);
  }

  // checking if user wants special characters
  if (chars) {
    passwordArray = passwordArray.concat(charOnly);
  }

  // if the user doesn't choose any criteria
  if(passwordArray.length === 0){
    alert("You must select at least 1 of the criteria to continue.");
    writePassword();
  }

  // Setting var generatedPassword to the randomly generated pass
  generatedPassword = randomPass(passwordArray);
  return generatedPassword;
}

// randomly generates a password based off user criteria
function randomPass(userArray) {
  var randomPassword = "";
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * userArray.length);
    randomPassword = randomPassword + userArray[randomIndex];
  }
  console.log("Password is : " + randomPassword);
  return randomPassword;
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)