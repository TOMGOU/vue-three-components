import * as THREE from 'three'
import imgSrc from './texture/circle.png'

const createWaveMesh = (size: number = 20, color: string = '#15de1d') => {
  const geometry = new THREE.PlaneGeometry(size, size)
  const textureLoader = new THREE.TextureLoader()
  const material = new THREE.MeshStandardMaterial({
    color: new THREE.Color(color), //设置光圈颜色
    // map: textureLoader.load('/circle.png'),
    map: textureLoader.load(imgSrc),
    transparent: true,
    opacity: 1,
    side: THREE.DoubleSide,
    emissive: new THREE.Color(color),
    // depthTest: false,
    depthTest: true,
    depthWrite: true,
    alphaTest: 0.2
  })
  const mesh = new THREE.Mesh(geometry, material) //网格模型对象Mesh
  mesh.name = 'circle-wave'
  // 波动动画
  const S = 20 //波动范围倍数设置
  let _s = 1.0
  const waveAnimation = () => {
    _s += 0.4
    mesh.scale.set(_s, _s, _s)
    if (_s <= S * 0.2) {
      material.opacity = (_s - 1) / (S * 0.2 - 1) // 保证透明度在0~1之间变化
    } else if (_s > S * 0.2 && _s <= S) {
      material.opacity = 1 - (_s - S * 0.2) / (S - S * 0.2) // 保证透明度在0~1之间变化
    } else {
      _s = 1.0
    }
    requestAnimationFrame(waveAnimation)
  }
  waveAnimation()

  return mesh
}

export { createWaveMesh }
