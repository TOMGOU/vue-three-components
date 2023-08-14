<template>
  <div id="Signal"></div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUpdate, watch, onBeforeMount } from 'vue';
import * as THREE from 'three'
import {
  scene,
  renderer,
  camera,
  ambientLight,
  hemisphereLight,
  dirLight,
  dirLight1,
  dirLight2,
  spotLight
} from '../basic/three'
// import { controls } from '../basic/controls'
import { createSignalMesh } from '../../../../packages/index'

const props = defineProps({
  size: {
    type: Number,
    default: 20,
    required: false
  },
  color: {
    type: String,
    default: '#22ffcc',
    required: false
  }
})

let timer: any = null

onBeforeMount(() => {
  if (timer) cancelAnimationFrame(timer)
  scene.remove.apply(scene, scene.children)
})

onMounted(() => {
  // 添加光源
  scene.add(ambientLight)
  scene.add(hemisphereLight)
  scene.add(dirLight)
  scene.add(dirLight1)
  scene.add(dirLight2)
  scene.add(spotLight)

  // 重置相机缩放比例
  camera.zoom = 1;

  // 添加棱锥网格
  const SignalMesh = createSignalMesh(props.size, props.color)
  SignalMesh.position.z = 0
  SignalMesh.position.y = 300
  // SignalMesh.rotateX(-Math.PI / 4)
  scene.add( SignalMesh );

  // const axesHelper = new THREE.AxesHelper(5000);
  // scene.add(axesHelper);

  const SignalElement = document.getElementById('Signal')
  if (SignalElement) SignalElement.appendChild(renderer.domElement)
  const render = () => {
    renderer.render(scene, camera)
    camera.updateProjectionMatrix()
    // controls.update()
    timer = requestAnimationFrame(render)
  }

  render()
})

onBeforeUpdate(() => {
  console.log('onBeforeUpdate')
  renderer.clear()
  scene.remove.apply(scene, scene.children)
  scene.remove.apply(scene, scene.children)
  renderer.forceContextLoss()
  cancelAnimationFrame(timer)
  const gl = renderer.domElement.getContext('webgl')
  gl && gl.getExtension('WEBGL_lose_context')?.loseContext()
})
</script>