#pragma strict

// a cada frame
function Update () {

	var direcao : Vector3 = new Vector3 (
		Input.GetAxis("Mouse X"),
		Input.GetAxis("Mouse Y"),
		0
	);
	
	Camera.main.transform.forward = 
		Vector3.Slerp(Camera.main.transform.forward, direcao,
			Time.deltaTime);
	
	print (Input.GetAxis("Mouse X"));
}