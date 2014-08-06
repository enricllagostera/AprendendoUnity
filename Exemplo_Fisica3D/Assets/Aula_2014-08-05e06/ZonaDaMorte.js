#pragma strict

public var prefabParticula : Transform;
public var prefabAlvo : Transform;
public var novoAlvo : Transform;

function OnTriggerEnter (outro : Collider) {
	// cria prefab de particula
	Instantiate (
		prefabParticula,
		outro.transform.position,
		Quaternion.identity);
	// se for alvo, criar novo alvo
	if (outro.gameObject.CompareTag("Alvo")) {
		Instantiate (
			prefabAlvo,
			novoAlvo.position,
			novoAlvo.rotation);
	}
	// destruir objeto
	Destroy (outro.gameObject);
}