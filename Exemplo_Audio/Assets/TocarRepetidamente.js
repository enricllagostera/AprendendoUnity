#pragma strict

public var intervalo : float;

function Start () {
	InvokeRepeating ("Tocar", 0f, intervalo);
}

function Tocar () {
	audio.PlayOneShot (audio.clip);
}