#pragma strict

var jogador:int;
var arbitro:Arbitro;
var imgJ1:Sprite;
var imgJ2:Sprite;
var imgJ3:Sprite;

function Start () {
	// determina o jogador dessa peca
	arbitro = GameObject.Find("Arbitro").GetComponent(Arbitro);
	jogador = arbitro.jogadorAtual;
	// muda o jogador no arbitro
	arbitro.jogadorAtual++;
	if(arbitro.jogadorAtual > 3) {
		arbitro.jogadorAtual = 1;
	}
}

function Update () {
	// altera a imagem da peca de acordo com sua variavel jogador
	switch(jogador) {
		case 1 : 
		transform.GetComponentInChildren(SpriteRenderer).sprite = imgJ1;
		break;
		case 2 : 
		transform.GetComponentInChildren(SpriteRenderer).sprite = imgJ2;
		break;
		case 3 : 
		transform.GetComponentInChildren(SpriteRenderer).sprite = imgJ3;
		break;
	}
}