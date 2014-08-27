#pragma strict

public var aceleracaoX : float;
public var velocidadeMaximaX : float;
public var arrastoChao : float;
public var animator : Animator;
public var estaNoChao : boolean;
public var velocidadePulo : float;
public var tempoSubida : float;
public var pulando : boolean;
public var timer : float;
public var modificadorAr : float;

function Start () {
	animator = GetComponentInChildren.<Animator>();
}

function Update () {
	if (Input.GetButtonDown("Jump") && estaNoChao && !pulando) {
		print ("entrou");
		pulando = true;
		timer = 0;
		animator.SetTrigger("Pulando");
	}
}

function FixedUpdate () {
	
	var aceleracaoReal = aceleracaoX;
	
	if (estaNoChao) {
		rigidbody2D.drag = arrastoChao;
	}
	else {
		rigidbody2D.drag = 0;
		aceleracaoReal *= modificadorAr;
	}
	
	if (Input.GetButton("Jump") && pulando && timer < tempoSubida) {
		rigidbody2D.velocity.y = velocidadePulo;
		timer += Time.fixedDeltaTime;
	}
	
	// soh aplica aceleracao se a velocidade atual
	// tiver modulo menor que a velocidade maxima
	if (Mathf.Abs (rigidbody2D.velocity.x) < velocidadeMaximaX ) {
		rigidbody2D.velocity.x += Input.GetAxis ("Horizontal") * aceleracaoReal * Time.fixedDeltaTime;
	}
	
	// soh atualiza a direcao que o personagem olha quando
	// tiver allgum input do jogador
	if (Input.GetAxis ("Horizontal") != 0) {
		transform.localScale.x = Mathf.Sign (Input.GetAxis ("Horizontal"));
	}
	
	// calcula qual eh o coeficiente atual da velocidade em X 
	// em relacao a velocidade maxima e passa isso para o Animator
	var coeficiente = Mathf.Abs (rigidbody2D.velocity.x) / velocidadeMaximaX;
	animator.SetFloat ("CoeficienteVelocidadeX", coeficiente); 
}