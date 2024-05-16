const CLICK_BUTTON = document.getElementById('click-button');
const NOTIFY = document.getElementById('notify');

let score = 0;

function chancheColor() {

	let color = Math.floor(100000 + Math.random() * 999999);
	document.body.style = `background: #${color}`;  // Background color
	CLICK_BUTTON.style = `color: #${color}`;  // Button text color
}

function changeNotify(title, content) {
	NOTIFY.innerHTML = `
	<h1 id="title">${title}</h1>
	<h2 id="content">${content}</h2> 
    `
}

CLICK_BUTTON.addEventListener('click', ()=>{

	score++;
	CLICK_BUTTON.value = score;
	chancheColor();

	if (ACHIEVEMENTS[score.toString()]) {
		let achievement = ACHIEVEMENTS[score.toString()];
		changeNotify(achievement.title, achievement.content);
	}
})

CLICK_BUTTON.addEventListener('keydown', function(event) {
  if (event.keyCode === 32) {
    event.preventDefault();
  }
});

// NOTIFY.classList.add('show')