#pragma strict

public var prefabNota : Transform;

function Update () {
	if (Input.GetMouseButtonUp(0)) {
		var posMouse : Vector3 = Camera.main.ScreenToWorldPoint(Input.mousePosition);
		Instantiate (prefabNota, new Vector3 (posMouse.x, posMouse.y, 0), Quaternion.identity);
	}
}