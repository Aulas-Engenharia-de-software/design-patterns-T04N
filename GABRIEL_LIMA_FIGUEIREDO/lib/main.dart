import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

abstract class PlayerState {
  String onHit(Player player);
  String getStateName();
}

class NormalState implements PlayerState {
  @override
  String onHit(Player player) {
    return "Jogador foi atingido! 💥";
  }

  @override
  String getStateName() => "Normal";
}

class InvincibleState implements PlayerState {
  @override
  String onHit(Player player) {
    return "Corra. O jogador está invencível! 🛡️";
  }

  @override
  String getStateName() => "Invencível";
}

class Player {
  PlayerState _state;

  Player(this._state);

  void setState(PlayerState state) {
    _state = state;
  }

  String hit() {
    return _state.onHit(this);
  }

  String get currentState => _state.getStateName();
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Padrão State - Jogador',
      home: const PlayerScreen(),
      debugShowCheckedModeBanner: false,
    );
  }
}

class PlayerScreen extends StatefulWidget {
  const PlayerScreen({super.key});

  @override
  State<PlayerScreen> createState() => _PlayerScreenState();
}

class _PlayerScreenState extends State<PlayerScreen> {
  late Player player;
  String message = '';

  @override
  void initState() {
    super.initState();
    player = Player(NormalState());
  }

  void _toggleState() {
    setState(() {
      if (player.currentState == "Normal") {
        player.setState(InvincibleState());
        message = "Agora o jogador está invencível!";
      } else {
        player.setState(NormalState());
        message = "O jogador voltou ao estado normal.";
      }
    });
  }

  void _hitPlayer() {
    setState(() {
      message = player.hit();
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Alteração de estado - State'),
      ),
      body: Padding(
        padding: const EdgeInsets.all(24.0),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text(
              'Estado atual: ${player.currentState}',
              style: const TextStyle(fontSize: 20),
            ),
            const SizedBox(height: 20),
            ElevatedButton(
              onPressed: _hitPlayer,
              child: const Text('Atingir Jogador'),
            ),
            const SizedBox(height: 10),
            ElevatedButton(
              onPressed: _toggleState,
              child: const Text('Alternar Estado (Normal/Invencível)'),
            ),
            const SizedBox(height: 30),
            Text(
              message,
              textAlign: TextAlign.center,
              style: const TextStyle(fontSize: 18),
            ),
          ],
        ),
      ),
    );
  }
}
