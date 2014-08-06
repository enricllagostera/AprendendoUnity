#pragma strict

public var velocidade : float;
private var junta : HingeJoint2D;

function Start () {
	junta = GetComponent.<HingeJoint2D>();
}

function Update () {
	// capturando input do usuario (-1 a 1)
	var input : float = Input.GetAxis("Horizontal");
	junta.motor.motorSpeed = input * velocidade;
}