#pragma strict

public static var nroJogadores : int = 0;
public static var todos : ArrayList;

public var cor : Color;

function Start () {
	if (todos == null) {
		todos = new ArrayList();
	}
	todos.Add (this);
	nroJogadores++;
	name = "Jogador " + nroJogadores;
}

function OnDestroy () {
	todos.Remove(this);
}