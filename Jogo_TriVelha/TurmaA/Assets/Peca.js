﻿#pragma strict

var jogador:int;
var arbitro : Arbitro;
var imgJ1:Sprite;
var imgJ2:Sprite;
var imgJ3:Sprite;

function Start () {
	arbitro = GameObject.Find("Arbitro").GetComponent(Arbitro);
	jogador = arbitro.jogadorAtual;
	switch(jogador) {
		case 1 : 
			GetComponentInChildren(SpriteRenderer).sprite = imgJ1;
			break;
		case 2 : 
			GetComponentInChildren(SpriteRenderer).sprite = imgJ2;
			break;
		case 3 : 
			GetComponentInChildren(SpriteRenderer).sprite = imgJ3;
			break;
	}
}