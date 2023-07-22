// Assignment code here

var generateBtn = document.querySelector("#generate");
//var for different character types.
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
var special = ["!", "#", "$", "%", "&", "*", "+", "-", ".", ":", ";", "<", "=", ">", "?", "@", "^", "_", "|", "~",];
var possible = [];


//function for  generating password and how many characters the password will have

function generatePassword() {

  var howManyCharacters = prompt("How many characters would you like your password to have? Choose between 8-128 characters.");
  howManyCharacters = parseInt(howManyCharacters, 10)
  if (howManyCharacters < 8 || howManyCharacters > 128) {
    alert("Please enter a valid between 8 - 128.");
    return;
  } else if (isNaN(howManyCharacters)) {
    howManyCharacters = prompt("Please enter a valid number.");
  }
  else {
    alert("Password will be " + howManyCharacters + " characters long.");

  }
  //created variables for different characters and prompts to confirm of decline the different characters for the password

  var useLowercase = confirm("Click OK to use lower case characters in your password, Cancel if you don't. ");

  var useUppercase = confirm("Click OK to use upper case characters in your password, Cancel if you don't. ");

  var useSpecial = confirm("Click OK to use special characters in your password, Cancel if you don't. ");

  var useNumbers = confirm("Click OK to use numbers in your password, Cancel if you don't.");

  possible = [];
//added alert in case no characters were elected
  if (!useLowercase && !useUppercase && !useNumbers && !useSpecial) {
    alert("Must include at least one of these to generate password. Refresh screen to continue.")
  }
  if (useLowercase) {
    possible = possible.concat(lowercase);
   
  }
  if (useUppercase) {
    possible = possible.concat(uppercase);
   
  }

  if (useNumbers) {
    possible = possible.concat(numbers);
    
  }
  if (useSpecial) {
    possible = possible.concat(special);
    
  }

  var password = "";
//random characters selected for password
  for (let i = 0; i < howManyCharacters; i++) {
    password += possible[Math.floor(Math.random() * possible.length)];
  }
  return password;

}

// Get references to the #generate element

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
