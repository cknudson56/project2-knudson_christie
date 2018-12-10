const page1 = document.querySelector('#page1');
const page2 = document.querySelector('#page2');
const page3 = document.querySelector('#page3');
const yourFortune = document.querySelector('#pagefortune');

//Clickable box area
const boxText = document.getElementsByClassName('box');
const boxText1 = document.querySelectorAll('#page1 div');
const boxText2 = document.querySelectorAll('#page2 div');
const boxText3 = document.querySelectorAll('#page3 div');

const firstFunctionIndexNumbers = [0,1,4,5,8,9,12,13,16,17,20,21,24,25];

const topBlock = document.querySelectorAll('.top-block');
const bottom = document.querySelectorAll('.bottom');
const left = document.querySelectorAll('.left');
const right = document.querySelectorAll('.right');

const upDown = () => {
	for(let i = 0; i < topBlock.length; i++) {
		topBlock[i].classList.toggle('transition-up');
	};
	for(let i = 0; i < bottom.length; i++) {
		bottom[i].classList.toggle('transition-down');
	};
};
const leftRight = () => {
	for(let i = 0; i < left.length; i++) {
		left[i].classList.toggle('transition-left');
	};
	for(let i = 0; i < right.length; i++) {
		right[i].classList.toggle('transition-right');
	};
};

function wrapper() {
	const loopThrough = () => {
		let thisBoxText = this.childNodes[0].innerHTML;
		let thisBoxLength = thisBoxText.length;

		for (let i = 0; i < thisBoxLength * 2; i++) {
			setTimeout(function() {
				if (firstFunctionIndexNumbers.includes(i)) {
					upDown();
				} else {
					leftRight();
				}
			}, i * 500);
		}
		setTimeout(function() {
			page1.classList.add('hide');
			page2.classList.remove('hide');
			page2.classList.add('show');
		}, thisBoxLength * 1000);
	};
	loopThrough();
};


for(let i = 0; i < boxText1.length; i++) {
	boxText1[i].addEventListener('click', wrapper);
};