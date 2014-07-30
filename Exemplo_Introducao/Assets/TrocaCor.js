#pragma strict

public var cor : Color;

function OnCollisionEnter () {
	renderer.material.color = cor;
}