#pragma strict

var alive : boolean = true;
var spawner : GameObject;
function Start () {

}

function Update () {
	if (gameObject.transform.position.z == 0)
	{
		alive = false;
	}
	if (!alive)
	{
		Die();
	}
}

function Kill (hit : int) {
	if (hit == 1)
	{
		alive = false;
	}
}

function Die() {
	spawner = GameObject.FindWithTag ("Spawn");
	spawner.SendMessage ("CrowDecrement", 1, SendMessageOptions.DontRequireReceiver);
	Destroy (gameObject);
}