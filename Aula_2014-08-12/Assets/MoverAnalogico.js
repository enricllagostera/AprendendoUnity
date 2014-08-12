#pragma strict

public var direcao : Vector3;
public var suavizacao : float;
public var velocidade : float;

// a cada frame
function Update () {
	// cria um vetor de direcao a partir de dois eixos analogicos
	direcao = new Vector3 (
		Input.GetAxis("Horizontal"),	
		0, 
		Input.GetAxis("Vertical"));
	// rotacao
	transform.forward = Vector3.Slerp (transform.forward, direcao, Time.deltaTime * suavizacao);
	// translacao
	transform.position += direcao * velocidade * Time.deltaTime;
}