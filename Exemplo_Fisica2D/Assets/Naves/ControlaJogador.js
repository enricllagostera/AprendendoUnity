#pragma strict

public var direcao : Vector2;
private var motor : MotorNave;

function Start () {
	// inicializa um vetor para guardar a direcao do input do jogador
	direcao = new Vector2();
	// referencia apra o compoenten Motor da nave
	motor = GetComponent(MotorNave);
}

function Update () {
	// captura as componentes X e Y do input
	direcao.x = Input.GetAxis("Horizontal");
	direcao.y = Input.GetAxis("Vertical");
	// atualiza a direcao em que o motor deve ir
	motor.direcao = direcao;
}