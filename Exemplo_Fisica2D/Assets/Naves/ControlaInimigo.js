#pragma strict

public var direcao : Vector2;
private var motor : MotorNave;
private var jogador : Transform;
private var direcaoJogador : Vector3;

function Start () {
	// inicializa um vetor para guardar a direcao que o inimigo deseja ir
	// e outro para onde esta o jogador
	direcao = new Vector2();
	direcaoJogador = new Vector3();
	// cria referencia ao motor da nave e ao jogador
	motor = GetComponent(MotorNave);
	jogador = GameObject.Find("Jogador").transform;
}

function Update () {
	// calcula a direcao onde estah o jogador a partir da posicao do inimog e do jogador
	direcaoJogador = jogador.position - transform.position;
	direcao.x = direcaoJogador.normalized.x;
	direcao.y = direcaoJogador.normalized.y;
	// atualiza a direcao em que o motor deve ir
	motor.direcao = direcao;
}