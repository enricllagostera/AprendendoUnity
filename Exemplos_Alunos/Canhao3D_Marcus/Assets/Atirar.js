#pragma strict

public var prefabBala : Transform;
public var forcaBala : float;

function Update () {
	//se espaco acabou de ser apertado, disparar
	if (Input.GetKeyDown(KeyCode.Space)) {
		// cria uma copia do prefab da bala
		var bala : Transform = Instantiate (
			prefabBala, 
			transform.position, 
			transform.rotation) as Transform;
		// aplicar forca na nova bala
		bala.rigidbody.AddForce (
			transform.forward * forcaBala,
			ForceMode.VelocityChange);
	}
}