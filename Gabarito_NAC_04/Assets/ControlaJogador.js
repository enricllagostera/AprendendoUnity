#pragma strict

public var velocidade : float;
private var direcaoX : float;
private var pulo : float;
public var estaPulando : boolean;

function Start () {
	estaPulando = false;
}

function Update () {
	direcaoX = Input.GetAxis("Horizontal");
	pulo = Input.GetAxis("Vertical");
}

function FixedUpdate () {
	// movimento horizontal
	rigidbody.velocity.x = direcaoX * velocidade * Time.deltaTime;
	// pulo
	if (pulo > 0 && estaPulando == false) {
		estaPulando = true;
		rigidbody.AddForce(transform.up * velocidade * Time.deltaTime, ForceMode.VelocityChange); 
	}
}

function OnCollisionEnter (colisao : Collision) {
	// se o jogador colidiu com a plataforma
	if (colisao.gameObject.name == "Plataforma") {
		estaPulando = false;
	}

}