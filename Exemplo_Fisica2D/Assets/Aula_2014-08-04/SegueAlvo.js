#pragma strict

public var alvo : Transform;
public var distancia : Vector3;

function Update () {
	// a posicao da camera recebe a posicao do alvo mais 
	// a distancia que deve manter dele
	// 1) versao sem suavizacao
	// transform.position = alvo.position + distancia;
	// 2) versao com suavizacao
	transform.position = Vector3.Lerp (transform.position, alvo.position + distancia, Time.deltaTime);
}