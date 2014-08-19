#pragma strict

public var pontos : int = 20;
public var blocos : Sprite[];

function Start () {
	// troca o sprite do bloco aleatoriamente entre os sprites colocados
	// no vetor blocos
	GetComponent.<SpriteRenderer>().sprite = blocos[Random.Range(0, blocos.Length)];
}