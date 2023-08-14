<template>
  <div id="Light"></div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUpdate, ref, onBeforeMount } from 'vue';
import * as THREE from 'three'
// import { controls } from '../basic/controls'
import { scene, renderer, camera } from '../basic/three'
import { createLight } from '../../../../packages/index'

const props = defineProps({
  width: {
    type: Number,
    default: 20,
    required: false
  },
  height: {
    type: Number,
    default: 20,
    required: false
  },
})

let timer: any = null

onBeforeMount(() => {
  if (timer) cancelAnimationFrame(timer)
  scene.remove.apply(scene, scene.children)
})

onMounted(() => {
  camera.zoom = 1;
  const Light = createLight(props.width, props.height)
  scene.add( Light );

  const axesHelper = new THREE.AxesHelper(5000);
  // scene.add(axesHelper);

  const WaveElement = document.getElementById('Light')
  if (WaveElement) WaveElement.appendChild(renderer.domElement)
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