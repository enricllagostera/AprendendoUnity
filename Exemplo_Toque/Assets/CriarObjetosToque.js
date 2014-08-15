#pragma strict
import System.Collections.Generic;

public var prefabObj : Transform;
public var caixas : Dictionary.<int, Transform>;

function Start () {
	caixas = new Dictionary.<int, Transform>();
}

function Update () {
	
	if (Input.touchCount > 0) {
		//print ("toques " + Input.touchCount);
		for	(var i = 0; i < Input.touchCount; i++) {
			// pega toque e calcula sua posicao no mundo
			var toque : Touch = Input.GetTouch(i);
			var posicao : Vector3 = Camera.main.ScreenToWorldPoint(toque.position);
			posicao.z = 0;
			// se jah tem esse dedo tocando
			if (caixas.ContainsKey(toque.fingerId)) {
				if (toque.phase == TouchPhase.Canceled ||
					toque.phase == TouchPhase.Ended ) {
					//print ("saiu");
					Destroy(caixas[toque.fingerId].gameObject);
					caixas.Remove(toque.fingerId);
				}
				else {
					//print ("atualizou");
					caixas[toque.fingerId].position = posicao;
				}
			}
			else if (toque.phase == TouchPhase.Began) {
				print ("criou ID: " + toque.fingerId);
				caixas.Add(toque.fingerId, Instantiate (prefabObj, posicao, Quaternion.identity));
			}
		}
		//print ("caixas " + caixas.Count);
	}
	
	
}