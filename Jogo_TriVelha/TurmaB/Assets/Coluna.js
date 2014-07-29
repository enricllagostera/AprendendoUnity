#pragma strict

var indice:int;
var tabuleiro:Tabuleiro;
var arbitro:Arbitro;

function Start () {
	// guarda referencias para faciltiar acesso ao tabuleiro e ao arbitro
	tabuleiro = transform.parent.GetComponent(Tabuleiro);
	arbitro = GameObject.Find("Arbitro").GetComponent(Arbitro);
}

// funcao eh chamada quando o jogador solta o mouse sobre uma das colunas
function OnMouseUp () {
	// se nao eh o fim do jogo, dah pra clicar
	if(!arbitro.fimDeJogo){
		var linha:int = tabuleiro.TemEspacoLivre(indice);
		// se tiver alguma linha livre (-1 indica que nao tem linha livre)
		if(linha > -1){
			// altera a matriz de indices com a info do jogador atual
			tabuleiro.matriz[linha, indice] = arbitro.jogadorAtual; 
			// calcula a posicao da nova peca
			var posicaoPeca:Vector3 = new Vector3(
				transform.position.x,
				transform.position.y + 8f,
				0); 
			// cria um objeto a partir do prefab de peca
			Instantiate(arbitro.prefabPeca, posicaoPeca, Quaternion.identity); 
			
			// se for o fim de jogo
			if(tabuleiro.VerificarFimDeJogo()){
				arbitro.fimDeJogo = true;
				print("O jogador " + arbitro.jogadorAtual + " ganhou!");
			}
		}
	}
	
}