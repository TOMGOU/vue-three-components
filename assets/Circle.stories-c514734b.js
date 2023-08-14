var u=Object.defineProperty;var s=(o,i)=>u(o,"name",{value:i,configurable:!0});import{d as p,o as f,a as v,b as x,e as g,f as C}from"./vue.esm-bundler-42103fc0.js";import{C as h,S as b,D as y,M,a as _,s as e,c,A as R,r as l}from"./three-15c9ae80.js";const w=`
  precision lowp float;
  varying vec2 vUv;

  void main(){
    vec4 modelPosition = modelMatrix * vec4( position, 1.0 );
    vUv=uv;
    gl_Position =  projectionMatrix * viewMatrix * modelPosition;
  }
`,T=`
  precision lowp float;
  varying vec2 vUv;
  uniform float uTime;


  void main(){
    float radius = length(vUv - 0.5);
    float timestamp = fract(uTime * 0.5) * 0.8;
    float innerRadius[3];
    float outerRadius[3];
    float deltaRadius = 0.15;
    float innerStart = timestamp;
    float outerStart = innerStart + 0.05;

    // 使用 for 循环计算内圆半径和外圆半径
    for (int i = 0; i < 3; i++) {
      innerRadius[i] = innerStart + float(i) * deltaRadius;
      outerRadius[i] = outerStart + float(i) * deltaRadius;
    }

    // 使用 smoothstep 函数来实现颜色渐变
    vec4 color = vec4(0.0, 1.0, 0.5, 1);
    float blend = smoothstep(innerRadius[0], outerRadius[0], radius);
    blend = mix(blend, smoothstep(innerRadius[1], outerRadius[1], radius), step(outerRadius[0], radius));
    blend = mix(blend, smoothstep(innerRadius[2], outerRadius[2], radius), step(outerRadius[1], radius));
    blend = step(radius, outerRadius[2]) * blend;

    // 设置颜色
    gl_FragColor = mix(vec4(0.0, 0.1, 0.1, 0), color, blend);
  }
`,E=s((o=20)=>{const i=new h(o*10,64),r=new b({vertexShader:w,fragmentShader:T,uniforms:{uTime:{value:0}},side:y,transparent:!0,depthTest:!0,depthWrite:!0}),t=new M(i,r);t.name="circle-wave";const n=new _;function a(){const m=n.getElapsedTime();r.uniforms.uTime.value=m,requestAnimationFrame(a)}return s(a,"animate"),a(),t},"createWaveCircle"),S={id:"Circle"},d=p({__name:"index",props:{size:{type:Number,default:20,required:!1}},setup(o){const i=o;let r=null;return f(()=>{r&&cancelAnimationFrame(r),e.remove.apply(e,e.children)}),v(()=>{c.zoom=1;const t=E(i.size);t.position.z=0,t.rotateX(-Math.PI/4),e.add(t),new R(5e3);const n=document.getElementById("Circle");n&&n.appendChild(l.domElement);const a=s(()=>{l.render(e,c),c.updateProjectionMatrix(),r=requestAnimationFrame(a)},"render");a()}),x(()=>{var n;console.log("onBeforeUpdate"),l.clear(),e.remove.apply(e,e.children),e.remove.apply(e,e.children),l.forceContextLoss(),cancelAnimationFrame(r);const t=l.domElement.getContext("webgl");t&&((n=t.getExtension("WEBGL_lose_context"))==null||n.loseContext())}),(t,n)=>(C(),g("div",S))}});d.__docgenInfo={exportName:"default",displayName:"circle",description:"",tags:{},props:[{name:"size",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"20"}}]};const P={parameters:{storySource:{source:`import Circle from './components/circle/index.vue';
// import { Button } from '../components/index.ts';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Example/Circle',
  component: Circle,
  argTypes: {
    size: {
      type: Number,
      default: 20
    },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  components: { Circle },
  setup() {
    /**
     * 复制此处代码
     * -----------------------------------------------------------------
     * 
      import { createWaveCircle } from '@candelas/vue_three_components'

      const CircleMesh = createWaveCircle(20)
      CircleMesh.position.z = 0
      CircleMesh.rotateX(Math.PI / 2)
      scene.add( CircleMesh );
     *
     * -----------------------------------------------------------------
     * 复制此处代码
     */
    return { args };
  },
  template: '<Circle v-bind="args" />',
});

export const Index = Template.bind({});
Index.args = {
  size: 20,
};
`,locationsMap:{index:{startLoc:{col:17,line:17},endLoc:{col:2,line:37},startBody:{col:17,line:17},endBody:{col:2,line:37}}}}},title:"Example/Circle",component:d,argTypes:{size:{type:Number,default:20}}},z=s(o=>({components:{Circle:d},setup(){return{args:o}},template:'<Circle v-bind="args" />'}),"Template"),B=z.bind({});B.args={size:20};const U=["Index"];export{B as Index,U as __namedExportsOrder,P as default};
//# sourceMappingURL=Circle.stories-c514734b.js.map
