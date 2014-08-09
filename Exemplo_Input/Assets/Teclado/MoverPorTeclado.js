#pragma strict

// controles configuraveis no editor
public var tCima : KeyCode = KeyCode.UpArrow;
public var tBaixo : KeyCode = KeyCode.DownArrow;
public var tEsquerda : KeyCode = KeyCode.LeftArrow;
public var tDireita : KeyCode = KeyCode.RightArrow;
// valor para escalar o deslocamento
public var velocidade : float;
// deslocamento por frame
public var deslocamento : Vector3;

function Update () {
	// zera o deslocamento desse frame
	deslocamento = Vector3.zero;
	if (Input.GetKey (tCima)) {
		// se a tecla cima estiver pressionada, aumenta o z do deslocamento
		deslocamento.z += 1;
	}
	if (Input.GetKey (tBaixo)) {
		deslocamento.z += -1;
	}
	if (Input.GetKey (tEsquerda)) {
		deslocamento.x += -1;
	}
	if (Input.GetKey (tDireita)) {
		deslocamento.x += 1;
	}
	// converte o deslocamento para ter modulo 1 e
	// entao escala ele pela velocidade desejada, evitando
	// que va mais rapido na diagonal
	deslocamento = deslocamento.normalized * velocidade;
}

function FixedUpdate () {
	// aplica o movimento movendo o rigidbody, para afetar 
	// outros objetos fisicos corretamente
	rigidbody.MovePosition (rigidbody.position + deslocamento * Time.fixedDeltaTime);
}