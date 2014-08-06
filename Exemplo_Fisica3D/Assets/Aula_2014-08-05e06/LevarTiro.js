#pragma strict

// trocar de cor para vermelho quando
// uma bala encostar nesse objeto

function OnCollisionEnter (colisao : Collision) {
	// escreve no console o nome do objeto com que colidiu
	print ("colidiu com " + colisao.gameObject.name);
	// se tiver a tag "bala", troca a cor do objeto
	if (colisao.gameObject.CompareTag("Bala")) {
		renderer.material.color = Color.red;
	}
}

function OnCollisionExit (colisao : Collision) {
	// escreve no console o nome do objeto com que colidiu
	print ("colidiu com " + colisao.gameObject.name);
	// se tiver a tag "bala", troca a cor do objeto
	if (colisao.gameObject.CompareTag("Bala")) {
		renderer.material.color = Color.white;
	}
}
