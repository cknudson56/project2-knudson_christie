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

const fortunesAPI = [{"message":"A friend's frown is better than a fool's smile.","id":"5403c81dc2fea4020029ab34"},{"message":"A friend in need is a friend indeed.","id":"5403c81dc2fea4020029ab35"},{"message":"A friend is easier lost than found.","id":"5403c81dc2fea4020029ab36"},{"message":"A friend to everybody is a friend to nobody.","id":"5403c81dc2fea4020029ab37"},{"message":"A problem shared is a problem halved.","id":"5403c81dc2fea4020029ab38"},{"message":"A true friend is someone who reaches for your hand, but touches your heart.","id":"5403c81dc2fea4020029ab39"},{"message":"False friends are worse than open enemies.","id":"5403c81dc2fea4020029ab3a"},{"message":"Flattery is all right so long as you don't inhale.","id":"5403c81dc2fea4020029ab3b"},{"message":"Give credit where credit is due.","id":"5403c81dc2fea4020029ab3c"},{"message":"Grief divided is made lighter.","id":"5403c81dc2fea4020029ab3d"},{"message":"Memory is the treasure of the mind.","id":"5403c81dc2fea4020029ab3e"},{"message":"Nothing dries sooner than a tear.","id":"5403c81dc2fea4020029ab3f"},{"message":"Old friends and old wine are best.","id":"5403c81dc2fea4020029ab40"},{"message":"The best of friends must part.","id":"5403c81dc2fea4020029ab41"},{"message":"The best things are not bought and sold.","id":"5403c81dc2fea4020029ab42"},{"message":"There is no better looking-glass than an old friend.","id":"5403c81dc2fea4020029ab43"},{"message":"To err is human (To forgive divine).","id":"5403c81dc2fea4020029ab44"},{"message":"Two cannot fall out if one does not choose.","id":"5403c81dc2fea4020029ab45"},{"message":"A loveless life is a living death.","id":"5403c81dc2fea4020029ab46"},{"message":"Absence makes the heart grow fonder.","id":"5403c81dc2fea4020029ab47"},{"message":"All's fair in love and war.","id":"5403c81dc2fea4020029ab48"},{"message":"Beauty is in the eye of the beholder.","id":"5403c81dc2fea4020029ab49"},{"message":"Before you meet the handsome prince you have to kiss a lot of toads.","id":"5403c81dc2fea4020029ab4a"},{"message":"Better to have loved and lost, than to have never loved at all.","id":"5403c81dc2fea4020029ab4b"},{"message":"Cold hands, warm heart.","id":"5403c81dc2fea4020029ab4c"},{"message":"Distance makes the heart grow fonder.","id":"5403c81dc2fea4020029ab4d"},{"message":"Faint heart never won fair lady.","id":"5403c81dc2fea4020029ab4e"},{"message":"First impressions are the most lasting.","id":"5403c81dc2fea4020029ab4f"},{"message":"Hatred is as blind as love.","id":"5403c81dc2fea4020029ab50"},{"message":"Love and a cough cannot be hid.","id":"5403c81dc2fea4020029ab51"},{"message":"Love does much but money does all.","id":"5403c81dc2fea4020029ab52"},{"message":"Love levels all inequalities.","id":"5403c81dc2fea4020029ab53"},{"message":"Love makes a good eye squint.","id":"5403c81dc2fea4020029ab54"},{"message":"Love sees no faults.","id":"5403c81dc2fea4020029ab55"},{"message":"Love sought is good, but given unsought is better.","id":"5403c81dc2fea4020029ab56"},{"message":"Love to live and live to love.","id":"5403c81dc2fea4020029ab57"},{"message":"Love with life is heaven; and life unloving, hell.","id":"5403c81dc2fea4020029ab58"},{"message":"Man is the head but woman turns it.","id":"5403c81dc2fea4020029ab59"},{"message":"Marry in haste, repent at leisure.","id":"5403c81dc2fea4020029ab5a"},{"message":"The course of love never did run smooth.","id":"5403c81dc2fea4020029ab5b"},{"message":"The Lord loveth a cheerful liar.","id":"5403c81dc2fea4020029ab5c"},{"message":"There is a thin line between love and hate.","id":"5403c81dc2fea4020029ab5d"},{"message":"To eat one's heart out.","id":"5403c81dc2fea4020029ab5e"},{"message":"True beauty lies within.","id":"5403c81dc2fea4020029ab5f"},{"message":"You can't live on bread alone.","id":"5403c81dc2fea4020029ab60"},{"message":"A good friend is one's nearest relation.","id":"5403c81dc2fea4020029ab61"},{"message":"A man is known by the company he keeps.","id":"5403c81dc2fea4020029ab62"},{"message":"A man of straw needs a woman of gold.","id":"5403c81dc2fea4020029ab63"},{"message":"A wink is as good as a nod, to a blind man.","id":"5403c81dc2fea4020029ab64"},{"message":"An injury is forgiven better than an injury revenged.","id":"5403c81dc2fea4020029ab65"},{"message":"Anger and hate hinder good counsel.","id":"5403c81dc2fea4020029ab66"},{"message":"Appearances are deceptive.","id":"5403c81dc2fea4020029ab67"},{"message":"At a round table there's no dispute about the place.","id":"5403c81dc2fea4020029ab68"},{"message":"Attack is the best form of defense","id":"5403c81dc2fea4020029ab69"},{"message":"Be slow in choosing, but slower in changing.","id":"5403c81dc2fea4020029ab6a"},{"message":"Behind every great man stands a strong woman.","id":"5403c81dc2fea4020029ab6b"},{"message":"Blood is thicker than water.","id":"5403c81dc2fea4020029ab6c"},{"message":"Cheerfulness smooths the road of life.","id":"5403c81dc2fea4020029ab6d"},{"message":"Confess and be hanged.","id":"5403c81dc2fea4020029ab6e"},{"message":"Conscience makes cowards of us all.","id":"5403c81dc2fea4020029ab6f"},{"message":"Don't blow your own trumpet.","id":"5403c81dc2fea4020029ab70"},{"message":"Do as you would be done by.","id":"5403c81dc2fea4020029ab71"},{"message":"Do unto others as you would have them do to you.","id":"5403c81dc2fea4020029ab72"},{"message":"Grow angry slowly; there's plenty of time.","id":"5403c81dc2fea4020029ab73"},{"message":"He bears misery best that hides it most.","id":"5403c81dc2fea4020029ab74"},{"message":"He that hurts another, hurts himself.","id":"5403c81dc2fea4020029ab75"},{"message":"He who wronged you will hate you.","id":"5403c81dc2fea4020029ab76"},{"message":"Heavy givers are light complainers.","id":"5403c81dc2fea4020029ab77"},{"message":"I am rubber and you are glue. Your words bounce off me and stick to you.","id":"5403c81dc2fea4020029ab78"},{"message":"If you lose your temper, don't look for it.","id":"5403c81dc2fea4020029ab79"},{"message":"It's not over till it's over.","id":"5403c81dc2fea4020029ab7a"},{"message":"Joy shared is double joy; grief shared is (only) half grief.","id":"5403c81dc2fea4020029ab7b"},{"message":"Laugh and the world laughs with you. Cry and you cry alone.","id":"5403c81dc2fea4020029ab7c"},{"message":"Never let the sun go down on your anger.","id":"5403c81dc2fea4020029ab7e"},{"message":"Never let the sun set on thy wrath.","id":"5403c81dc2fea4020029ab7f"},{"message":"Never let the sun set on angry heart.","id":"5403c81dc2fea4020029ab7d"},{"message":"Never quarrel with one's bread and butter.","id":"5403c81dc2fea4020029ab80"},{"message":"No man or woman is worth your tears, and the one who is, won't make you cry.","id":"5403c81dc2fea4020029ab81"},{"message":"Open confession is good for the soul.","id":"5403c81dc2fea4020029ab82"},{"message":"Out of sight, out of mind.","id":"5403c81dc2fea4020029ab83"},{"message":"Patience is a virtue.","id":"5403c81dc2fea4020029ab84"},{"message":"Persuasion is better than force.","id":"5403c81dc2fea4020029ab85"},{"message":"Spare the rod and spoil the child.","id":"5403c81dc2fea4020029ab86"},{"message":"Temper is so good a thing that we should never lose it.","id":"5403c81dc2fea4020029ab87"},{"message":"To the world you may be one person, but to one person, you may be the world.","id":"5403c81dc2fea4020029ab88"},{"message":"Wondrous is the strength of cheerfulness.","id":"5403c81dc2fea4020029ab89"},{"message":"You made your bed, now you must lie in it.","id":"5403c81dc2fea4020029ab8a"},{"message":"A bully is always a coward.","id":"5403c81dc2fea4020029ab8b"},{"message":"A handsome shoe often pinches the foot.","id":"5403c81dc2fea4020029ab8c"},{"message":"A good thing is all the sweeter when won with pain.","id":"5403c81dc2fea4020029ab8d"},{"message":"A man too careful of danger lives in continual torment.","id":"5403c81dc2fea4020029ab8e"},{"message":"A miss is as good as a mile.","id":"5403c81dc2fea4020029ab8f"},{"message":"Adversity flatters no man","id":"5403c81dc2fea4020029ab90"},{"message":"Adversity and loss make a man wise","id":"5403c81dc2fea4020029ab91"},{"message":"All promises are either broken or kept.","id":"5403c81dc2fea4020029ab92"},{"message":"All things come to those that wait.","id":"5403c81dc2fea4020029ab93"},{"message":"An eye for an eye and a tooth for a tooth.","id":"5403c81dc2fea4020029ab94"},{"message":"An open door may tempt a saint.","id":"5403c81dc2fea4020029ab95"},{"message":"As one door closes, another always opens.","id":"5403c81dc2fea4020029ab96"},{"message":"As you go through life, make this your goal, watch the doughnut and not the hole.","id":"5403c81dc2fea4020029ab97"}];
const showFortune = () => {
	fortunesAPI.sort(function(a, b){return 0.5 - Math.random()});
	const fortunes = fortunesAPI[0].message;
	const fortuneText = document.createTextNode(fortunes);
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
