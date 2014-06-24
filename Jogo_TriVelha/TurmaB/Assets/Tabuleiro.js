#pragma strict

var matriz : int[,] = new int[4,4];

function Start () {
	for (var l = 0; l < 4; l++) {
		for (var c = 0; c < 4; c++) {
			matriz[l, c] = 1;
			print(matriz[l, c]);
		}
	}
	print(VerificarFimDeJogo());
	print(TemEspacoLivre(0));
}

function VerificarFimDeJogo () {
	// percorrendo todas as posicoes
	for (var l = 0; l < 4; l++) {
		for (var c = 0; c < 4; c++) {
			if (matriz[l, c] == 0) {
				continue;
			}
			// se for miolo
			if (l > 0 && l < 3 && c > 0 && c < 3) {
				if (VerificarVertical (l, c)) {
					return true;
				}
				if(VerificarHorizontal (l, c)) {
					return true;
				}
				if (VerificarDiagonal1 (l, c)) {
					return true;
				}
				if (VerificarDiagonal2 (l, c)) {
					return true;
				}
			}
			// se for primeira ou ultima linha
			else if ((l == 0 || l == 3) && (c > 0 && c < 3)) {
				if(VerificarHorizontal (l, c)) {
					return true;
				}
			}
			// se for primeira ou ultima coluna
			else if ((c == 0 || c == 3) && (l > 0 && l < 3)) {
				if (VerificarVertical (l, c)) {
					return true;
				}
			}
		}
	}
	return false;
}

function VerificarHorizontal (l:int, c:int) {
	if (matriz[l, c] == matriz[l, c-1] &&
		matriz[l, c] == matriz[l, c+1]) {
		return true;
	}
	else {
		return false;
	}
}

function VerificarVertical (l:int, c:int) {
	if (matriz[l, c] == matriz[l+1, c] &&
		matriz[l, c] == matriz[l-1, c]) {
		return true;
	}
	else {
		return false;
	}
}

function VerificarDiagonal1 (l:int, c:int) {
	if (matriz[l, c] == matriz[l+1, c-1] &&
		matriz[l, c] == matriz[l-1, c+1]) {
		return true;
	}
	else {
		return false;
	}
}

function VerificarDiagonal2 (l:int, c:int) {
	if (matriz[l, c] == matriz[l-1, c-1] &&
		matriz[l, c] == matriz[l+1, c+1]) {
		return true;
	}
	else {
		return false;
	}
}

function TemEspacoLivre (coluna:int) {
	for(var i = 0; i < 4; i++) {
		if (matriz[i, coluna] == 0) {
			return i;
		}
	}
	return -1;
}






