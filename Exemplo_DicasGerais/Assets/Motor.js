#pragma strict

public var movimento : float;
public var direcao : Vector3;
@RangeAttribute(0, 1) public var fatorAtrito : float;
public var velocidadeMax : float;

function Update () {
	direcao = Vector3.zero;
	if (Input.GetAxis("Vertical") > 0) {
		direcao = new Vector3 (0, 0, 1);
	}
}

function FixedUpdate () {
	/*
	rigidbody.AddForce (
		direcao * movimento,
		ForceMode.VelocityChange);
	rigidbody.velocity = new Vector3 (
		(direcao * movimento).x,
		rigidbody.velocity.y,
		(direcao * movimento).z);
	*/
	
	var velDesejada : Vector3 = new Vector3 (
		(direcao * movimento).x,
		0,
		(direcao * movimento).z);
	
	if ( rigidbody.velocity.magnitude < velocidadeMax) {	
		rigidbody.velocity += velDesejada;
	}
	
	var velEixos : Vector3 = new Vector3 (
		rigidbody.velocity.x, 
		0, 
		rigidbody.velocity.z); 
	
	if ( velEixos.magnitude > 0 ) {
		rigidbody.velocity = new Vector3 (
			rigidbody.velocity.x * fatorAtrito,
			rigidbody.velocity.y,
			rigidbody.velocity.z * fatorAtrito);
	}
	
	Debug.DrawRay (transform.position, transform.forward*5, Color.red);
}