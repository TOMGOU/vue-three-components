<template>
  <div id="FlowingLine"></div>
</template>

<script setup lang="ts">
import * as THREE from 'three'
import { onMounted, onBeforeUpdate, onBeforeMount } from 'vue';
import { scene, renderer, camera } from '../basic/three'
// import { controls } from '../basic/controls'
import { createFlowingLine } from '../../../../packages/index'

// const props = defineProps({
//   size: {
//     type: Number,
//     default: 20,
//     required: false
//   },
//   color: {
//     type: String,
//     default: '#15de1d',
//     required: false
//   }
// })

let timer: any = null

onBeforeMount(() => {
  if (timer) cancelAnimationFrame(timer)
  scene.remove.apply(scene, scene.children)
})

onMounted(() => {
  camera.zoom = 1;
  const curve = new THREE.CatmullRomCurve3(
    [
      new THREE.Vector3(0, 200, 0),
      new THREE.Vector3(0, -100, 0),
      new THREE.Vector3(0, -200, 0),
      new THREE.Vector3(50, -280, 0),
      new THREE.Vector3(70, -280, 0),
      new THREE.Vector3(300, -250, 0),
      new THREE.Vector3(570, -240, 0),
      new THREE.Vector3(-570, 300, 0),
      new THREE.Vector3(-300, 300, 0)
    ],
    true,
    'chordal',
    1.0
  )
  const FlowingLine = createFlowingLine(curve)
  scene.add( FlowingLine );

  const FlowingLineElement = document.getElementById('FlowingLine')
  if (FlowingLineElement) FlowingLineElement.appendChild(renderer.domElement)
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