<template>
  <div id="Flame"></div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUpdate, watch, onBeforeMount } from 'vue';
import * as THREE from 'three'
import { scene, renderer, camera } from '../basic/three'
// import { controls } from '../basic/controls'
import { createFlame } from '../../../../packages/index'

const props = defineProps({
  size: {
    type: Number,
    default: 250,
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
  const FlameMesh = createFlame(props.size)
  FlameMesh.position.z = 0
  FlameMesh.rotateX(-Math.PI / 4)
  scene.add( FlameMesh );
  const axesHelper = new THREE.AxesHelper(5000);
  // scene.add(axesHelper);
  const FlameElement = document.getElementById('Flame')
  if (FlameElement) FlameElement.appendChild(renderer.domElement)
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