// js doc

var _divs = document.getElementsByTagName('div');
//console.log(_divs);

var _paragraphs = document.getElementsByTagName('p');
console.log(_paragraphs);

var _labels = document.getElementsByClassName('label');
// console.log(_labels);

var _box1 = document.getElementById('box1');
//console.log(_box1);

// function alertText(element){
// 	alert(element.innerHTML);
// }


// for (var i = 0; i<_divs.length; i++) {
// 	_divs[i].addEventListener('click',alertText);
// }



function makeCircle() {
	for (var i = 0; i<_divs.length; i++) {


		_divs[i].style.borderRadius = '50%';

	}
}

function makeSquare() {
	for (var i = 0; i<_divs.length; i++) {
		_divs[i].style.borderRadius = '0';
	}
}

function makeWhite() {
	for (var i=0; i<_divs.length; i++) {
		_divs[i].style.backgroundColor = 'white';
	}
}

function makeRed() {
	for (var i=0; i<_divs.length; i++) {
		_divs[i].style.backgroundColor = 'red';
	}
}

function makeBlue() {
	for (var i=0; i<_divs.length; i++) {
		_divs[i].style.backgroundColor = 'blue';
	}
}


function toggle() {
	if (_divs[0].style.display == 'none') {
		document.getElementById('hide').innerHTML = 'hide';
		
		for (var i = 0; i<_divs.length; i++) {
			_divs[i].style.display = 'block';
		}
	}
	else {
		document.getElementById('hide').innerHTML = 'show';
		for (var i = 0; i<_divs.length; i++) {


		_divs[i].style.display = 'none';

		}
	}
	
}

document.getElementById('circle').addEventListener('click', makeCircle);

document.getElementById('hide').addEventListener('click', toggle);

document.getElementById('square').addEventListener('click', makeSquare);

document.getElementById('red').addEventListener('click', makeRed);

document.getElementById('blue').addEventListener('click', makeBlue);

document.getElementById('white').addEventListener('click',makeWhite);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//get class to be added
// var _addClass = document.getElementById('addClass').value;
// var _newClass = document.getElementsByTagName(document.getElementById('tagClassAdd').value);

// function addClass(tagArray,className) {
// 	for (var i = 0; i<tagArray.length; i++) {
// 		if(tagArray[i].className != "") {
// 			tagArray[i].className +=" " + className;
// 		}
// 		else {
// 			tagArray[i].className += className;
// 		}
// 	}
	
// }

// document.getElementById('submitAddClass').addEventListener('click',addClass(_newClass,_addClass));
// console.log(_newClass);
// var tagName = "";
// var className = "";



// function addClass(tagName,className) {
// 	var _newClass = document.getElementsByTagName(tagName);
// 	for (var i = 0; i<_newClass.length; i++) {
// 		if (_newClass[i].className != "") {
// 			_newClass[i].className += " " + className;
// 		}
// 		else {
// 		_newClass[i].className +=  className;
// 		}
// 	}
// 	console.log(_newClass);

// }

// addClass('p','newClass');


/////////////////////////////////////////////////////////////////////////////////////////////////////////

document.getElementById('submitAddClass').addEventListener('click', function() {
	var _addClassName = document.getElementById('addClass').value;
	var _newClass = document.getElementsByTagName(document.getElementById('tagClassAdd').value);
	for (var i = 0; i<_newClass.length; i++) {
		if (_newClass[i].className != "") {
			_newClass[i].className += (" " + _addClassName);
		}
		else {
		_newClass[i].className +=  _addClassName;
		}
	}
	console.log(_newClass);
	

});


/////////////////////////////////////////////////////////////////////////////////////////////////////////


document.getElementById('submitRemoveClass').addEventListener('click',function() { 
	var _removeClassName = document.getElementById('removeClass').value;
	var _classRemove = document.getElementsByTagName(document.getElementById('tagClassRemove').value);
	for (var i =0; i<_classRemove.length; i++) {
		// _classRemove[i].className = _classRemove[i].className.replace(new RegExp('(?:^|s)' + _removeClassName + '(?!S)'), '');
		_classRemove[i].className = _classRemove[i].className.replace(_removeClassName, "");

	}
	console.log(_classRemove);
});


// function removeClass(tagName,className) {
// 	var _classRemove = document.getElementsByTagName(tagName);

// 	for (var i = 0; i<_classRemove.length; i++) {
// 		_classRemove[i].className = _classRemove[i].className.replace(new RegExp('(?:^|s)' + className + '(?!S)'), '');
			
	
// 	}
// 	console.log(_classRemove);
// }

// removeClass('p','newClass');

// function toggleClass()

/////////////////////////////////////////////////////////////////////////////////////////////////////////

document.getElementById('submitToggleClass').addEventListener('click', function() {
	var _toggleClassName = document.getElementById('toggleClass').value;
	var _toggleClass = document.getElementsByTagName(document.getElementById('tagClassToggle').value);
	for (var i =0; i < _toggleClass.length; i++) {
		if (_toggleClass[i].className == _toggleClassName) {
			_toggleClass[i].className = _toggleClass[i].className.replace(_toggleClassName, "");
		}
		else {
			if (_toggleClass[i] == "") {
				_toggleClass.className += _toggleClassName;
			}
			else {
				_toggleClass.className += (" " + _toggleClassName);
			}
		}
	}
	console.log(_toggleClass);
});



