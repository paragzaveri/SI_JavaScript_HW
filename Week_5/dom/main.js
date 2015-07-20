// js doc

// var _divs = document.getElementsByTagName('div');
//console.log(_divs);
var _divs = $('div');

// var _paragraphs = document.getElementsByTagName('p');
var _paragraphs = $('p');
console.log(_paragraphs);

// var _labels = document.getElementsByClassName('label');
// console.log(_labels);
var _labels = $('.label');

// var _box1 = document.getElementById('box1');
//console.log(_box1);
var _box1 = $('#box1');

// function alertText(element){
// 	alert(element.innerHTML);
// }


// for (var i = 0; i<_divs.length; i++) {
// 	_divs[i].addEventListener('click',alertText);
// }



function makeCircle() {
	// pure javascript 
	// // for (var i = 0; i<_divs.length; i++) {


	// 	_divs[i].style.borderRadius = '50%';



	// jquery function
	$('div').css('border-radius', '50%');
	
}

function makeSquare() {
	// for (var i = 0; i<_divs.length; i++) {
	// 	_divs[i].style.borderRadius = '0';
	// }

	$('div').css('border-radius', '0');
}

function makeWhite() {
	// for (var i=0; i<_divs.length; i++) {
	// 	_divs[i].style.backgroundColor = 'white';
	// }

	// _divs.css('background-color', 'white');

	$('.selected').css('background-color', 'white');
}

function makeRed() {
	// for (var i=0; i<_divs.length; i++) {
	// 	_divs[i].style.backgroundColor = 'red';
	// }
	
	// _divs.css('background-color', 'red');
	$('.selected').css('background-color', 'red');
}

function makeBlue() {
	// for (var i=0; i<_divs.length; i++) {
	// 	_divs[i].style.backgroundColor = 'blue';
	// }

	// _divs.css('background-color', 'blue');

	$('.selected').css('background-color', 'blue');
}


function toggle() {
	// if (_divs[0].style.display == 'none') {
	// 	document.getElementById('hide').innerHTML = 'hide';
		
	// 	for (var i = 0; i<_divs.length; i++) {
	// 		_divs[i].style.display = 'block';
	// 	}
	// }
	// else {
	// 	document.getElementById('hide').innerHTML = 'show';
	// 	for (var i = 0; i<_divs.length; i++) {


	// 	_divs[i].style.display = 'none';

	// 	}
	// }


	//first toggle in JQuery
	// if ($('#box1').hasClass('selected') || $('#box1').hasClass('selected') || $('#box1').hasClass('selected')) {
	
	// 	if ($('.selected').css('display') == 'none') {
	// 		$('#hide').text('hide');
	// 		$('.selected').css('display', 'block');
	// 	}
	// 	else {
	// 		$('#hide').text('show');
	// 		$('.selected').css('display', 'none');
	// 	}
	// }

	//updated for better layout
		if ($('#box1').hasClass('selected') || $('#box1').hasClass('selected') || $('#box1').hasClass('selected')) {
	
		if ($('.selected').css('visibility') == 'hidden') {
			$('#hide').text('hide');
			$('.selected').css('visibility', 'visible');
		}
		else {
			$('#hide').text('show');
			$('.selected').css('visibility', 'hidden');
		}
	}

}

// document.getElementById('circle').addEventListener('click', makeCircle);

$('#circle').click(makeCircle);

// document.getElementById('hide').addEventListener('click', toggle);

$('#hide').click(toggle);

// document.getElementById('square').addEventListener('click', makeSquare);

$('#square').click(makeSquare);

// document.getElementById('red').addEventListener('click', makeRed);

$('#red').click(makeRed);

// document.getElementById('blue').addEventListener('click', makeBlue);

$('#blue').click(makeBlue);

// document.getElementById('white').addEventListener('click',makeWhite);

$('#white').click(makeWhite);


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

// document.getElementById('submitAddClass').addEventListener('click', function() {
// 	var _addClassName = document.getElementById('addClass').value;
// 	var _newClass = document.getElementsByTagName(document.getElementById('tagClassAdd').value);
// 	for (var i = 0; i<_newClass.length; i++) {
// 		if (_newClass[i].className != "") {
// 			_newClass[i].className += (" " + _addClassName);
// 		}
// 		else {
// 		_newClass[i].className +=  _addClassName;
// 		}
// 	}
// 	console.log(_newClass);

// 	document.getElementById('addClass').value = '';
// 	document.getElementById('tagClassAdd').value = '';
	

// });


// jQuery still uses for loop?
// $('#submitAddClass').click(function() {
// 	var _addClassName = $('#addClass').val();
// 	var _newClass = $($('#tagClassAdd').val());
// 	for (var i = 0; i<_newClass.length; i++) {
// 		if (_newClass[i].className != "") {
// 			_newClass[i].className += (" " + _addClassName);
// 		}
// 		else {
// 		_newClass[i].className +=  _addClassName;
// 		}
// 	}
// 	console.log(_newClass);
// });



function addClass() {
	var _addClassName = $('#addClass').val();
	var _newClass = $($('#tagClassAdd').val());
	_newClass.addClass(_addClassName);
	console.log(_newClass);
	$('#addClass').val('');
	$('#tagClassAdd').val('');
}

$('#submitAddClass').click(addClass);
	// var _addClassName = $('#addClass').val();
	// var _newClass = $($('#tagClassAdd').val());
	// _newClass.addClass(_addClassName);
	// console.log(_newClass);
	// $('#addClass').val('');
	// $('#tagClassAdd').val('');
	
$(window).keydown(function(e){
  		if (e.which == 13){
  		addClass();
  		}
	});





/////////////////////////////////////////////////////////////////////////////////////////////////////////


// document.getElementById('submitRemoveClass').addEventListener('click',function() { 
// 	var _removeClassName = document.getElementById('removeClass').value;
// 	var _classRemove = document.getElementsByTagName(document.getElementById('tagClassRemove').value);
// 	for (var i =0; i<_classRemove.length; i++) {
// 		// _classRemove[i].className = _classRemove[i].className.replace(new RegExp('(?:^|s)' + _removeClassName + '(?!S)'), '');
// 		_classRemove[i].className = _classRemove[i].className.replace(_removeClassName, "");

// 	}
// 	console.log(_classRemove);
// });

function removeClass() {
	var _removeClassName = $('#removeClass').val();
	var _classRemove = $($('#tagClassRemove').val());
	_classRemove.removeClass(_removeClassName);
	console.log(_classRemove);
	$('#removeClass').val('');
	$('#tagClassRemove').val('');
}

$('#submitRemoveClass').click(removeClass);

$(window).keydown(function(e){
  		if (e.which == 13){
  		removeClass();
  		}
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

// document.getElementById('submitToggleClass').addEventListener('click', function() {
// 	var _toggleClassName = document.getElementById('toggleClass').value;
// 	var _toggleClass = document.getElementsByTagName(document.getElementById('tagClassToggle').value);
// 	for (var i =0; i < _toggleClass.length; i++) {
// 		if (_toggleClass[i].className == _toggleClassName) {
// 			_toggleClass[i].className = _toggleClass[i].className.replace(_toggleClassName, "");
// 		}
// 		else {
// 			if (_toggleClass[i].className == "") {
// 				_toggleClass[i].className += _toggleClassName;
// 			}
// 			else {
// 				_toggleClass[i].className += (" " + _toggleClassName);
// 			}
// 		}
// 	}
// 	console.log(_toggleClass);
// });

function toggleClass() {
	var _toggleClassName = $('#toggleClass').val();
	var _toggleClass = $($('#tagClassToggle').val());
	_toggleClass.toggleClass(_toggleClassName);
	console.log(_toggleClass);
	$('#toggleClass').val('');
	$('#tagClassToggle').val('');
}

$('#submitToggleClass').click(toggleClass);	

$(window).keydown(function(e){
  		if (e.which == 13){
  		toggleClass();
  		}
	});


//adding selecting a box

$('#box1').click(function() {
	$('#box1').toggleClass('selected');
	//does something else ignore
	if ($('#box1').hasClass('selected') && $('#box2').hasClass('selected') && $('#box3').hasClass('selected')) {
		$('#selectAllBoxes').text('Unselect All');
	}
	else {
		$('#selectAllBoxes').text('Select All');
	}
});

$('#box2').click(function() {
	$('#box2').toggleClass('selected');
	//does something else ignore
	if ($('#box1').hasClass('selected') && $('#box2').hasClass('selected') && $('#box3').hasClass('selected')) {
		$('#selectAllBoxes').text('Unselect All');
	}
	else {
		$('#selectAllBoxes').text('Select All');
	}
});

$('#box3').click(function() {
	$('#box3').toggleClass('selected');
	//does something else ignore
	if ($('#box1').hasClass('selected') && $('#box2').hasClass('selected') && $('#box3').hasClass('selected')) {
		$('#selectAllBoxes').text('Unselect All');
	}
	else {
		$('#selectAllBoxes').text('Select All');
	}
});

//selecting all boxes


$('#selectAllBoxes').click(function(){
	
	if ($('#box1').hasClass('selected') && $('#box2').hasClass('selected') && $('#box3').hasClass('selected')) {
		// $('#box1').removeClass('selected');
		// $('#box2').removeClass('selected');
		// $('#box3').removeClass('selected');
		$('.selected').removeClass('selected');
		$('#selectAllBoxes').text('Select All');
	}
	else {
	    if ($('#box1').hasClass('selected')){
			//do nothing
		}
		else {
			$('#box1').addClass('selected');
		}
		if ($('#box2').hasClass('selected')){
			//do nothing
		}
		else {
			$('#box2').addClass('selected');
		}
		if ($('#box3').hasClass('selected')){
			//do nothing
		}
		else {			$('#box3').addClass('selected');
		}
		$('#selectAllBoxes').text('Unselect All');
	}
	
});

//spin

$('#spin').click(function() {
	$('.selected').toggleClass('spin');

	if ($('#box1').hasClass('spin') || $('#box2').hasClass('spin') || $('#box3').hasClass('spin')) {
		$('#spin').text('Stop Spin');
	}
	else {
		$('#spin').text('Spin');
	}

});

$('#rotate').click(function() {
	$('.selected').toggleClass('rotate');

	if ($('#box1').hasClass('rotate') || $('#box2').hasClass('rotate') || $('#box3').hasClass('rotate')) {
		$('#rotate').text('Stop Rotation');
	}
	else {
		$('#rotate').text('Rotate');
	}
});

$('#bothSR').click(function() {
	$('.selected').toggleClass('bothSR');

	if ($('#box1').hasClass('bothSR') || $('#box2').hasClass('bothSR') || $('#box3').hasClass('bothSR')) {
		$('#bothSR').text('Stop Spin and Rotate');
	}
	else {
		$('#bothSR').text('Spin and Rotate');
	}
});

$('#originalSpin').click(function() {
	$('.selected').toggleClass('originalSpin');

	if ($('#box1').hasClass('originalSpin') || $('#box2').hasClass('originalSpin') || $('#box3').hasClass('originalSpin')) {
		$('#originalSpin').text('Stop Spin');
	}
	else {
		$('#originalSpin').text('Spin');
	}

});


