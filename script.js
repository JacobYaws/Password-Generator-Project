// Assignment code here






var password_length = (prompt("How long would you like your password to be (between 8 and 128 characters)."))


/*
  while {
    password_length = (isNan()) & 
    (password_length > 8 | password_length < 128);
  }
*/
  while (isNaN(Number(password_length)) || (password_length < 8 || password_length > 128)) {
    password_length = (prompt("Enter a number between 8 and 128."))
  }

var useLower = (confirm("Would you like to use lowercase letters?"))
var useUpper = (confirm("Would you like to use uppercase letters?"))
var useNumber = (confirm("Would you like to use numbers?"))
var useSpecial = (confirm("Would you like to use special characters?"))

function generatePassword() {
    charset_lower = "abcdefghijklmnopqrstuvwxyz",
    charset_upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    charset_number = "1234567890",
    charset_special = "!#$%&'()*+,-./:;<=>?@[]\^_`{|}~"
    retVal = "";
  var charset = "";
  // charset = charset.concat(charset_lower, charset_upper, charset_number, charset_special); 
  
  if (useLower) {
    charset = charset.concat(charset_lower);
  } 

  if (useUpper) {
    charset = charset.concat(charset_upper);
  } 

  if (useNumber) {
    charset = charset.concat(charset_number);
  }     

  if (useSpecial) {
    charset = charset.concat(charset_special);
  } 

  for (var i = 0, n = charset.length; i < password_length; i++) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
  } 
  return retVal;

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



/*
var length = Number(prompt("Enter a password length between 8 and 128")),
  charType = prompt("Enter a character type: special, numeric, uppercase, lowercase."),



function generatePassword() {
  var charSets = {
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    numeric: '0123456789',
    special: ' !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'
  };
  var charSet = charSets[charType.toLowerCase()] || charSets.lowercase;
  var retVal = "";
  for (var i = 0; i < length; i++) {
    retVal += charSet.charAt(Math.floor(Math.random() * charSet.length));
  }
  return retVal;
}
*/