import * as THREE from 'three'
import vertexShader from './shader/vertex'
import fragmentShader from './shader/fragment'

const createGrass = (width = 8.5, height = 4.2) => {
  const rawShaderMaterial = new THREE.RawShaderMaterial({
    // color: 0x00ff00,
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
    side: THREE.DoubleSide,
  })

  const ripper: THREE.Mesh = new THREE.Mesh(new THREE.PlaneGeometry(width, height, 64, 64), rawShaderMaterial)

  return ripper
}

export { createGrass }
