#pragma strict

var distance : float;
var player : GameObject;
var lookAtDistance = 25.0;
var attackRange = 3.0;
var moveSpeed = 9.0;
var damping = 6.0;
var anim : Animation;
var controller : CharacterController;
var gravity = 80.0;
private var moveDirection : Vector3 = Vector3.zero;
var dead : boolean = false;

function Start() {
	anim = GetComponent (Animation);
}

function Update () {
	if (!dead)
	{
		player = GameObject.FindWithTag ("PlayerTag");
		distance = Vector3.Distance (player.transform.position, transform.position);
		var rotation = Quaternion.LookRotation (player.transform.position - transform.position);
		transform.rotation = Quaternion.Slerp (transform.rotation, rotation, Time.deltaTime * damping);
		wait();
		if (distance < attackRange)
		{
			CancelInvoke();
			InvokeRepeating ("bite", 0.01, 2);
		}
		else
		{
			CancelInvoke();
			InvokeRepeating ("run", 0.01, 2);
			moveDirection = transform.forward;
			moveDirection *= moveSpeed;
			moveDirection.y -= gravity * Time.deltaTime;
			controller.Move (moveDirection * Time.deltaTime);
		}
	}
}

function run()
{
	anim.Play ("run");
}

function bite()
{
	anim.Play ("standBite");
}

function StopAnimation (temp : int)
{
	dead = true;
	CancelInvoke();
}

function wait()
{
	yield WaitForSeconds (2);
}