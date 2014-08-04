#pragma strict

public var cubo : Transform;

function Update () {
	if (Input.GetKeyDown (KeyCode.Space)) {
		Instantiate (cubo, transform.position + new Vector3 (0, 12, 0), Quaternion.identity);
	}
}