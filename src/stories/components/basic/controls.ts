import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { renderer, camera } from './three'

// 创建控件对象
const controls = new OrbitControls(camera, renderer.domElement)
controls.enableDamping = true
controls.dampingFactor = 0.1
controls.rotateSpeed = 1.5
controls.zoomSpeed = 1.5
controls.panSpeed = 1.5
// controls.autoRotate = true
controls.autoRotateSpeed = 2
controls.enableZoom = true

controls.screenSpacePanning = false

controls.minDistance = 1
controls.maxDistance = 100000
// controls.minZoom = 0.1
// controls.maxZoom = 1
controls.maxPolarAngle = Math.PI / 2
controls.minPolarAngle = 0
// 修改鼠标事件
controls.mouseButtons = {
  LEFT: THREE.MOUSE.PAN,
  MIDDLE: THREE.MOUSE.DOLLY,
  RIGHT: THREE.MOUSE.ROTATE
}

controls.saveState()

export { controls }
