// Password Gen

// user choice arrays
var lowerCase = [...'abcdefghijklmnopqrstuvwxyz'];
var upperCase = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
var numOnly = [...'0123456789'];
var charOnly = [...'!"#$%&\'()*+,-./:;<=>?@[\]^_`{|}~'];
var passwordArray = [];

// boolean user choices
var lowers = true;
var uppers = true;
var nums = true;
var chars = true;

// this will be used for length of password
var length = 0;  

function clipCopy(){
  var copy = document.getElementById("password");
  copy.select();
  document.execCommand("copy");
} 

function showLength(number){
  length = number
  document.getElementById('lengthVal').innerHTML = number
}

// Assignment code here
function generatePassword() {
  var generatedPassword;
  passwordArray = [];
  length = 0;
  length = document.getElementById("passLength").value;
  
  // resetting array and length if user wants to generate another password
  

  // finding password criteria
  // lowers = confirm("Would you like to use lower case letters?");
  // uppers = confirm("Would you like to use upper case letters?");
  // nums = confirm("Would you like to use numbers?");
  // chars = confirm("Would you like to use special characters?");
  // console.log("lower: " + lowers + " uppers: " + uppers + " nums: " + nums + " chars: " + chars);

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
  var passwordText = document.getElementById("password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)