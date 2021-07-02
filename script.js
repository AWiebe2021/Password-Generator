 // Assignment code here
function generatePassword(){ 
  // setup character sets
  var selectionArray = "";
  const characterSets = new Array("abcdefghijklmnopqrstuvwxyz","ABCDEFGHIJKLMNOPQRSTUVWXYZ","0123456789","!#$%&'()*+,-./:;<=>?@[\]^_`{|}~");
  const csPrompts = new Array("Use lowercase letters? y or n","Use UPPERcase letters? y or n","Use Numbers? y or n","Use Special characters? y or n");

  //User input
  var pwl = 0;
  while (pwl<8 || pwl>128){
    pwl = window.prompt('Set the length of your password to be between 8 and 128 characters');
  };
  //set initial array for password
  var passwordArray = new Array(Number(pwl));

  for (let i = 0; i < characterSets.length; i++) {
    var chooseYorN = "reset";
    while (((chooseYorN.toLowerCase() != "y")&&(chooseYorN.toLowerCase() != "n"))||(chooseYorN.length != 1)){
      chooseYorN = window.prompt(csPrompts[i]);
    };
    if (chooseYorN.toLocaleLowerCase() == "y"){
      //add character set
      selectionArray = selectionArray.concat(characterSets[i]);
      //insert this type of character at a random spot
      i2 = Math.floor(Math.random() * pwl)
      //avoid overwriting previous characters
      while (passwordArray[i2]){
        i2 = Math.floor(Math.random() * pwl);
      }
      passwordArray[i2] = characterSets[i].charAt(Math.floor(Math.random() * characterSets[i].length));
    }
  }

  //Fill in the rest of the password
  if (selectionArray.length > 2){
    for (let i = 0; i < passwordArray.length; i++) {
      if (!passwordArray[i]){
        passwordArray[i] = selectionArray.charAt(Math.floor(Math.random() * selectionArray.length));
      }
    }
  }
  return passwordArray.join("");
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
generateBtn.addEventListener("click", writePassword);
