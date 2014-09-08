#pragma strict

public var escalaDoTempo : float;

function Start () {

}

function Update () {
	Time.timeScale = escalaDoTempo;
}