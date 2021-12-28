'use strict';

function countdown(due) {
	const now = new Date();
	let count;
	const rest = due.getTime() - now.getTime();
	const sec = Math.floor(rest / 1000) % 60;
	const min = Math.floor(rest / 1000 / 60) % 60;
	const hours = Math.floor(rest / 1000 / 60 / 60) % 24;
	if (rest > 0 && hours < 2) {
		count = [hours, min, sec];
	} else {
		count = [0, 0, 0];
	}
	return count;
}

let goal = new Date();
goal.setHours(15);
goal.setMinutes(59);
goal.setSeconds(59);

function recalc() {
	const counter = countdown(goal);
	if (counter[0] === 0 && counter[1] === 0 && counter[2] === 0) {
		document.getElementById('discount').textContent = "13時から16時までは店内で注文すると30%オフ！";
	} else {
		document.getElementById('discount').textContent = "いまから" + counter[0] + "時間" + String(counter[1]).padStart(2, '0') + "分" + String(counter[2]).padStart(2, '0') + "以内に店内で注文すると30%オフ！";
	}
	refresh();
}

function refresh() {
	setTimeout(recalc, 1000);
}

recalc();