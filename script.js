// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





function generatePassword(){

var lowerChar = "abcdefghijklmnopqrstuvwxzy"

var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

var numChar = "1234567890"

var specialChar = "!@#$%^&*"

var charBank = ""

var newPassword = ""



var totalChar = prompt("How many characters should the password contain? Enter a number between 8 and 128. ")
var lowerConfirm = confirm ("Include lowercase characters?")
var upperConfirm = confirm ("Include upper case characters")
var specialConfirm = confirm ("Include special characters?")
var numConfirm = confirm ("Include numbers?")




if (totalChar >8 && totalChar < 128) {
  totalChar
}
if (lowerConfirm===true) {
  charBank = charBank.concat(lowerChar)
}

if (upperConfirm===true) {
  charBank = charBank.concat(upperChar)
}

if (specialConfirm===true) {
  charBank = charBank.concat(specialChar)
}

if (numConfirm===true) {
  charBank = charBank.concat(numChar)
}

/// max = use all of the available charBank? When I remove it, the password is the first character from the first selected group * totalChar  (if lowerChar is included, aaaa, if not then AAAA, etc,) ///
function choseRandom(max) {
  return [Math.floor(Math.random() * max)]
}

/// why is i < totalChar and not <= ? ///
for (var i = 0; i < totalChar; i++){
  newPassword = newPassword.concat(charBank.charAt(choseRandom(charBank.length - 1)))
}

return newPassword



}







