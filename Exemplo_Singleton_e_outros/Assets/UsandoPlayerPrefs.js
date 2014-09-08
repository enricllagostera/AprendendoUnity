#pragma strict

public var tempo : float;

function Start () {
	tempo = 0;
}

function Update () {
	tempo += Time.deltaTime;
	
	if (Input.GetKeyDown (KeyCode.Space)) {
		// guardar o tempo no PlayerPrefs
		PlayerPrefs.SetFloat ("tempo", tempo);
	}
}