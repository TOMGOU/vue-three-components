import * as THREE from 'three'
const createFlowingLine = (curve: any) => {
  //曲线上等间距返回多个顶点坐标
  const points = curve.getSpacedPoints(100)

  let index = 20 //取点索引位置
  const num = 15 //从曲线上获取点数量
  let points2 = points.slice(index, index + num) //从曲线上获取一段
  const newPoints2 = new THREE.CatmullRomCurve3(points2).getSpacedPoints(100) //获取更多的点数
  const geometry2 = new THREE.BufferGeometry()
  geometry2.setFromPoints(newPoints2)
  // 每个顶点对应一个百分比数据attributes.percent 用于控制点的渲染大小
  const percentArr = [] //attributes.percent的数据
  for (let i = 0; i < newPoints2.length; i++) {
    percentArr.push(i / newPoints2.length)
  }
  const percentAttribue = new THREE.BufferAttribute(new Float32Array(percentArr), 1)
  geometry2.attributes.percent = percentAttribue
  // 批量计算所有顶点颜色数据
  const colorArr = []
  for (let i = 0; i < newPoints2.length; i++) {
    const color1 = new THREE.Color(0x006666) //轨迹线颜色 青色
    const color2 = new THREE.Color(0xffff00) //黄色
    const color = color1.lerp(color2, i / newPoints2.length)
    colorArr.push(color.r, color.g, color.b)
  }
  // 设置几何体顶点颜色数据
  geometry2.attributes.color = new THREE.BufferAttribute(new Float32Array(colorArr), 3)

  // 点模型渲染几何体每个顶点
  const PointsMaterial = new THREE.PointsMaterial({
    color: 0xffff00,
    size: 5.0,
    vertexColors: true
  })
  const flyPoints = new THREE.Points(geometry2, PointsMaterial)
  flyPoints.name = 'flowing-line'
  // 修改点材质的着色器源码
  PointsMaterial.onBeforeCompile = function (shader: any) {
    // 顶点着色器中声明一个attribute变量:百分比
    shader.vertexShader = shader.vertexShader.replace(
      'uniform float scale;',
      ['uniform float scale;', 'attribute float percent;'].join('\n')
    )
    // 调整点渲染大小计算方式
    shader.vertexShader = shader.vertexShader.replace(
      'gl_PointSize = size',
      ['gl_PointSize = percent * size'].join('\n') // .join()把数组元素合成字符串
    )
  }
  // 飞线动画
  const indexMax = points.length - num //飞线取点索引范围
  function animation() {
    if (index > indexMax) index = 0
    index += 1
    points2 = points.slice(index, index + num) //从曲线上获取一段
    const curve = new THREE.CatmullRomCurve3(points2)
    const newPoints2 = curve.getSpacedPoints(100) //获取更多的点数
    geometry2.setFromPoints(newPoints2)

    requestAnimationFrame(animation)
  }
  animation()

  return flyPoints
}

export { createFlowingLine }
