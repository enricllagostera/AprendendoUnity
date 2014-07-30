#pragma strict

public var forca : float = 100f;
private var input : float;

// funcao chamada a cada frame
function Update () {
	// calcula qual eh a velocidade derivada do input horizontal
	input = Input.GetAxis("Horizontal") * forca;
}

// funcao chamada em intervalos regulares
function FixedUpdate() {
	// altera o motor da HingeJoint2D para ter a velocidade de input
	GetComponent.<HingeJoint2D>().motor.motorSpeed = input;
}