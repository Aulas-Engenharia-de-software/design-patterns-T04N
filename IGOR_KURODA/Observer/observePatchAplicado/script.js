class PatchNotesSystem {
	constructor() {
		this.observers = [];
	}

	subscribe(observer) {
		this.observers.push(observer);
		log(`✅ ${observer.name} se inscreveu e receberá notificações.`);
	}

	unsubscribe(observer) {
		this.observers = this.observers.filter((obs) => obs !== observer);
		log(`❌ ${observer.name} cancelou sua inscrição.`);
	}

	notify(patchNote) {
		log(`🔔 Novo patch publicado: "${patchNote}"`);
		this.observers.forEach((observer) => observer.update(patchNote));
	}

	getPlayerByName(name) {
		return this.observers.find((obs) => obs.name === name);
	}
}

class Player {
	constructor(name) {
		this.name = name;
	}

	update(patchNote) {
		log(`📨 ${this.name} recebeu a patch note: "${patchNote}"`);
	}
}

const patchSystem = new PatchNotesSystem();

function log(message) {
	const logs = document.getElementById("log");
	logs.textContent += message + "\n";
	logs.scrollTop = logs.scrollHeight;
}

function subscribePlayer() {
	const name = document.getElementById("playerName").value.trim();
	if (!name) return alert("Informe o nickname do Jogador");
	const alreadySubscribed = patchSystem.getPlayerByName(name);
	if (alreadySubscribed) {
		return alert("Jogador já inscrito.");
	}
	const player = new Player(name);
	patchSystem.subscribe(player);
}

function unsubscribePlayer() {
	const name = document.getElementById("playerName").value.trim();
	const player = patchSystem.getPlayerByName(name);
	if (!player) return alert("Jogador não encontrado.");
	patchSystem.unsubscribe(player);
}

function publishPatchNote() {
	const note = document.getElementById("patchNoteText").value.trim();
	if (!note) return alert("Digite o conteúdo da patch note.");
	patchSystem.notify(note);
	document.getElementById("patchNoteText").value = "";
}
