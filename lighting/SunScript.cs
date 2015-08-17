using UnityEngine;
using System.Collections;

public class SunScript : MonoBehaviour {
	public Light sun;
	public float latitude;
	public float longitude;
	public string date;
	public string time;
	private float N;
	private float d;
	private float HRA;
	private float hours;
	private float minutes;
	private float Z;
	private float alt;
	private float az;
	private float maxAlt;
	private float resultColorR;
	private float resultColorG;
	private float resultColorB;
	// Use this for initialization

	float ConvertToRadians (float angle)
	{
		return (Mathf.PI / 180f) * angle;
	}


	float ConvertToDegrees (float angle)
	{
		return (180f / Mathf.PI) * angle;
	}
	void Start () {
		N = (System.DateTime.ParseExact (date, "dd MMMM", System.Globalization.CultureInfo.InvariantCulture)).DayOfYear;
		d = 23.45f * Mathf.Sin (ConvertToRadians (360f / 365f * (284f + N)));
		hours = (System.DateTime.ParseExact (time, "hh:mm tt", System.Globalization.CultureInfo.InvariantCulture)).Hour;
		minutes = (System.DateTime.ParseExact (time, "hh:mm tt", System.Globalization.CultureInfo.InvariantCulture)).Minute;
		HRA = (hours - 12f) * 15f + minutes / 4f;
		Z = Mathf.Acos (Mathf.Sin (ConvertToRadians (latitude)) * Mathf.Sin (ConvertToRadians (d)) + Mathf.Cos (ConvertToRadians (latitude)) * Mathf.Cos (ConvertToRadians (d)) * Mathf.Cos (ConvertToRadians (HRA)));
		alt = 90f - ConvertToDegrees (Z);
		az = ConvertToDegrees (Mathf.Acos ((Mathf.Cos (Z) * Mathf.Sin (ConvertToRadians (latitude)) - Mathf.Sin (ConvertToRadians (d))) / (Mathf.Sin (Z) * Mathf.Cos (ConvertToRadians (latitude)))));
		if (HRA >= 0) {
			az = (540 - az) % 360;
		}
		else {
			az = (180 + az) % 360;
		}
		sun.transform.Rotate (alt, az, 0);
		maxAlt = 90f - ConvertToDegrees (Z);
		resultColorR = ((alt * (192f - 254f)) / maxAlt + 254f) / 255f;
		resultColorG = ((alt * (191f - 126f)) / maxAlt + 126f) / 255f;
		resultColorB = ((alt * (173f - 91f)) / maxAlt + 91f) / 255f;
		hours = 12;
		minutes = 0;
		HRA = (hours - 12f) * 15f + minutes / 4f;
		Z = Mathf.Acos (Mathf.Sin (ConvertToRadians (latitude)) * Mathf.Sin (ConvertToRadians (d)) + Mathf.Cos (ConvertToRadians (latitude)) * Mathf.Cos (ConvertToRadians (d)) * Mathf.Cos (ConvertToRadians (HRA)));
		maxAlt = 90f - ConvertToDegrees (Z);
		sun.color = new Color (resultColorR, resultColorG, resultColorB);
	}
	
	// Update is called once per frame
	void Update () {
	
	}
}
