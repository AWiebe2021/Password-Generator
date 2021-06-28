// Assignment code here
var lowerAlpha = ("abcdefghijklmnopqrstuvwxyz");
var upperAlpha = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
var numberSet = ("0123456789");
var specialSet = ("~!@#$%^&*_,.?:;");

var pwl = 0;
while (pwl<8 || pwl>128){
  pwl = window.prompt('Set the length of your password to be between 8 and 128 characters');
};

var includeChoice = "h";

while (((includeChoice.charAt(0) != "y")&&(includeChoice.charAt(0) != "n"))||(includeChoice.length != 1)){
  includeChoice = window.prompt('y or n');
};


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
