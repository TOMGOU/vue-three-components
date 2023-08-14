import * as THREE from 'three'
import output_fragment from './shader/output_fragment.glsl'

const createRoutes = (flypointsArr: number[]) => {
  const v3Arr: THREE.Vector3[] = [];
  flypointsArr.forEach((coord: any) => {
    v3Arr.push(new THREE.Vector3(coord[0], coord[1], 0));
  })
  // 三维样条曲线
  const curve1 = new THREE.CatmullRomCurve3(v3Arr);
  //曲线上等间距返回多个顶点坐标
  const points = curve1.getSpacedPoints(300); //分段数300，返回101个顶点

  // const index = 20; //取点索引位置
  let index = Math.floor((points.length-35)*Math.random()); //取点索引位置随机
  const num = 100; //从曲线上获取点数量
  let points2 = points.slice(index, index + num); //从曲线上获取一段
  const curve2 = new THREE.CatmullRomCurve3(points2);
  const newPoints2 = curve2.getSpacedPoints(300); //获取更多的点数
  const geometry2 = new THREE.BufferGeometry();
  geometry2.setFromPoints(newPoints2);

  // 每个顶点对应一个百分比数据attributes.percent 用于控制点的渲染大小
  const percentArr = []; //attributes.percent的数据
  // 批量计算所有顶点颜色数据
  const colorArr = [];
  const half = Math.floor(newPoints2.length / 2);
  for (let i = 0; i < newPoints2.length; i++) {
      if (i < half) {
          // percentArr.push(i / half);
          percentArr.push(Math.pow(i / half,0.2));
          const color1 = new THREE.Color(0x666600); //轨迹线颜色
          const color2 = new THREE.Color(0xffff00); //更亮
          const color = color1.lerp(color2, i / half)
          colorArr.push(color.r, color.g, color.b);
      } else {
          // percentArr.push(1-(i-half) / half);
          percentArr.push(Math.pow(1-(i-half) / half,0.2));
          const color1 = new THREE.Color(0xffff00); //更亮
          const color2 = new THREE.Color(0x666600); //轨迹线颜色 
          const color = color1.lerp(color2, (i-half) / half)
          colorArr.push(color.r, color.g, color.b);
      }

  }
  const percentAttribue = new THREE.BufferAttribute(new Float32Array(percentArr), 1);
  geometry2.attributes.percent = percentAttribue;
  // 设置几何体顶点颜色数据
  geometry2.attributes.color = new THREE.BufferAttribute(new Float32Array(colorArr), 3);

  // 点模型渲染几何体每个顶点
  const PointsMaterial = new THREE.PointsMaterial({
      // color: 0xffff00,
      size:500.0, //点大小 考虑相机渲染范围设置
      // vertexColors: THREE.VertexColors, //使用顶点颜色渲染
      transparent: true, //开启透明计算
      depthTest: false,
  });
  const flyPoints = new THREE.Points(geometry2, PointsMaterial);

  // 修改点材质的着色器源码(注意：不同版本细节可能会稍微会有区别，不过整体思路是一样的)
  PointsMaterial.onBeforeCompile = function (shader) {
      shader.uniforms.uTime = { value: 0 };
      const clock = new THREE.Clock()
      function animate() {
          const elapsedTime = clock.getElapsedTime()
          shader.uniforms.uTime.value = elapsedTime
          requestAnimationFrame(animate)
      }
      animate()
      // 顶点着色器中声明一个attribute变量:百分比
      shader.vertexShader = shader.vertexShader.replace(
          'void main() {',
          [
              'uniform float uTime;',
              'attribute float percent;', //顶点大小百分比变量，控制点渲染大小
              'void main() {',
          ].join('\n') // .join()把数组元素合成字符串
      );
      // 调整点渲染大小计算方式
      shader.vertexShader = shader.vertexShader.replace(
          'gl_PointSize = size;',
          [
              'gl_PointSize = percent *size;',
          ].join('\n') // .join()把数组元素合成字符串
      );

      shader.fragmentShader = shader.fragmentShader.replace(
          'void main() {',
          [ 
            'uniform float uTime;',
            'void main() {',
          ].join('\n')
        );

      shader.fragmentShader = shader.fragmentShader.replace('#include <output_fragment>', output_fragment);
  };
  // 飞线动画
  const indexMax = points.length - num; //飞线取点索引范围
  function animation() {
      if (index > indexMax) index = 0;
      index += 1
      points2 = points.slice(index, index + num); //从曲线上获取一段
      const curve = new THREE.CatmullRomCurve3(points2);
      const newPoints2 = curve.getSpacedPoints(300); //获取更多的点数
      geometry2.setFromPoints(newPoints2);

      requestAnimationFrame(animation);
      // setTimeout(animation, 30);
  }
  animation();


  return flyPoints
}

export { createRoutes }
