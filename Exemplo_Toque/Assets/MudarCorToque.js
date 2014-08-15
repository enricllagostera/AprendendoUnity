#pragma strict

function OnMouseDown () {
	GetComponent.<SpriteRenderer>().color = Color.blue;
}

function OnMouseDrag () {
	var toque : Touch = Input.GetTouch(0);
	var posicao : Vector3 = 
		Camera.main.ScreenToWorldPoint(toque.position);
	posicao.z = 0;
	transform.position = posicao;
}