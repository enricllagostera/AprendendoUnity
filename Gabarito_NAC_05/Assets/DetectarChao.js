#pragma strict

private var pai : MoverPersonagem;

function Start () {
	pai = transform.parent.GetComponent.<MoverPersonagem>();
}

function OnTriggerEnter2D () {
	print ("entrou");
	pai.estaNoChao = true;
	pai.pulando = false;
	pai.animator.SetTrigger("Levantando");
}

function OnTriggerExit2D () {
	print ("descolou");
	pai.estaNoChao = false;
	
}