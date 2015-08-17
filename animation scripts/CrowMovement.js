#pragma strict
var moveSpeed = 9.0;
var damping = 6.0;
var moveDirection : Vector3 = Vector3.zero;
var controller : CharacterController;
function Start () {
	
}

function Update () {
	moveDirection.z = -1 * moveSpeed;
	controller.Move (moveDirection * Time.deltaTime);
}