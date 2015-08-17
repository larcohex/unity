using UnityEngine;
using System.Collections;

public class Switch3Script : MonoBehaviour {
	private string on;
	
	void OnMouseDown () {
		if (on == "0") {
			on = "1";
			string switch1 = GameObject.Find ("Switch1").GetComponent<Switch1Script>().getState();
			string switch2 = GameObject.Find ("Switch2").GetComponent<Switch2Script>().getState();
			LightmapData[] lightmapData = new LightmapData[3];
			for(int i = 0 ; i < 3 ; i++ )
			{
				lightmapData[i] = new LightmapData();
			}
			for( int i = 0 ; i < 3 ; i++ )
			{
				lightmapData[i].lightmapFar = Resources.Load( "lightmap" + switch1 + switch2 + on + "/LightmapFar-" + i.ToString(), typeof(Texture2D)) as Texture2D;
				lightmapData[i].lightmapNear = Resources.Load("lightmap" + switch1 + switch2 + on + "/LightmapNear-" + i.ToString(), typeof(Texture2D)) as Texture2D;
				Debug.Log (lightmapData[i].lightmapFar);
				Debug.Log (lightmapData[i].lightmapNear);
			}
			LightmapSettings.lightmaps = lightmapData;
		}
		else {
			on = "0";
			string switch1 = GameObject.Find ("Switch1").GetComponent<Switch1Script>().getState();
			string switch2 = GameObject.Find ("Switch2").GetComponent<Switch2Script>().getState();
			LightmapData[] lightmapData = new LightmapData[3];
			for(int i = 0 ; i < 3 ; i++ )
			{
				lightmapData[i] = new LightmapData();
			}
			for( int i = 0 ; i < 3 ; i++ )
			{
				lightmapData[i].lightmapFar = Resources.Load( "lightmap" + switch1 + switch2 + on + "/LightmapFar-" + i.ToString(), typeof(Texture2D)) as Texture2D;
				lightmapData[i].lightmapNear = Resources.Load("lightmap" + switch1 + switch2 + on + "/LightmapNear-" + i.ToString(), typeof(Texture2D)) as Texture2D;
				Debug.Log (lightmapData[i].lightmapFar);
				Debug.Log (lightmapData[i].lightmapNear);
			}
			LightmapSettings.lightmaps = lightmapData;
		}
	}
	
	public string getState() {
		return on;
	}
	// Use this for initialization
	void Start () {
		on = "1";
	}
	
	// Update is called once per frame
	void Update () {
		
	}
}
