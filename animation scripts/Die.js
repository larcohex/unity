#pragma strict

var alive : boolean = true;
var deathAnim : Animation;
var spawner : GameObject;
var currentText: UI.Text;
function Start () {
	deathAnim = GetComponent (Animation);
}

function Update () {
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
	currentText = UI.Text.FindObjectOfType (UI.Text);
	currentText.SendMessage ("AddKill", 1, SendMessageOptions.DontRequireReceiver);
	gameObject.SendMessage ("StopAnimation", 1, SendMessageOptions.DontRequireReceiver);
	CancelInvoke();
	deathAnim.Stop ("run");
	deathAnim.Stop ("standBite");
	deathAnim["death"].wrapMode = WrapMode.Once;
	deathAnim.Play ("death");
	spawner = GameObject.FindWithTag ("Spawn");
	spawner.SendMessage ("Decrement", 1, SendMessageOptions.DontRequireReceiver);
	Destroy (gameObject, 2);
}