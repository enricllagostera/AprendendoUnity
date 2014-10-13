#pragma strict

public var pontos : Transform[];
public var posAtual : int;
public var posAlvo : int;
public var velocidade : float;
public var tolerancia : float;
public var proximo : int;
public var timer : float;

function Start () {
	posAtual = 0;
	posAlvo = 1;
	proximo = 1;
	timer = 0;
	transform.position = pontos[posAtual].position;
}

function Update () {

	if (Input.GetKeyDown(KeyCode.W) ) {
		proximo *= -1;
	}


	timer += Time.deltaTime;
	
	transform.position = Vector3.Lerp (
		pontos[posAtual].position,
		pontos[posAlvo].position,
		timer * velocidade);
	
	transform.LookAt (pontos[posAlvo]);
	
	if (Vector3.Distance(
			transform.position, 
			pontos[posAlvo].position) < tolerancia ) {
		timer = 0;
		posAtual = posAlvo;
		posAlvo += proximo;
		
		if (posAlvo == pontos.Length || posAlvo == -1) {
			proximo *= -1;
			posAlvo += proximo;
		}
	}
}