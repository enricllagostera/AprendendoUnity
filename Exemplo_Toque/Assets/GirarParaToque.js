#pragma strict

function Update () {
	if (Input.touchCount > 0) {
		var toque : Touch = Input.GetTouch(0);
		var posicao : Vector3 = 
			Camera.main.ScreenToWorldPoint(toque.position);
		posicao.z = 0;
		var direcao : Vector3 = posicao - transform.position;
		transform.right = direcao;
	}
}