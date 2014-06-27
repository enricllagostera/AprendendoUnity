#pragma strict

var indice:int;
var tabuleiro:Tabuleiro;
var arbitro:Arbitro;

function Start () {
	tabuleiro = transform.parent.GetComponent(Tabuleiro);
	arbitro = GameObject.Find("Arbitro").GetComponent(Arbitro);
}

function OnMouseUp () {
	//print("clicou na coluna: " + indice);
	//print("jogador atual: " + arbitro.jogadorAtual);
	var linha:int = tabuleiro.TemEspacoLivre(indice);
	//print("linha livre: " + linha);
	if(linha > -1){
		tabuleiro.matriz[linha, indice] = arbitro.jogadorAtual;
		var posicaoPeca:Vector3 = new Vector3(
			transform.position.x,
			transform.position.y + 8f,
			0);
		Instantiate(arbitro.prefabPeca, posicaoPeca, Quaternion.identity);
		
		print(tabuleiro.VerificarFimDeJogo());
		
		arbitro.jogadorAtual++;
		if(arbitro.jogadorAtual > 3) {
			arbitro.jogadorAtual = 1;
		}	
	}
}