const GameSettings = (function () {
	let instance;

	function createInstance() {
		return {
			difficulty: "médio",
		};
	}

	return {
		getInstance: function () {
			if (!instance) {
				instance = createInstance();
			}
			return instance;
		},
	};
})();

function applySettings() {
	const difficulty = document.getElementById("difficulty").value;
	const settings = GameSettings.getInstance();
	settings.difficulty = difficulty;
	log(`Configuração aplicada: ${settings.difficulty}`);
}

function showSettings() {
	const settings = GameSettings.getInstance();
	log(`Configuração atual: ${settings.difficulty}`);
}

function log(msg) {
	document.getElementById("log").textContent += msg + "\n";
}
