const fragmentShader = /*glsl*/ `
  precision lowp float;
  varying vec2 vUv;
  uniform float uTime;


  void main(){
    float radius = length(vUv - 0.5);
    float timestamp = fract(uTime * 0.5) * 0.8;
    float innerRadius[3];
    float outerRadius[3];
    float deltaRadius = 0.15;
    float innerStart = timestamp;
    float outerStart = innerStart + 0.05;

    // 使用 for 循环计算内圆半径和外圆半径
    for (int i = 0; i < 3; i++) {
      innerRadius[i] = innerStart + float(i) * deltaRadius;
      outerRadius[i] = outerStart + float(i) * deltaRadius;
    }

    // 使用 smoothstep 函数来实现颜色渐变
    vec4 color = vec4(0.0, 1.0, 0.5, 1);
    float blend = smoothstep(innerRadius[0], outerRadius[0], radius);
    blend = mix(blend, smoothstep(innerRadius[1], outerRadius[1], radius), step(outerRadius[0], radius));
    blend = mix(blend, smoothstep(innerRadius[2], outerRadius[2], radius), step(outerRadius[1], radius));
    blend = step(radius, outerRadius[2]) * blend;

    // 设置颜色
    gl_FragColor = mix(vec4(0.0, 0.1, 0.1, 0), color, blend);
  }
`

export default fragmentShader
