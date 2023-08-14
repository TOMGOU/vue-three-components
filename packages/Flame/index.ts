import * as THREE from 'three'
import imgSrc from './texture/flame.png'

interface Stoppable {
  stop(): void;
}

class CustomGroup extends THREE.Group implements Stoppable {
  timer: number;

  constructor(timer: number) {
    super();
    this.timer = timer;
  }

  stop() {
    window.cancelAnimationFrame(this.timer);
  }
}

const createFlame = (w: number = 250) => {
  const h = 1.6 * w
  const geometry = new THREE.PlaneGeometry(w, h)
  geometry.translate(0, h / 2, 0)

  const textureLoader = new THREE.TextureLoader()
  // const texture = textureLoader.load('./texture/flame.png')
  const texture = textureLoader.load(imgSrc)
  const num = 15
  let t = 0
  let timer: number = -1
  texture.repeat.set(1 / num, 1)
  const material = new THREE.MeshBasicMaterial({
    map: texture,
    transparent: true,
    opacity: 0.4, //整体调节透明度 和三维场景相融合
    side: THREE.DoubleSide, //双面可见
    depthWrite: false, //是否对深度缓冲区有任何的影响
  })
  const mesh = new THREE.Mesh(geometry, material)
  const flame = new CustomGroup(timer);
  flame.add(mesh, mesh.clone().rotateY(Math.PI / 2), mesh.clone().rotateY(Math.PI / 4), mesh.clone().rotateY(Math.PI / 4 * 3))

  // 火焰动画生成
  const UpdateLoop = () => {
    t += 0.1
    if (t > num) t = 0
    texture.offset.x = Math.floor(t) / num
    timer = window.requestAnimationFrame(UpdateLoop)
  }

  UpdateLoop()

  return flame
}

export { createFlame }
