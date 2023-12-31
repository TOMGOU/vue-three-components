export default /* glsl */`
  #ifdef OPAQUE
    diffuseColor.a = 1.0;
  #endif

  // https://github.com/mrdoob/three.js/pull/22425
  #ifdef USE_TRANSMISSION
    diffuseColor.a *= transmissionAlpha + 0.1;
  #endif

  // 设置透明度变化
  float r = distance(gl_PointCoord, vec2(0.5, 0.5));
  // diffuseColor.a = diffuseColor.a*(1.0 - r/0.5);//透明度线性变化
  diffuseColor.a = diffuseColor.a*pow( 1.0 - r/0.5, 1. );//透明度非线性变化  参数2越大，gl_PointSize要更大，可以直接设置着色器代码，可以设置材质size属性
  // gl_FragColor = vec4( outgoingLight * vec3(step(-sin(uTime), 0.), step(sin(uTime), 0.), 1.), diffuseColor.a );
  gl_FragColor = vec4( vec3(abs(cos(uTime * .3)), fract(uTime * .3), 1.), diffuseColor.a );
`;
