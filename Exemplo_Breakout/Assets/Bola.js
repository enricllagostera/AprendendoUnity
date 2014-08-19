#pragma strict

public var velocidade : float = 10f;
private var posicaoInicial : Vector3;
public var raquete : Raquete;

function Start () {
	// guarda a posicao inicial para a hora de resetar
	posicaoInicial = transform.position;
	Resetar ();
}

function Resetar () {
	transform.position = posicaoInicial;
	// aplica a velocidade formando uma diagonal
	rigidbody2D.velocity = new Vector2 (velocidade, velocidade);
}

function Update () {
	// se a bola estiver mais baixa que a raquete
	if (transform.position.y < raquete.transform.position.y) {
		// diminui as vidas
		raquete.vidas--;
		if (raquete.vidas > 0) {
			// se ainda tem vidas para gastar, resetar
			raquete.Resetar();
			Resetar();
		}
		else {
			// fim de jogo
			// pressione espaco para recomecar o jogo
			if (Input.GetKeyDown (KeyCode.Space)){
				Application.LoadLevel (Application.loadedLevel);
			}
		}
	}
}

function OnCollisionEnter2D (colisao : Collision2D) {
	// se colidiu com a raquete
	if (colisao.gameObject.name == "Raquete") {
		// se estah vindo da esq -> dir
		if (rigidbody2D.velocity.x > 0) {
			// se o contato foi antes da metade da raquete,
			// inverte a velocidade em x
			if (transform.position.x < colisao.transform.position.x) {
				rigidbody2D.velocity.x = -velocidade;
			}
			else {
				rigidbody2D.velocity.x = velocidade;
			}
		}
		else {
			if (transform.position.x > colisao.transform.position.x) {
				rigidbody2D.velocity.x = velocidade;
			}
			else {
				rigidbody2D.velocity.x = -velocidade;
			}
		}
	}
	
	// calcular direcao do contato, usando o angulo entre a normal e as direcoes
	// gerais up e -up. com isso, temos tolerancia pra colisoes entre cantos de pecas
	if (Mathf.Abs(Vector3.Angle (colisao.contacts[0].normal, -Vector3.up)) < 90f) {
		// bateu na vertical para baixo, bola tem q descer
		rigidbody2D.velocity.y = -velocidade;
	}
	else if (Mathf.Abs(Vector3.Angle (colisao.contacts[0].normal, Vector3.up)) < 90f) {
		// bateu na vertical para cima, bola ter que subir
		rigidbody2D.velocity.y = velocidade;
	}
	
	if (colisao.contacts[0].normal == -Vector3.right) {
		// bateu na dir, tem que ir para esq
		rigidbody2D.velocity.x = -velocidade;
	}
	else if (colisao.contacts[0].normal == Vector3.right) {
		// bateu na esq, tem que ir para dir
		rigidbody2D.velocity.x = velocidade;
	}
	
	// se colidiu com bloco, destrua o bloco, aumente a velocidade e some pontos
	if (colisao.gameObject.CompareTag("Bloco")) {
		Destroy (colisao.gameObject);
		raquete.pontos += 20;
		velocidade *= 1.02f;
		// se for o ultimo bloco, escreve "voce venceu"
		if (GameObject.FindGameObjectsWithTag("Bloco").Length == 1) {
			print ("Voce venceu!");
		}
	}
}