const page1 = document.querySelector('#page1');
const page2 = document.querySelector('#page2');
const page3 = document.querySelector('#page3');
const boxText1 = document.querySelectorAll('#page1 div h2');
const boxText2 = document.querySelectorAll('#page2 div h2');
const boxText3 = document.querySelectorAll('#page3 div h2');




//change "top"
const topBlock = document.querySelectorAll('.top-block');
const bottom = document.querySelectorAll('.bottom');
const left = document.querySelectorAll('.left');
const right = document.querySelectorAll('.right');
const firstFunctionIndexNumbers = [0,1,4,5,8,9,12,13,16,17,20,21,24,25];
const upDown = () => {
	//for loop for each top and bottom
	for(let i = 0; i < top.length; i++) {
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
		let thisBoxText = this.childNodes[0].nodeValue;
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
		//play around with the timing
	};
	loopThrough();
};






function wrapper2() {
	const moveChange2 = () => {
		boxText2.classList.toggle('blue');
	};

	const loopThrough2 = () => {
		let thisNumber = this.childNodes[0].nodeValue;
		let numberValue = Number(thisNumber);

		for (let i = 0; i < numberValue * 2; i++) {
			setTimeout(function() {
				moveChange2();
			}, i * 500);
		}
		setTimeout(function() {
			page2.classList.add('hide');
			page2.classList.remove('show');
			page3.classList.remove('hide');
			page3.classList.add('show');
		}, numberValue * 1000);
	};
	loopThrough2();
};






function wrapper3() {
	const moveChange3 = () => {
		boxText3.classList.toggle('blue');
	};

	const loopThrough3 = () => {
		let thisNumber = this.childNodes[0].nodeValue;
		let numberValue = Number(thisNumber);

		for (let i = 0; i < numberValue * 2; i++) {
			setTimeout(function() {
				moveChange3();
			}, i * 500);
		}
		setTimeout(function() {
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
for(let i = 0; i < boxText1.length; i++) {
	boxText1[i].addEventListener('click', wrapper);
//	boxText2[i].addEventListener('click', wrapper2);
//	boxText3[i].addEventListener('click', wrapper3);
};



