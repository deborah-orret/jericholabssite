function login() {
  if (document.getElementById("username").value == "venividivici" && document.getElementById("password").value == caesarCipher("venividivici", 3)) {
	  window.location.href='dataresults.html'
  } else {
	  document.getElementById("wrongcredentials").innerHTML = "Username or password is incorrect. Please try again.";
  }
}


function caesarCipher(word, shift) {
var result = "";
for (var i = 0; i < word.length; i++) {
var char = word[i];
if (char.match(/[a-z]/i)) {
var code = word.charCodeAt(i);
if (code >= 65 && code <= 90) {
result += String.fromCharCode(((code - 65 + shift) % 26) + 65);
}
// Lowercase letters
else if (code >= 97 && code <= 122) {
result += String.fromCharCode(((code - 97 + shift) % 26) + 97);
}
} else {
result += char;
}
}
return result;
}
