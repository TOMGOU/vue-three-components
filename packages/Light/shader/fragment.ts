const fragmentShader = /*glsl*/ `
  // precision lowp float;
  // varying vec2 vUv;
  // varying float vElevation;

  // uniform sampler2D uTexture; 

  // void main(){
  //     float height = vElevation + 1.0;
  //     vec4 textureColor = texture2D(uTexture, vUv);
  //     gl_FragColor = textureColor;
  // }

  precision highp float;
  uniform float uTime;
  varying vec2 vUv;

  void main(){
    vec3 c;
    float l,z=uTime;
    for(int i=0;i<3;i++) {
      vec2 uv,p=vUv;
      uv=vUv;
      p-=.5;
      p.x*=vUv.x/vUv.y;
      z+=.07;
      l=length(p);
      uv+=p/l*(sin(z)+1.)*abs(sin(l*9.-z-z));
      c[i]=.01/length(mod(uv,1.)-.5);
    }
    gl_FragColor=vec4(c/l,uTime);
  }
`

export default fragmentShader
