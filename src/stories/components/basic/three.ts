import * as THREE from 'three'
import { ref } from 'vue'

const zoom = ref(1)

const scene = new THREE.Scene()

/**
 * 光源设置
 */
const ambientLight = new THREE.AmbientLight(0x080808)
// scene.add(ambientLight)
const hemisphereLight = new THREE.HemisphereLight(0xb0b0b0, 0x474747, 0.81)
hemisphereLight.position.set(0, 0, 0)
// scene.add(hemisphereLight)
const dirLight = new THREE.DirectionalLight(0xadacac, 0.66)
dirLight.name = 'dirLight'
dirLight.position.set(3000, 1000, 2000)
const dirLight1 = new THREE.DirectionalLight(0xadacac, 0.66)
dirLight1.name = 'dirLight1'
dirLight1.position.set(-7000, 1000, 4000)
const dirLight2 = new THREE.DirectionalLight(0xadacac, 0.2)
dirLight2.name = 'dirLight2'
dirLight2.position.set(0, 3000, -500)
// scene.add(dirLight)
// scene.add(dirLight1)
// scene.add(dirLight2)
const spotLight = new THREE.SpotLight(0xcacaca, 1)
spotLight.position.set(-2500, 2000, -3500)
spotLight.angle = 0.43
spotLight.penumbra = 0.1
spotLight.decay = 2
spotLight.distance = 100
spotLight.castShadow = true
spotLight.shadow.mapSize.width = 512
spotLight.shadow.mapSize.height = 512
spotLight.shadow.camera.near = 10
spotLight.shadow.camera.far = 200
spotLight.shadow.focus = 1
// scene.add(spotLight)

/**
 * 相机设置
 */
const width = 900
const height = 600
const k = width / height
const s = 500
// 创建相机对象
const camera1 = new THREE.OrthographicCamera(-s * k, s * k, s, -s, 1, 40000)
camera1.position.set(100, 100, 1800)
camera1.lookAt(scene.position)
zoom.value = camera1.zoom

const camera2 = new THREE.OrthographicCamera(-s * k, s * k, s, -s, 1, 1000)
camera2.position.set(0, 0, 0)

// const camera2 = new THREE.PerspectiveCamera(30, width / height,1, 200000);
// const x = 12955314;
// const y = 4851434.5;
// camera2.position.set(12955889, 4793191, 41034);
// camera2.lookAt(x,y,0);

class CameraModule {
  public camera: any
  private collection: any
  constructor() {
    this.camera = camera1
    this.collection = {
      default: camera1,
      first: camera2
    }
  }
  add(name: string, camera: any) {
    this.collection[name] = camera
  }
  setActive(name: string) {
    this.camera = this.collection[name]
  }
}

const cameraModule = new CameraModule()

const camera = cameraModule.camera

/**
 * 创建渲染器对象
 */
const renderer = new THREE.WebGLRenderer({
  antialias: true,
  logarithmicDepthBuffer: true
})
renderer.setSize(width, height)
renderer.setClearColor(0x001111, 1)
// renderer.outputEncoding = THREE.sRGBEncoding
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.setPixelRatio(window.devicePixelRatio)
renderer.sortObjects = true

export {
  scene,
  renderer,
  cameraModule,
  camera,
  zoom,
  ambientLight,
  hemisphereLight,
  dirLight,
  dirLight1,
  dirLight2,
  spotLight
}
