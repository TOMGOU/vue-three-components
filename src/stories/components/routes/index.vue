<template>
  <div id="Routes"></div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUpdate, watch, onBeforeMount } from 'vue';
import * as THREE from 'three'
// import { scene, renderer, camera, cameraModule } from '../basic/three'
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
import { controls } from '../basic/controls'
import { createRoutes } from '../../../../packages/index'
import { lon2xy } from './math';

const props = defineProps({
  size: {
    type: Number,
    default: 250,
    required: false
  },
})

const createLine = (pointsArr: any[]) => {
  const geometry = new THREE.BufferGeometry(); //创建一个Buffer类型几何体对象
  //类型数组创建顶点数据
  const vertices = new Float32Array(pointsArr);
  // // 创建属性缓冲区对象
  // const attribue = new THREE.BufferAttribute(vertices, 3); //3个为一组，表示一个顶点的xyz坐标
  // // 设置几何体attributes属性的位置属性
  // geometry.attributes.position = attribue;
  geometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
  // 线条渲染几何体顶点数据
  const material = new THREE.LineBasicMaterial({
      color: 0x666600, //线条颜色
      linewidth: 10,
      // linecap: 'square'
  }); //材质对象
  const line = new THREE.Line(geometry, material); //线条模型对象
  return line;
}

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

  camera.zoom = 1;
  const lineGroup = new THREE.Group(); //声明一个组对象
  const loader = new THREE.FileLoader();
  loader.setResponseType('json')
  //轨迹线数据解析W
  loader.load('/data/subway.json', (data: any) => {

    data.geometries.forEach((obj: any) => {
      const pointsArr: number[] = [];
      const flypointsArr: any[] = [];
      obj.coordinates.forEach((coord: any) => {
        // const xy = lon2xy(coord[0], coord[1]);//经纬度转墨卡托
        const xy = lon2xy(coord[0] - 0.0128, coord[1] - 0.0075); //建筑物和地铁经纬度数据来源不同，适当偏移
        pointsArr.push(xy.x, xy.y, 0);
        flypointsArr.push([xy.x, xy.y]);
      })
      const line = createLine(pointsArr); //创建一条轨迹线

      lineGroup.add(line);
      const flyPoints = createRoutes(flypointsArr); //创建一条流线
      lineGroup.add(flyPoints);
    })

  });

  // const RoutesLine = createRoutes([])
  // RoutesLine.position.z = 0
  // RoutesLine.rotateX(-Math.PI / 4)
  scene.add( lineGroup );
  // const x = 12955314;
  // const y = 4851434.5;
  // axesHelper.position.set(x, y, 0);
  const axesHelper = new THREE.AxesHelper(5000);
  scene.add(axesHelper);
  const RoutesElement = document.getElementById('Routes')
  if (RoutesElement) RoutesElement.appendChild(renderer.domElement)
  const render = () => {
    renderer.render(scene, camera)
    camera.updateProjectionMatrix()
    controls.update()
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