#pragma strict

public var velocidade : float;

function Update () {
	// captura o input horizontal do jogador (-1 a 1)
	var input : float = Input.GetAxis ("Horizontal");
	// gira o objeto atual em torno do seu eixo Y
	transform.Rotate (transform.up, input * velocidade);
}