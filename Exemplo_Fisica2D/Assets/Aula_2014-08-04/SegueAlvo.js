#pragma strict

public var alvo : Transform;
public var distancia : Vector3;

function Update () {
	transform.position = alvo.position + distancia;
}