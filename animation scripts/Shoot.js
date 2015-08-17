#pragma strict

var shootParticle : Transform;
function Update () {
	var hit : RaycastHit;
	var ray : Ray = Camera.main.ScreenPointToRay (Vector3 (Screen.width * 0.5, Screen.height * 0.5, 0));
	if (Input.GetKey (KeyCode.Mouse0))
	{
		if (Physics.Raycast (ray, hit, 1000))
		{
			if (hit.rigidbody)
			{
				hit.rigidbody.AddForceAtPosition (2000000 * transform.forward, hit.point);
			}
			var newParticle = Instantiate (shootParticle, hit.point, Quaternion.LookRotation (hit.normal));
			Destroy (newParticle.gameObject, 2);
			hit.transform.SendMessage ("Kill", 1, SendMessageOptions.DontRequireReceiver);
			var counterText : UI.Text = GetComponentInParent (UI.Text);
			Debug.Log (counterText);
		}
	}
}