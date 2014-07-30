#pragma strict

// variavel que guarda o texto onde vamos escrever a msg de fimd e jogo
public var msg : GUIText;

// quando colidir com um objeto 2D
function OnCollisionEnter2D () {
	// para o tempo
	Time.timeScale = 0;
	// torna a mensagem visivel e muda o texto, com o numero de inimigos em cena
	msg.enabled = true;
	msg.text = "Voce perdeu com " + GameObject.FindObjectsOfType(ControlaInimigo).length + " pontos.";
}