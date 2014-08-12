#pragma strict

public var minimo : float;
public var maximo : float;
public var tempoMaximo : float;
public var tempoApertado : float;
public var suavizacao : float;

function Update () {
	if (Input.GetKeyDown(KeyCode.Space)) {
		tempoApertado = 0;
	}
	if (Input.GetKey (KeyCode.Space)) {
		tempoApertado += Time.deltaTime;
	}
	else {
		tempoApertado = Mathf.Lerp(tempoApertado, 0, Time.deltaTime * suavizacao);
	}
	// calcular a escala atual
	var escala : float = minimo + 
		Mathf.Clamp01(tempoApertado / tempoMaximo) * maximo;
	// mudar a escala
	transform.localScale.x = escala;
}
