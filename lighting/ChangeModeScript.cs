using UnityEngine;
using System.Collections;

public class ChangeModeScript : MonoBehaviour {
	private bool st;
	private GameObject switch1, switch2, switch3;
	private Light sun;
	public void ChangeMode() {
		if (st) {
			st = false;
			switch1.SetActive (st);
			switch2.SetActive (st);
			switch3.SetActive (st);
			sun.enabled = !st;
		}
		else {
			st = true;
			Light [] lights = FindObjectsOfType (typeof(Light)) as Light[];
			foreach (Light light in lights)
			{
				if (light.name == "Sun")
				{
					light.enabled = !st;
					Debug.Log (light);
				}
			}
			switch1.SetActive (st);
			switch2.SetActive (st);
			switch3.SetActive (st);
			sun.enabled = !st;
		}
	}
	// Use this for initialization
	void Start () {
		st = true;
		switch1 = GameObject.Find ("Switch1");
		switch2 = GameObject.Find ("Switch2");
		switch3 = GameObject.Find ("Switch3");
		Light [] lights = FindObjectsOfType (typeof(Light)) as Light[];
		foreach (Light light in lights)
		{
			if (light.name == "Sun")
			{
				sun = light;
				Debug.Log (light);
			}
		}
		sun.enabled = false;
	}
	
	// Update is called once per frame
	void Update () {
	
	}
}
