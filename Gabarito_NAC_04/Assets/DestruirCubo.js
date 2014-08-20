#pragma strict

public var intervalo :float;
public var timer : float;
public var colidiu : boolean;

function Start () {
	colidiu = false;
}

function Update () {
	if (colidiu) {
		timer += Time.deltaTime;
		if (timer > intervalo) {
			Destroy (gameObject);
		}
	}
}

function OnCollisionEnter (colisao : Collision) {
	renderer.material.color = Color.red;
	timer = 0;
	colidiu = true;
	// se colidiu com jogador
	if (colisao.gameObject.name == "Jogador") {
		Destroy (colisao.gameObject);
	}
}


