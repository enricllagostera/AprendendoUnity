#pragma strict

public var intervalo : float;
public var velocidade : float;

function Start () {
	StartCoroutine ("Executar");
}

function Update () {
	transform.Translate (velocidade * Time.deltaTime, 0, 0);
}

function Executar () {
	print ("começou Executar");
	velocidade = Mathf.Abs (velocidade);
	/*
	while (this.enabled) {
		yield WaitForSeconds (intervalo);
		print ("voltou Executar");
		velocidade *= -1;
	}
	*/
	yield WaitForSeconds (10f);
	velocidade *= -1;
	yield WaitForSeconds (5f);
	velocidade *= -1;
	print ("terminou de rodar Executar");
}