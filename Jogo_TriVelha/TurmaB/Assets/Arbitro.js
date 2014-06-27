#pragma strict

var fimDeJogo:boolean = false;
var etapa:int; // vai mudar no futuro
var jogadorAtual:int;
var prefabPeca:GameObject;

function Start () {
	fimDeJogo = false;
	jogadorAtual = 1;
}