#pragma strict

public var velocidade : float;
private var junta : HingeJoint;

function Start () {
	junta = GetComponent.<HingeJoint>();
}

function Update () {
	// capturando input do usuario (-1 a 1)
	var input : float = Input.GetAxis("Vertical");
	junta.motor.targetVelocity = input * velocidade;
}