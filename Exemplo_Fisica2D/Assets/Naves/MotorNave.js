#pragma strict

public var velocidade : float;
public var velocidadeMaxima : float;
public var velocidadeRotacao : float;
public var direcao : Vector2;

function Start () {
	// inicializa um vetor para guardar a direcao do input do jogador
	direcao = new Vector2();
}

function Update () {
	// gira o objeto para que seu lado direito aponte para onde a sua velocidade esta apontando
	// a funcao Lerp suaviza essa rotacao
	transform.right = Vector3.Lerp(transform.right, rigidbody2D.velocity, velocidadeRotacao * Time.deltaTime);
}

function FixedUpdate () {
	// soh aplica a forca de aceleracao se 1) houver algum input e 
	// 2) se a velocidade for menor que a velocidade maxima
	if(direcao != Vector2.zero && rigidbody2D.velocity.sqrMagnitude < velocidadeMaxima){
		// comando que aplica uma forca no rigidbody
		rigidbody2D.AddForce(direcao.normalized * velocidade * Time.fixedDeltaTime);
	}
}