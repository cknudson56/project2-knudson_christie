'use strict';

var page1 = document.querySelector('#page1');
var page2 = document.querySelector('#page2');
var page3 = document.querySelector('#page3');
var boxText1 = document.querySelectorAll('#page1 div h2');
var boxText2 = document.querySelectorAll('#page2 div h2');
var boxText3 = document.querySelectorAll('#page3 div h2');

//change "top"
var topBlock = document.querySelectorAll('.top-block');
var bottom = document.querySelectorAll('.bottom');
var left = document.querySelectorAll('.left');
var right = document.querySelectorAll('.right');
var firstFunctionIndexNumbers = [0, 1, 4, 5, 8, 9, 12, 13, 16, 17, 20, 21, 24, 25];
var upDown = function upDown() {
	//for loop for each top and bottom
	for (var i = 0; i < top.length; i++) {
		topBlock[i].classList.toggle('transition-up');
	};
	for (var _i = 0; _i < bottom.length; _i++) {
		bottom[_i].classList.toggle('transition-down');
	};
};
var leftRight = function leftRight() {
	for (var i = 0; i < left.length; i++) {
		left[i].classList.toggle('transition-left');
	};
	for (var _i2 = 0; _i2 < right.length; _i2++) {
		right[_i2].classList.toggle('transition-right');
	};
};

function wrapper() {
	var _this = this;

	var loopThrough = function loopThrough() {
		var thisBoxText = _this.childNodes[0].nodeValue;
		var thisBoxLength = thisBoxText.length;

		var _loop = function _loop(i) {
			setTimeout(function () {
				if (firstFunctionIndexNumbers.includes(i)) {
					upDown();
				} else {
					leftRight();
				}
			}, i * 500);
		};

		for (var i = 0; i < thisBoxLength * 2; i++) {
			_loop(i);
		}
		setTimeout(function () {
			page1.classList.add('hide');
			page2.classList.remove('hide');
			page2.classList.add('show');
		}, thisBoxLength * 1000);
		//play around with the timing
	};
	loopThrough();
};

function wrapper2() {
	var _this2 = this;

	var moveChange2 = function moveChange2() {
		boxText2.classList.toggle('blue');
	};

	var loopThrough2 = function loopThrough2() {
		var thisNumber = _this2.childNodes[0].nodeValue;
		var numberValue = Number(thisNumber);

		for (var i = 0; i < numberValue * 2; i++) {
			setTimeout(function () {
				moveChange2();
			}, i * 500);
		}
		setTimeout(function () {
			page2.classList.add('hide');
			page2.classList.remove('show');
			page3.classList.remove('hide');
			page3.classList.add('show');
		}, numberValue * 1000);
	};
	loopThrough2();
};

function wrapper3() {
	var _this3 = this;

	var moveChange3 = function moveChange3() {
		boxText3.classList.toggle('blue');
	};

	var loopThrough3 = function loopThrough3() {
		var thisNumber = _this3.childNodes[0].nodeValue;
		var numberValue = Number(thisNumber);

		for (var i = 0; i < numberValue * 2; i++) {
			setTimeout(function () {
				moveChange3();
			}, i * 500);
		}
		setTimeout(function () {
			page3.classList.add('hide');
			page3.classList.remove('show');
			//			pageFortune.classList.add('show');
			//			showFortune();
		}, numberValue * 1000);
	};
	loopThrough3();
};

//const fortunes = ['1','2','3'];
//const yourFortune = document.querySelector('#pagefortune');
//const fortuneTextPlaceholder = document.createTextNode('');
//yourFortune.appendChild(fortuneTextPlaceholder);

//const showFortune = () => {
//	fortunes.sort(function(a, b){return 0.5 - Math.random()});
//	const fortuneText = document.createTextNode(fortunes[0]);
//	yourFortune.appendChild(fortuneText);
//	yourFortune.classList.add('fortune-show');
//};


//double check the boxText1.length
for (var i = 0; i < boxText1.length; i++) {
	boxText1[i].addEventListener('click', wrapper);
	//	boxText2[i].addEventListener('click', wrapper2);
	//	boxText3[i].addEventListener('click', wrapper3);
};