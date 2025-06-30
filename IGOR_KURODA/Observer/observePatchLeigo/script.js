const players = [];

function log(message) {
	const logs = document.getElementById("log");
	logs.textContent += message + "\n";
	logs.scrollTop = logs.scrollHeight;
}

function subscribePlayer() {
	const name = document.getElementById("playerName").value.trim();
	if (!name) return alert("Informe o nickname do jogador.");
	if (players.includes(name)) {
		return alert("Jogador já inscrito.");
	}
	players.push(name);
	log(`✅ ${name} foi inscrito nas notificações.`);
}

function unsubscribePlayer() {
	const name = document.getElementById("playerName").value.trim();
	const index = players.indexOf(name);
	if (index === -1) return alert("Jogador não encontrado.");
	players.splice(index, 1);
	log(`❌ ${name} foi removido das notificações.`);
}

function publishPatchNote() {
	const note = document.getElementById("patchNoteText").value.trim();
	if (!note) return alert("Digite o conteúdo da patch note.");
	log(`🔔 Novo patch publicado: "${note}"`);
	players.forEach((name) => {
		log(`📨 ${name} recebeu a patch note: "${note}"`);
	});
	document.getElementById("patchNoteText").value = "";
}
