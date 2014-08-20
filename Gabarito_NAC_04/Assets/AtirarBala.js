#pragma strict

public var intervalo :float;
public var timer : float;
public var bala : Transform;
public var forca : float;

function Start () {
	timer = 0;
}

function Update () {
	timer += Time.deltaTime;
	if (timer > intervalo) {
		timer = 0;
		// atirar
		var novaBala : Transform;
		novaBala = Instantiate (
			bala,
			transform.position,
			transform.rotation);
		novaBala.rigidbody.AddForce (
			transform.forward * forca,
			ForceMode.VelocityChange);
	}
}