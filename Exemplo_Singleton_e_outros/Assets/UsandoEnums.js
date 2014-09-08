#pragma strict

public enum Estacoes {
	Verao,
	Outono,
	Inverno,
	Primavera
}

public var estacao : Estacoes;

function Start () {
}

function Update () {
	switch (estacao) {
	case Estacoes.Inverno : 
		GetComponent.<SpriteRenderer>().color = Color.blue;
		break;
	case Estacoes.Outono : 
		GetComponent.<SpriteRenderer>().color = Color.red;
		break;
	case Estacoes.Primavera : 
		GetComponent.<SpriteRenderer>().color = Color.green;
		break;
	case Estacoes.Verao : 
		GetComponent.<SpriteRenderer>().color = Color.yellow;
		break;	
	}
}