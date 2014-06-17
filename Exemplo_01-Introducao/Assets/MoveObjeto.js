#pragma strict

public var velocidade : float = 1f;

function Update () {
	if(Input.GetKey(KeyCode.LeftArrow)){
		transform.position.x -= velocidade * Time.deltaTime;
	}
	if(Input.GetKey(KeyCode.RightArrow)){
		transform.position.x += velocidade * Time.deltaTime;
	}
}