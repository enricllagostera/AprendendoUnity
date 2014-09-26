#pragma strict

public var pontos : int;
public var numPosicoes = 10;
public var ranking : Array;

function Start () {
	pontos = 0;
	
}

function Update () {
	// gera pontos enquanto o jogador segurar a barra de espaco
	if ( Input.GetKey (KeyCode.Space) ) {
		pontos++;
	}
	// quando soltar a barra, tenta incluir a pontuacao
	// no ranking persistente (PlayerPrefs)
	if (Input.GetKeyUp(KeyCode.Space)) {
		print(pontos);
		IncluirRanking();
	}
}

function IncluirRanking () {
	ranking = new Array(numPosicoes);
	// criar copia do ranking com valores antigos
	for (var i = 0; i < numPosicoes; i++) {
		ranking[i] = PlayerPrefs.GetInt("rank_"+i, 0);
	}
	// encontrar onde substituir
	var novaPosicao = -1;
	for (var j = 0; j < numPosicoes; j++) {
		// conversao de tipo Object para int
		var valor : int = ranking[j];
		if (pontos > valor ){
			novaPosicao = j;
			break;
		}
	}
	// se a pontuacao estah dentro do ranking
	if (novaPosicao >= 0) {
		// inclui na posicao adequada
		ranking.Splice(novaPosicao, 0, pontos);
		// remove o ultimo colocado
		ranking.RemoveAt(numPosicoes);
	}
	// guarda o novo ranking no PlayerPrefs
	for (var k = 0; k < numPosicoes; k++) {
		// conversao de tipo Object para int
		var valor2 : int = ranking[k];
		PlayerPrefs.SetInt("rank_"+k, valor2);
		print ("pos " + k + ": " + valor2);
	}
}