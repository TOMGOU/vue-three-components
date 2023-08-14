import * as THREE from 'three'
import vertexShader from './shader/vertex'
import fragmentShader from './shader/fragment'

const createNoise = (uLowColor: string, uHighColor: string) => {
  const params = {
    uWaresFrequency: 14,
    uScale: 0.03,
    uXzScale: 1.5,
    uNoiseFrequency: 10,
    uNoiseScale: 1.5,
    uLowColor: uLowColor || "#ff0000",
    uHighColor: uHighColor || "#ffff00",
    uXspeed: 1,
    uZspeed: 1,
    uNoiseSpeed: 1,
    uOpacity: 1,
    uTime: 0,
  };
  
  const material = new THREE.ShaderMaterial({
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
    side: THREE.DoubleSide,
    uniforms: {
      uWaresFrequency: {
        value: params.uWaresFrequency,
      },
      uScale: {
        value: params.uScale,
      },
      uNoiseFrequency: {
        value: params.uNoiseFrequency,
      },
      uNoiseScale: {
        value: params.uNoiseScale,
      },
      uXzScale: {
        value: params.uXzScale,
      },
      uTime: {
        value: params.uTime,
      },
      uLowColor: {
        value: new THREE.Color(params.uLowColor),
      },
      uHighColor: {
        value: new THREE.Color(params.uHighColor),
      },
      uXspeed: {
        value: params.uXspeed,
      },
      uZspeed: {
        value: params.uZspeed,
      },
      uNoiseSpeed: {
        value: params.uNoiseSpeed,
      },
      uOpacity: {
        value: params.uOpacity,
      },
    },
    transparent: true,
  });
  const geometry = new THREE.PlaneGeometry(3, 2, 1024, 1024);
  // const material = new THREE.ShaderMaterial({
  //   vertexShader,
  //   fragmentShader,
  //   uniforms: {
  //     // 动画时间
  //     uTime: {
  //       value: 0
  //     }
  //   },
  //   side: THREE.DoubleSide,
  //   transparent: true,
  //   depthTest: true,
  //   depthWrite: true,
  //   // depthFunc: THREE.LessEqualDepth,
  //   // alphaTest: 0.2
  //   // blending: THREE.CustomBlending,
  //   // blendSrc: THREE.SrcAlphaFactor,
  //   // blendDst: THREE.OneMinusSrcAlphaFactor
  // })
  const mesh = new THREE.Mesh(geometry, material) //网格模型对象Mesh
  mesh.name = 'noise'

  const clock = new THREE.Clock()
  function animate() {
    const elapsedTime = clock.getElapsedTime()
    material.uniforms.uTime.value = elapsedTime
    requestAnimationFrame(animate)
  }

  animate()

  return mesh
}

export { createNoise }
