#pragma strict

// uma cor para cada estado da tecla
public var corPressionou : Color;
public var corPressionado : Color;
public var corSoltou : Color;
public var corSolto : Color;

// a cada frame
function Update () {
	
	// se nao estiver pressionado
	if (!Input.GetKey (KeyCode.Space)) {
		// muda a cor do material do renderer para solto
		renderer.material.color = corSolto;
		if (Input.GetKeyUp (KeyCode.Space)) {
			// se acabou de soltar, muda a cor novamente
			print ("Soltou");
			renderer.material.color = corSoltou;
		}
		else {
			// se jah estava solto, escreve uma mensagem
			print ("Solto");
		}
	}
	else {
		// se estiver pressionado, muda cor
		renderer.material.color = corPressionado;
		if (Input.GetKeyDown (KeyCode.Space)) {
			// se acabou de pressionar
			print ("Pressionou");
			renderer.material.color = corPressionou;
		}
		else {
			// se jah estava pressionado, escreve msg
			print ("Pressionado");
		}
	}
}