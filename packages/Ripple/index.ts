import * as THREE from 'three'
import vertexShader from './shader/vertex'
import fragmentShader from './shader/fragment'

const createRipple = (url = '/sign-in_bg.png', width = 8.5, height = 4.2) => {
  const textureLoader = new THREE.TextureLoader()
  const texture = textureLoader.load(url)

  const rawShaderMaterial = new THREE.RawShaderMaterial({
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
    side: THREE.DoubleSide,
    uniforms: {
      uTime: {
        value: 0
      },
      uTexture: {
        value: texture
      }
    }
  })

  const clock = new THREE.Clock()
  function animate() {
    const elapsedTime = clock.getElapsedTime()
    rawShaderMaterial.uniforms.uTime.value = elapsedTime
    requestAnimationFrame(animate)
  }

  animate()

  const ripper = new THREE.Mesh(new THREE.PlaneGeometry(width, height, 64, 64), rawShaderMaterial)

  return ripper
}

export { createRipple }
