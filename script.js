class AudioController {
	constructor() {
		this.bgMusic = new Audio('Assets/Audio/creepy.mp3');
		this.flipSound = new Audio('Assest/Audio/flip.wav');
		this.matchSound = new Audio('Assest/Audio/match.wav');
		this.vicotorySound = new Audio('Assest/Audio/victory.wav');
		this.gameOverSound = new Audio('Assest/Audio/gameover.wav');
		this.bgMusic.volume = 0.4;
		this.bgMusic.loop = true;
	}
	startMusic() {
		this.bgMusic.play();
	}
	stopMusic() {
		this.bgMusic.pause();
		this.bgMusic.currentTime = 0;
	}
	flip() {
		this.flipSound.play();
	}
	match() {
		this.matchSound.play();
	}
	victory() {
		this.bgMusic.pause();
		this.bgMusic.currentTime = 0;
		this.vicotorySound.play();
	}
	gameOver() {
		this.stopMusic();
		this.gameOverSound.play();
	}
}

class MixAndMatch {
	constructor(totalTime, cards) {
		this.cardsArray = cards;
		this.totalTime = totalTime;
		this.timeRemaining = totalTime;
		this.timer = document.getElementById('time-remaining');
		this.ticker = document.getElementById('flips');
		this.audioController = new AudioController();
	}
	startGame() {
		this.cardToCheck = null;
		this.totalClicks = 0;
		this.timeRemaining = this.totalTime;
		this.matchedCards = [];
		this.busy = true;
	}
	canFlipCard(card) {}
}

function ready() {
	let overlays = Array.from(document.getElementsByClassName('overlay-text'));
	let cards = Array.from(document.getElementsByClassName('card'));

	overlays.forEach(overlay => {
		overlay.addEventListener('click', () => {
			overlay.classList.remove('visible');
			//game.startGame();

			let audioController = new AudioController();
			audioController.startMusic();
		});
	});

	cards.forEach(card => {
		card.addEventListener('click', () => {
			//game.flipCard(card);
		});
	});
}

if (document.readyState == 'loading') {
	document.addEventListener('DOMContentLoaded', ready());
} else {
	ready();
}
