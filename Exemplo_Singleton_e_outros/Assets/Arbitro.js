#pragma strict

public static var instancia : Arbitro;

public var tempo : float;

function Awake () {
	if (Arbitro.instancia == null) {
		Arbitro.instancia = this;
		DontDestroyOnLoad (this);
	}
	else {
		Destroy(this.gameObject);
	}
}

function Update () {
	tempo += Time.deltaTime;
	if (tempo > 5f) {
		tempo = 0;
		Application.LoadLevel ("Cena_Vazia");
	}
}