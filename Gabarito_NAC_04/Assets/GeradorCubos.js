#pragma strict

public var intervalo : float;
public var largura : float;
public var timer : float;
public var prefab : Transform;

function Start () {
	timer = 0;
}

function Update () {
	timer += Time.deltaTime;
	if (timer > intervalo) {
		timer = 0;
		// soltar cubo
		var posicao : Vector3 = new Vector3 (
			transform.position.x + Random.Range (-largura, largura), 
			transform.position.y, 
			0);
		Instantiate (prefab, posicao, Quaternion.identity);
	}
}