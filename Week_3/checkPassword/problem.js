/* Create a password checker in JavaScript.

You will need three functions:

1) checkPassword() - that compares the password input to a predefined string.
  If the password is a match, redirect page to celebratory gif.
  If not, alert WRONG! and call the clearPassword function to reset input value.
2) clearPassword() - clear the input value.
3) addNum() - append the number clicked to the input value string. i.e if the current
input value is "123", adding 4 should make it "1234"

You will need a for loop to add click event listenrs to each number button.

*/

var _num;
// _numbers returns an array of all spans on the page
var _numbers = document.getElementsByTagName('span');
// _passwordInput returns one element with id="password"
var _passwordInput = document.getElementById('password');
// predefined password to compare
var _password = "12345";
// _checkBtn returns one element with id="check"
var _checkBtn = document.getElementById('check');
// _clearBtn returns one element with id="clear"
var _clearBtn = document.getElementById('clear');


//write a function that compares the input value to a password variable, that redirects
//to a new website if correct, and otherwise shows an error message and clears input value
function checkPassword(){
  /* conditional statement here:
    if password is a match, redirect page
    else, show an error alert and call clearPassword() function
  */

  if (_passwordInput.value == _password) {
    window.location.assign("http://www.google.com");
  }
  else {
    alert("Incorrect Submission");
    clearPassword();
  }

  //CODE for password input value
  //_passwordInput.value

  // CODE to redirect page
  // window.location.assign('http://stream1.gifsoup.com/view4/1181168/leo-strut-o.gif');
}

//write a function that clears the input value
function clearPassword(){

  // Set the value of password input field to an empty string
  _passwordInput.value = "";
}

//write a function that adds a number to the input box when a user clicks it
function addNum(){

  /* set _num equal to the number on the button clicked
    then add that number to the password input field value
    hint: if you had a variable called _helloWorld that was just equal to
    "hello", how would you add "world" to update its value to "hello world"?
  */
  _num = this.innerHTML;
  _passwordInput.value += _num;
  // CODE for number on button clicked
  // this.innerHTML;

}


//Click event listeners

// Add a click listener to check button that calls checkPassword()
_checkBtn.addEventListener('click',checkPassword);
// Add a click listener to clear button that calls clearPassword()
_clearBtn.addEventListener('click', clearPassword);

// Add a click listener to each number button using a FOR LOOP to
// iterate through the array
for (var i=0; i<_numbers.length; i++) {
  _numbers[i].addEventListener('click', addNum);
}

// CODE to add click event listener
// element.addEventListener('click', functionName)
// hint: replace "element" with each number button and
// replace functionName with the function you'd like to acll on click
