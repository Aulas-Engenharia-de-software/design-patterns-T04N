const GameSettings = (function () {
	let instance;

	function createInstance() {
		return {
			volume: 0.8,
			difficulty: "normal",
			fullscreen: true,
			toggleFullscreen() {
				this.fullscreen = !this.fullscreen;
			},
		};
	}

	return {
		getInstance() {
			if (!instance) instance = createInstance();
			return instance;
		},
	};
})();

const settings1 = GameSettings.getInstance();
settings1.volume = 0.5;

const settings2 = GameSettings.getInstance();
console.log(settings2.volume); // retorna a mesma configuração da settings1 por se tratar de somente uma instância singleton.
