#pragma strict

public var podePular : boolean;
public var forcaPulo : float;

function Update () {
	if (Input.GetKeyDown (KeyCode.Space) && podePular) {
		// soh acontece quando acabou de apertar espaco E (&&) podePular eh verdadeiro
		rigidbody2D.AddForce (Vector3.up * rigidbody2D.mass * forcaPulo);
		// aplica forca para cima (relativo ao mundo) : a forca ignora a massa
		// e usa a variavel publica que podemos mudar no inspector
	}
}

// funcao chamada quando comecou a colidir com algum objeto
function OnCollisionEnter2D () {
	// deixa pular
	podePular = true;
}

// funcao chamada quando parou de colidir com algum objeto
function OnCollisionExit2D () {
	// proibe de pular
	podePular = false;
}