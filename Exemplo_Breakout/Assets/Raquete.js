#pragma strict

public var pontos : int;
public var vidas : int;

public var velocidade : float = 5f;
private var posicaoInicial : Vector3;
private var direcaoX : float;


function Start () {
	// guarda a posicao inicial para a hora de resetar
	posicaoInicial = transform.position;
}

function Resetar () {
	transform.position = posicaoInicial;
}

function Update () {
	// se o input nao for zero, guardar o sinal
	if (Input.GetAxis ("Horizontal") != 0) {
		direcaoX = Mathf.Sign( Input.GetAxis ("Horizontal"));
	}
	else {
		// se for zero, parar a raquete
		direcaoX = 0;
	}
}

function FixedUpdate () {
	// calcula a nov avelocidade baseada no sinal da direcao
	rigidbody2D.velocity.x = direcaoX * velocidade;
}