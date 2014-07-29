#pragma strict

var indice : int;
var tabuleiro : Tabuleiro;
var arbitro : Arbitro;
var imagem:SpriteRenderer;

function Start () {
	tabuleiro = transform.parent.GetComponent(Tabuleiro);
	arbitro = GameObject.Find("Arbitro").GetComponent(Arbitro);
	arbitro.msg.text = "Vez do jogador " + arbitro.jogadorAtual;
	imagem = GetComponentInChildren(SpriteRenderer);
	imagem.active = false;
}

function OnMouseOver () {
	imagem.active = true;
}

function OnMouseExit () {
	imagem.active = false;
}

function OnMouseUp () {
	// soh faz o que esta aqui se nao for fim de jogo
	if(!arbitro.fimDeJogo) {
		Debug.Log("clicou na coluna " + indice);
		var linha = tabuleiro.TemEspacoLivre(indice);
		print("linah com espaco livre: " + linha);
		if (linha < 0) {
			print("Coluna esta cheia");
		}
		else {
			tabuleiro.matriz[linha, indice] = arbitro.jogadorAtual;
			var posPeca:Vector3 = new Vector3 (
				transform.position.x,
				transform.position.y + 6f,
				0);
			Instantiate(arbitro.prefabPeca, posPeca, Quaternion.identity);
			
			// avança o jogador atual
			arbitro.jogadorAtual++;
			if(arbitro.jogadorAtual == 4) {
				arbitro.jogadorAtual = 1;
			}
			arbitro.msg.text = "Vez do jogador " + arbitro.jogadorAtual;
			
			// checa se eh fim de jogo e escreve mensagem se alguem ganhou
			if(tabuleiro.VerificarFimDeJogo()){
				arbitro.fimDeJogo = true;
				arbitro.msg.text = "O jogador " + (arbitro.jogadorAtual-1) + " ganhou!";
			}
		}
	}
	
}