const page1 = document.querySelector('#page1');
const page2 = document.querySelector('#page2');
const page3 = document.querySelector('#page3');
const yourFortune = document.querySelector('#pagefortune');

//Clickable box area
const boxText = document.getElementsByClassName('box');
const boxText1 = document.querySelectorAll('#page1 div');
const boxText2 = document.querySelectorAll('#page2 div');
const boxText3 = document.querySelectorAll('#page3 div');

function wrapper() {
	const loopThrough = () => {

	};
	loopThrough();
};

for(let i = 0; i < boxText1; i++) {
	boxText1[i].addEventListener('click', wrapper);
};