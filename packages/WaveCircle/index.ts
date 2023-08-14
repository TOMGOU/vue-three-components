import * as THREE from 'three'
import vertexShader from './shader/vertex'
import fragmentShader from './shader/fragment'

const createWaveCircle = (size: number = 20) => {
  const geometry = new THREE.CircleGeometry(size * 10, 64) //默认在XOY平面上
  const material = new THREE.ShaderMaterial({
    vertexShader,
    fragmentShader,
    uniforms: {
      // 动画时间
      uTime: {
        value: 0
      }
    },
    side: THREE.DoubleSide,
    transparent: true,
    depthTest: true,
    depthWrite: true,
    // depthFunc: THREE.LessEqualDepth,
    // alphaTest: 0.2
    // blending: THREE.CustomBlending,
    // blendSrc: THREE.SrcAlphaFactor,
    // blendDst: THREE.OneMinusSrcAlphaFactor
  })
  const mesh = new THREE.Mesh(geometry, material) //网格模型对象Mesh
  mesh.name = 'circle-wave'

  const clock = new THREE.Clock()
  function animate() {
    const elapsedTime = clock.getElapsedTime()
    material.uniforms.uTime.value = elapsedTime
    requestAnimationFrame(animate)
  }

  animate()

  return mesh
}

export { createWaveCircle }
