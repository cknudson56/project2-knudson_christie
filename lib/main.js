'use strict';

var page1 = document.querySelector('#page1');
var page2 = document.querySelector('#page2');
var page3 = document.querySelector('#page3');
var yourFortune = document.querySelector('#pagefortune');

//Clickable box area
var boxText = document.getElementsByClassName('box');
var boxText1 = document.querySelectorAll('#page1 div');
var boxText2 = document.querySelectorAll('#page2 div');
var boxText3 = document.querySelectorAll('#page3 div');

var firstFunctionIndexNumbers = [0, 1, 4, 5, 8, 9, 12, 13, 16, 17, 20, 21, 24, 25];

var topBlock = document.querySelectorAll('.top-block');
var bottom = document.querySelectorAll('.bottom');
var left = document.querySelectorAll('.left');
var right = document.querySelectorAll('.right');

var upDown = function upDown() {
	for (var i = 0; i < topBlock.length; i++) {
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
		var thisBoxText = _this.childNodes[0].innerHTML;
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
	};
	loopThrough();
};

for (var i = 0; i < boxText1.length; i++) {
	boxText1[i].addEventListener('click', wrapper);
};