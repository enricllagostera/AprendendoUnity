#pragma strict

function Start () {

}

function Update () {
	guiText.text = PlayerPrefs.GetFloat ("tempo").ToString("00.00");
}