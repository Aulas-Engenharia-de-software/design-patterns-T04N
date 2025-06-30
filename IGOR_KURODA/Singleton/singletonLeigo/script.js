function GameSettings() {
	this.difficulty = "médio";
}

function applySettings() {
	const difficulty = document.getElementById("difficulty").value;
	const settings = new GameSettings();
	settings.difficulty = difficulty;
	log(`Configuração aplicada: ${settings.difficulty}`);
}

function showSettings() {
	const settings = new GameSettings();
	log(`Configuração atual: ${settings.difficulty}`);
}

function log(msg) {
	document.getElementById("log").textContent += msg + "\n";
}
