#pragma strict

var wolf : GameObject;
var currentWolves = 0;
var maxWolves = 5;



function Start () {
	InvokeRepeating ("SpawnWolf", 0.01, 5);
}

function SpawnWolf () {
	if (currentWolves < maxWolves)
	{
		++currentWolves;
		var newWolf = Instantiate (wolf, Vector3 (383.57, 63.202, 369.09), Quaternion.identity);
	}
}

function Decrement (temp : int)
{
	if (temp == 1)
	{
		--currentWolves;
	}
}