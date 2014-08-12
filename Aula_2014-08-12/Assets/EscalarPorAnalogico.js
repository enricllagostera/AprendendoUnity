#pragma strict

public var minimo : float;
public var maximo : float;

// a cada frame
function Update () {
	// capturando valor do trigger e guardando nuam variavel
	var trigger : float = Input.GetAxis ("Trigger");
	transform.localScale.x = minimo + trigger * maximo;
}