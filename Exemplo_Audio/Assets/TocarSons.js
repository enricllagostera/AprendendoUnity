#pragma strict

public var sons : AudioClip[];
public var tocarClique : boolean = true;
public var tocarColisao : boolean = false;

function OnMouseDown () {
	if (tocarClique) {
		audio.PlayOneShot (sons [Random.Range (0, sons.Length)]);
	}
}

function OnCollisionEnter2D (colisao : Collision2D) {
	if (tocarColisao) {
		audio.PlayOneShot (sons [Random.Range (0, sons.Length)], Mathf.Clamp01 (colisao.relativeVelocity.sqrMagnitude * 0.02f));
	}
}