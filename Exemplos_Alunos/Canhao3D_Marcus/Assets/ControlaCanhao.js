#pragma strict

public var velocidadeV : float;
private var juntaV : HingeJoint;

function Start () {
	juntaV = GetComponent.<HingeJoint>();
}

function Update () {
	// capturando input do usuario (-1 a 1)
	var inputV : float = Input.GetAxis("Horizontal");
	juntaV.motor.targetVelocity = inputV * velocidadeV;
}