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
			}, i * 400);
		}
		setTimeout(function() {
			page1.classList.add('hide');
			page2.classList.remove('hide');
			page2.classList.add('show');
		}, thisBoxLength * 800);
	};
	loopThrough();
};

function wrapper2() {
	const loopThrough2 = () => {
		let thisNumber = this.childNodes[0].innerHTML;
		let numberValue = Number(thisNumber);

		for (let i = 0; i < numberValue * 2; i++) {
			setTimeout(function() {
				if (firstFunctionIndexNumbers.includes(i)) {
					upDown();
				} else {
					leftRight();
				}
			}, i * 400);
		}
		setTimeout(function() {
			page2.classList.add('hide');
			page2.classList.remove('show');
			page3.classList.remove('hide');
			page3.classList.add('show');
		}, numberValue * 800);
	};
	loopThrough2();
};

function wrapper3() {
	const loopThrough3 = () => {
		let thisNumber = this.childNodes[0].innerHTML;
		let numberValue = Number(thisNumber);

		for (let i = 0; i < numberValue * 2; i++) {
			setTimeout(function() {
				if (firstFunctionIndexNumbers.includes(i)) {
					upDown();
				} else {
					leftRight();
				}
			}, i * 400);
		}
		setTimeout(function() {
			page3.classList.add('hide');
			page3.classList.remove('show');
			yourFortune.classList.remove('hide');
			yourFortune.classList.add('show');
			showFortune();
		}, numberValue * 800);
	};
	loopThrough3();
};

const fortunes = ['It is certain.','It is decidedly so.', 'Without a doubt.', 'Yes - definitely.', 'You may rely on it.', 'As I see it, yes.', 'Most likely.', 'Outlook good.', 'Yes.', 'Signs point to yes.', 'Reply hazy, try again', 'Ask again later.', 'Better not tell you now.', 'Cannot predict now.', 'Concentrate and ask again.', 'Dont count on it.', 'My reply is no.', 'My sources say no.', 'Outlook not so good.', 'Very doubtful.'];
const showFortune = () => {
	fortunes.sort(function(a, b){return 0.5 - Math.random()});
	const fortuneText = document.createTextNode(fortunes[0]);
	yourFortune.appendChild(fortuneText);
};

for(let i = 0; i < boxText1.length; i++) {
	boxText1[i].addEventListener('click', wrapper);
};

for(let i = 0; i < boxText2.length; i++) {
	boxText2[i].addEventListener('click', wrapper2);
};

for(let i = 0; i < boxText3.length; i++) {
	boxText3[i].addEventListener('click', wrapper3);
};
