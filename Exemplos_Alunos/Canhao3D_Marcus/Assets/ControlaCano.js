#pragma strict

public var velocidadeH : float;
private var juntaH : HingeJoint;

function Start () {
	juntaH = GetComponent.<HingeJoint>();
}

function Update () {
	// capturando input do usuario (-1 a 1)
	var inputH : float = Input.GetAxis("Vertical");
	juntaH.motor.targetVelocity = inputH * velocidadeH;
}