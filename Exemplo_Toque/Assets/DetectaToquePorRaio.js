#pragma strict

function Update () {
	if (Input.touchCount > 0) {
		var toque : Touch = Input.GetTouch (0);
		var raio : Ray = Camera.main.ScreenPointToRay (toque.position);
		var hit : RaycastHit2D = 
			Physics2D.Raycast (raio.origin, raio.direction);
		if (hit.collider != null) {
			print ("encostou em alguma coisa");
			if (hit.transform == transform) {
				transform.localScale.x = 2;
			}
		}
	}
}