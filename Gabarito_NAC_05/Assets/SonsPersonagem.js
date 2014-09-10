#pragma strict

public var somPulo : AudioClip;
public var somCair : AudioClip;

function Pular () {
	audio.PlayOneShot (somPulo);
}

function Cair () {
	audio.PlayOneShot (somCair);
}