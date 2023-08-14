<template>
  <div id="Wave"></div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUpdate, watch, onBeforeMount } from 'vue';
import * as THREE from 'three'
import { scene, renderer, camera } from '../basic/three'
// import { controls } from '../basic/controls'
import { createWaveMesh } from '../../../../packages/index'

const props = defineProps({
  size: {
    type: Number,
    default: 20,
    required: false
  },
  color: {
    type: String,
    default: '#15de1d',
    required: false
  }
})

let timer: any = null

onBeforeMount(() => {
  if (timer) cancelAnimationFrame(timer)
  scene.remove.apply(scene, scene.children)
})

onMounted(() => {
  camera.zoom = 1;
  const WaveMesh = createWaveMesh(props.size, props.color)
  WaveMesh.position.z = 0
  WaveMesh.rotateX(-Math.PI / 4)
  scene.add( WaveMesh );
  const axesHelper = new THREE.AxesHelper(5000);
  // scene.add(axesHelper);
  const WaveElement = document.getElementById('Wave')
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