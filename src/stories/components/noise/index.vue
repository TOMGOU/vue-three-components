<template>
  <div id="noise"></div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUpdate, watch, onBeforeMount } from 'vue';
import * as THREE from 'three'
import { scene, renderer, camera } from '../basic/three'
import { controls } from '../basic/controls'
import { createNoise } from '../../../../packages/index'

const props = defineProps({
  uLowColor: {
    type: String,
    default: '#ff0000',
    required: false
  },
  uHighColor: {
    type: String,
    default: '#ffff00',
    required: false
  }
})

let timer: any = null

onBeforeMount(() => {
  if (timer) cancelAnimationFrame(timer)
  scene.remove.apply(scene, scene.children)
})

onMounted(() => {
  const NoiseMesh = createNoise(props.uLowColor, props.uHighColor)
  // NoiseMesh.rotateX(1.7)
  camera.zoom = 1000;
  // camera.updateProjectionMatrix();
  scene.add( NoiseMesh );
  const axesHelper = new THREE.AxesHelper(1000);
  // scene.add(axesHelper);
  const NoiseElement = document.getElementById('noise')
  if (NoiseElement) NoiseElement.appendChild(renderer.domElement)
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