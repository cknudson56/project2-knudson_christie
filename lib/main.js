'use strict';

var page1 = document.querySelector('#page1');
var page2 = document.querySelector('#page2');
var page3 = document.querySelector('#page3');
//const pageFortune = document.querySelector('#pagefortune');
var boxText1 = document.querySelectorAll('#page1 div h2');
var boxText2 = document.querySelectorAll('#page2 div h2');
var boxText3 = document.querySelectorAll('#page3 div h2');

var top = document.querySelector('.top');
var bottom = document.querySelector('.bottom');
var left = document.querySelector('.left');
var right = document.querySelector('.right');

function wrapper() {
	var _this = this;

	var moveChange = function moveChange() {
		boxText1.classList.toggle('blue');
	};

	var loopThrough = function loopThrough() {
		var thisBoxText = _this.childNodes[0].nodeValue;
		var thisBoxLength = thisBoxText.length;

		for (var i = 0; i < thisBoxLength * 2; i++) {
			setTimeout(function () {
				moveChange();
			}, i * 500);
		}
		setTimeout(function () {
			page1.classList.add('hide');
			page2.classList.remove('hide');
			page2.classList.add('show');
		}, thisBoxLength * 1000);
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
		}, numberValue * 1000);
	};
	loopThrough3();
};

for (var i = 0; i < boxText1.length; i++) {
	boxText1[i].addEventListener('click', wrapper);
	boxText2[i].addEventListener('click', wrapper2);
	boxText3[i].addEventListener('click', wrapper3);
};