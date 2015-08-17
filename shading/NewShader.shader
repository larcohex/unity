Shader "Custom/NewShader" {
	Properties
	{
		_ColorTint ("Color Tint", Color) = (1, 1, 1, 1)
		_DiffMap ("Diffuse Map", 2D) = "white"{}
		_SpecColor ("Specular Color", Color) = (1, 1, 1, 1)
		_Shininess ("Shininess", Range (0, 2)) = 0.5
		_NormMap ("Normal Map", 2D) = "bump"{}
		_DispMap ("Displacement Map", 2D) = "gray"{}
		_Displacement ("Displacement", Range (0, 1)) = 0.3
	}
	SubShader
	{
		Tags { "RenderType"="Opaque" }
		LOD 300
		CGPROGRAM
		#pragma surface surf BlinnPhong vertex:disp nolightmap
		#pragma target 3.0
		
		float4 _ColorTint;
		sampler2D _DiffMap;
		sampler2D _NormMap;
		sampler2D _DispMap;
		float _Shininess;
		float _Displacement;
		
		
	 	struct appdata {
            float4 vertex : POSITION;
            float4 tangent : TANGENT;
            float3 normal : NORMAL;
            float2 texcoord : TEXCOORD0;
        };

        void disp (inout appdata v)
        {
            float d = tex2Dlod(_DispMap, float4(v.texcoord.xy,0,0)).r * _Displacement;
            v.vertex.xyz += v.normal * d;
        }
		
		struct Input
		{
			float4 color : COLOR;
			float2 uv_DiffMap;
			float2 uv_NormMap;
		};

		void surf (Input IN, inout SurfaceOutput o)
		{
			IN.color = _ColorTint;
			o.Albedo = tex2D(_DiffMap, IN.uv_DiffMap).rgb * IN.color;
			o.Specular = _Shininess;
			o.Gloss = tex2D(_DiffMap, IN.uv_DiffMap).a;
			o.Normal = UnpackNormal(tex2D(_NormMap, IN.uv_NormMap));
		}
		ENDCG
	} 
	FallBack "Diffuse"
}
