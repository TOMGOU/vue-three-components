/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '@three-ts/orbit-controls'

declare module 'three/examples/jsm/loaders/GLTFLoader.js'

declare module 'three/examples/jsm/loaders/DRACOLoader.js'

declare module 'three/examples/js/libs/stats.min.js'

declare module 'three/examples/jsm/libs/lil-gui.module.min.js'

declare module 'three/examples/jsm/controls/OrbitControls'
