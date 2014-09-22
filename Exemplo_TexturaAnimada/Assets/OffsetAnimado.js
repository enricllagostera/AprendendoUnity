 #pragma strict

public var velocidadeX : float;
public var velocidadeY : float;

function Update () {
	var offsetX = renderer.material.GetTextureOffset("_MainTex").x +
		velocidadeX * Time.deltaTime;
	var offsetY = renderer.material.GetTextureOffset("_MainTex").y +
		velocidadeY * Time.deltaTime;
	renderer.material.SetTextureOffset(
		"_MainTex", 
		new Vector2(offsetX, offsetY));
}