#pragma strict

var crow : GameObject;
var currentCrows = 0;
var maxCrows = 5;



function Update () {
	if (currentCrows < maxCrows)
	{
		SpawnCrow1();
		SpawnCrow2();
		SpawnCrow3();
		SpawnCrow4();
		SpawnCrow5();
	}
}

function SpawnCrow1 () {
		++currentCrows;
		var newCrow = Instantiate (crow, Vector3 (383.57, 200.0, 499.0), Quaternion.identity);
}

function SpawnCrow2 () {
		++currentCrows;
		var newCrow = Instantiate (crow, Vector3 (380.57, 200.0, 499.0), Quaternion.identity);
}

function SpawnCrow3 () {
		++currentCrows;
		var newCrow = Instantiate (crow, Vector3 (377.57, 200.0, 499.0), Quaternion.identity);
}

function SpawnCrow4 () {
		++currentCrows;
		var newCrow = Instantiate (crow, Vector3 (375.57, 200.0, 499.0), Quaternion.identity);
}


function SpawnCrow5 () {
		++currentCrows;
		var newCrow = Instantiate (crow, Vector3 (372.57, 200.0, 499.0), Quaternion.identity);
}


function CrowDecrement (temp : int)
{
	if (temp == 1)
	{
		--currentCrows;
	}
}