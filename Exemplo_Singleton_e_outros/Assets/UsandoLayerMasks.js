 #pragma strict

public var mascara : LayerMask;

function OnCollisionEnter2D (colisao : Collision2D) {

	if(((1 << colisao.gameObject.layer) & mascara.value) != 0)
	{
		print ("colidiu : " + gameObject.name);
	}
}