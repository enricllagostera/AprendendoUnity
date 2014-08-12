#pragma strict

// uma cor para cada estado da tecla
public var corPressionou : Color;
public var corPressionado : Color;
public var corSoltou : Color;
public var corSolto : Color;

function Update () {

	if (Input.GetButton ("TrocarCor")) {
		renderer.material.color = corPressionado;
	}
	if (Input.GetButtonDown ("TrocarCor")) {
		renderer.material.color = corPressionou;
	}
	if (Input.GetButton ("TrocarCor") == false) {
		renderer.material.color = corSolto;
	}
	if (Input.GetButtonUp ("TrocarCor")) {
		renderer.material.color = corSoltou;
	}
	
}