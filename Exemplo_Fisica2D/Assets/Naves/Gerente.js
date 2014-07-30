#pragma strict

public var prefabInimigo : Transform;
public var intervalo : float;

function Start () {
	// começa a coroutine
	StartCoroutine("CriaInimigo");
}

function CriaInimigo () {
	// enquanto esse loop for verdade
	while(true){
		// espera um intervalo
		yield WaitForSeconds(intervalo + Random.Range(0, intervalo/2));
		// cria um novo inimigo na cena
		Instantiate(prefabInimigo, transform.position, Quaternion.identity);
	}
	
}