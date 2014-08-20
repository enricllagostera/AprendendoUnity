#pragma strict

public var velocidade : float;
public var v1 : float;
public var v2 : float;
private var _junta : HingeJoint;

function Start () {
	_junta = GetComponent.<HingeJoint>();
	_junta.useMotor = true;
	_junta.motor.targetVelocity = velocidade;
}

function Update () {
	if (transform.rotation.eulerAngles.x-360 < v1) {
		_junta.motor.targetVelocity = velocidade;
	}
	if (transform.rotation.eulerAngles.x-360 > v2) {
		_junta.motor.targetVelocity = -velocidade;
	}
}