#pragma strict

public var alvo : Transform;

function Update () {
	transform.forward = alvo.position - transform.position;
}