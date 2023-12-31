
# 快速上手

## 文档地址

https://tomgou.github.io/vue-three-components/

## npm 地址

https://www.npmjs.com/package/@candelas/vue_three_components

## 标准开发

实际项目中，往往会使用 `webpack`，`rollup` 或者 `gulp` 的工作流，大多可以做到按需加载页面用到的组件，所以不推荐直接使用 `<script>` 标签全局引入的方式使用。

### 全局组件使用

可以在项目的入口文件中引入所有组件或所需组件

```js
import tools from '@candelas/vue_three_components' // 引入组件库
const WaveMesh = tools.createWaveMesh(20, 0x00ff00)
WaveMesh.position.z = 0
WaveMesh.rotateX(Math.PI / 2)
scene.add( WaveMesh );
```

### 单个组件按需使用

可以局部注册所需的组件，适用于与其他框架组合使用的场景

```js
import { createWaveMesh } from '@candelas/vue_three_components' // 引入组件库
const WaveMesh = createWaveMesh(20, 0x00ff00)
WaveMesh.position.z = 0
WaveMesh.rotateX(Math.PI / 2)
scene.add( WaveMesh );
```
