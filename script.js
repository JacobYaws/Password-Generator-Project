// Assignment code here

// This global variable sets the password length to whatever the user selects. 
var passwordLength = (prompt("How long would you like your password to be (between 8 and 128 characters)."))
  
// This while loop is set up so if the user selects a number outside of the range or enters in any character that is not a number, the prompt will keep repeating until a valid response is entered.
  while (isNaN(Number(passwordLength)) || (passwordLength < 8 || passwordLength > 128)) {
    passwordLength = (prompt("Enter a number between 8 and 128."))
  }

// These global variables will generate its own prompt for the user to select if they want to include these variables in their password.
var useLower = (confirm("Would you like to use lowercase letters?"))
var useUpper = (confirm("Would you like to use uppercase letters?"))
var useNumber = (confirm("Would you like to use numbers?"))
var useSpecial = (confirm("Would you like to use special characters?"))


// This while loop is setup to force the user to have at least one variable selected for their password. If the user does not specify a variable 
// to use in the first set of prompts, another prompt will pop up and force them to confrim the prompt before they continue, and it will generate a password with only lowercase characters.
  while (!useLower && !useUpper && !useNumber && !useSpecial) {
    useLower = (confirm("No options were selected, click OK to use lower case letters. Refresh the page if you would like to add more character types."))
  }


// This function is used for generating the password. There are local variables set for each character type and will be used in the password if the variable is selected.
function generatePassword() {
  var charset_lower = "abcdefghijklmnopqrstuvwxyz",
      charset_upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      charset_number = "1234567890",
      charset_special = "!#$%&'()*+,-./:;<=>?@[]\^_`{|}~",
      retValue = "",
      charset = "";
  

  // These if loops are used for the prompts generated from the global variables above. If a prompt is accepted, then the character group associated with that prompt will be used in the generated password. If it is declined, that 
  // character group will not be used in the generated password.
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

  
// This for loop is what generates the password. A random number will be generated for each character for the password and that will keep happening until enough characters
// generated to fulfill the password length value that was provided from the first prompt on the page.
  for (var i = 0, n = charset.length; i < passwordLength; i++) {
    retValue += charset.charAt(Math.floor(Math.random() * n));
  } 
  return retValue;

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

