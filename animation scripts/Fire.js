#pragma strict

public var impulse = 300;
public var speed = 1;
public var bullet : GameObject;
public var lastShot : float;

function Start () {
	lastShot = 0;
}

function Update () {
	if (Input.GetKey (KeyCode.Mouse0))
	{
		if (Time.time > (lastShot + speed))
		{
			var newBullet : GameObject;
			newBullet = Instantiate (bullet, transform.position, transform.rotation);
			transform.TransformDirection (Vector3 (0, 0, speed));
			Physics.IgnoreCollision (newBullet.collider, collider);
			newBullet.rigidbody.AddForce (transform.forward * impulse, ForceMode.Impulse);
			lastShot = Time.time;
			Destroy (newBullet.gameObject, 3);
		}
	}
}