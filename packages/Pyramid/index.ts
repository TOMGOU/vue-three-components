import * as THREE from 'three'
import { createWaveMesh } from '../Wave/index'

const createPyramidMesh = (size: number = 60, color: string = '#22ffcc') => {
  const height = size * 4
  const geometry = new THREE.ConeGeometry(size, height, 4)
  geometry.rotateX(-Math.PI / 2)
  geometry.translate(0, 0, height / 2)
  const material = new THREE.MeshLambertMaterial({
    color: new THREE.Color(color),
  });
  const mesh = new THREE.Mesh(geometry, material)

  const mesh2 = mesh.clone()
  mesh2.scale.z = 0.5
  mesh2.position.z = height * (1 + mesh2.scale.z)
  mesh2.rotateX(Math.PI)
  mesh.add(mesh2)

  const animation = () => {
    mesh.rotateZ(0.05)
    material.needsUpdate = true
    requestAnimationFrame(animation)
  }
  animation()

  const WaveMesh =  createWaveMesh(size, color)
  WaveMesh.position.z = height
  mesh.add(WaveMesh)

  return mesh
}

export { createPyramidMesh }
