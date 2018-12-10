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
			}, i * 400);
		};

		for (var i = 0; i < thisBoxLength * 2; i++) {
			_loop(i);
		}
		setTimeout(function () {
			page1.classList.add('hide');
			page2.classList.remove('hide');
			page2.classList.add('show');
		}, thisBoxLength * 800);
	};
	loopThrough();
};

function wrapper2() {
	var _this2 = this;

	var loopThrough2 = function loopThrough2() {
		var thisNumber = _this2.childNodes[0].innerHTML;
		var numberValue = Number(thisNumber);

		var _loop2 = function _loop2(i) {
			setTimeout(function () {
				if (firstFunctionIndexNumbers.includes(i)) {
					upDown();
				} else {
					leftRight();
				}
			}, i * 400);
		};

		for (var i = 0; i < numberValue * 2; i++) {
			_loop2(i);
		}
		setTimeout(function () {
			page2.classList.add('hide');
			page2.classList.remove('show');
			page3.classList.remove('hide');
			page3.classList.add('show');
		}, numberValue * 800);
	};
	loopThrough2();
};

function wrapper3() {
	var _this3 = this;

	var loopThrough3 = function loopThrough3() {
		var thisNumber = _this3.childNodes[0].innerHTML;
		var numberValue = Number(thisNumber);

		var _loop3 = function _loop3(i) {
			setTimeout(function () {
				if (firstFunctionIndexNumbers.includes(i)) {
					upDown();
				} else {
					leftRight();
				}
			}, i * 400);
		};

		for (var i = 0; i < numberValue * 2; i++) {
			_loop3(i);
		}
		setTimeout(function () {
			page3.classList.add('hide');
			page3.classList.remove('show');
			yourFortune.classList.remove('hide');
			yourFortune.classList.add('show');
			showFortune();
		}, numberValue * 800);
	};
	loopThrough3();
};

var fortunes = ['It is certain.', 'It is decidedly so.', 'Without a doubt.', 'Yes - definitely.', 'You may rely on it.', 'As I see it, yes.', 'Most likely.', 'Outlook good.', 'Yes.', 'Signs point to yes.', 'Reply hazy, try again', 'Ask again later.', 'Better not tell you now.', 'Cannot predict now.', 'Concentrate and ask again.', 'Dont count on it.', 'My reply is no.', 'My sources say no.', 'Outlook not so good.', 'Very doubtful.'];
var showFortune = function showFortune() {
	fortunes.sort(function (a, b) {
		return 0.5 - Math.random();
	});
	var fortuneText = document.createTextNode(fortunes[0]);
	yourFortune.appendChild(fortuneText);
};

for (var i = 0; i < boxText1.length; i++) {
	boxText1[i].addEventListener('click', wrapper);
};

for (var _i3 = 0; _i3 < boxText2.length; _i3++) {
	boxText2[_i3].addEventListener('click', wrapper2);
};

for (var _i4 = 0; _i4 < boxText3.length; _i4++) {
	boxText3[_i4].addEventListener('click', wrapper3);
};