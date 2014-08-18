#pragma strict

private var animador : Animator;

function Start () {
	animador = GetComponent("Animator") as Animator;
}

function Update () {
	if (Input.GetAxis("Horizontal") != 0) {
		animador.SetBool("EstaCorrendo", true);
	}
	else {
		animador.SetBool("EstaCorrendo", false);
	}
}