#pragma strict

private var animator : Animator;

function Start () {
	// guarda uma referencia ao Animator
	animator = GetComponent.<Animator>();
}

function Update () {
	// controla o estado e orientacao da animacao
	// segundo o sentido do input do jogador
	if (Input.GetAxis ("Horizontal") != 0){
		// alterando esse parametro, ativamos
		// as transicoes que criamos no Mecanim
		animator.SetBool("Andando", true);
		if (Input.GetAxis ("Horizontal") < 0) {
			// invertendo a escala em x, 
			// espelhamos o sprite
			transform.localScale.x = -1;
		}
		else if (Input.GetAxis ("Horizontal") > 0) {
			transform.localScale.x = 1;
		}
	}
	else {
		animator.SetBool("Andando", false);
	}
}