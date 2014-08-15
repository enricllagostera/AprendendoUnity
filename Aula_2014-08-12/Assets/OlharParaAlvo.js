#pragma strict

public var alvo : Transform;

function Update () {
	var posicaoIntermediaria : Vector3 = Vector3.Lerp (
		transform.position,
		alvo.position,
		0.5
	);
	
	var direcaoIntermediaria : Vector3 = Vector3.Slerp (
		transform.forward,
		alvo.position - transform.position,
		0.5
	);
	
	transform.forward = direcaoIntermediaria;
	
	print (direcaoIntermediaria);
}