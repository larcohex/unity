#pragma strict

var counterText : UI.Text;
var counter : int = 0;
var locking : boolean = false;
function Update () {
	InvokeRepeating ("unlock", 0.1, 3);
	counterText = GetComponent (UI.Text);
	counterText.text = "Wolves Killed: " + counter;
}

function AddKill (temp : int)
{
	if (temp == 1 && !locking)
	{
		increment();
		locking = true;
		return;
	}
}

function increment()
{
	counter += 1;
}

function unlock()
{
	locking = false;
}