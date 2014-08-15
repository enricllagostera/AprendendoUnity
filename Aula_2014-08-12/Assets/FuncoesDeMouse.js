#pragma strict

function OnMouseEnter () {
	print ("entrou");
}

function OnMouseOver () {
	print ("over");
}

function OnMouseDown () {
	renderer.material.color = Color.red;
}

function OnMouseDrag () {
	transform.localScale.z += Time.deltaTime;
}

function OnMouseUp () {
	renderer.material.color = Color.yellow;
}

function OnMouseExit () {
	print ("saiu");
}