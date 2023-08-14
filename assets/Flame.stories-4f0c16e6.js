var h=Object.defineProperty;var y=(e,t,n)=>t in e?h(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var l=(e,t)=>h(e,"name",{value:t,configurable:!0});var g=(e,t,n)=>(y(e,typeof t!="symbol"?t+"":t,n),n);import{d as _,o as b,a as w,b as v,e as B,f as I}from"./vue.esm-bundler-42103fc0.js";import{P as z,T as E,b as L,D as P,M as A,G as T,s as o,c as d,A as C,r as m}from"./three-15c9ae80.js";const N=""+new URL("flame-fdad57e1.png",import.meta.url).href;class F extends T{constructor(n){super();g(this,"timer");this.timer=n}stop(){window.cancelAnimationFrame(this.timer)}}l(F,"CustomGroup");const k=l((e=250)=>{const t=1.6*e,n=new z(e,t);n.translate(0,t/2,0);const a=new E().load(N),s=15;let i=0,u=-1;a.repeat.set(1/s,1);const M=new L({map:a,transparent:!0,opacity:.4,side:P,depthWrite:!1}),c=new A(n,M),f=new F(u);f.add(c,c.clone().rotateY(Math.PI/2),c.clone().rotateY(Math.PI/4),c.clone().rotateY(Math.PI/4*3));const x=l(()=>{i+=.1,i>s&&(i=0),a.offset.x=Math.floor(i)/s,u=window.requestAnimationFrame(x)},"UpdateLoop");return x(),f},"createFlame"),q={id:"Flame"},p=_({__name:"index",props:{size:{type:Number,default:250,required:!1}},setup(e){const t=e;let n=null;return b(()=>{n&&cancelAnimationFrame(n),o.remove.apply(o,o.children)}),w(()=>{d.zoom=1;const r=k(t.size);r.position.z=0,r.rotateX(-Math.PI/4),o.add(r),new C(5e3);const a=document.getElementById("Flame");a&&a.appendChild(m.domElement);const s=l(()=>{m.render(o,d),d.updateProjectionMatrix(),n=requestAnimationFrame(s)},"render");s()}),v(()=>{var a;console.log("onBeforeUpdate"),m.clear(),o.remove.apply(o,o.children),o.remove.apply(o,o.children),m.forceContextLoss(),cancelAnimationFrame(n);const r=m.domElement.getContext("webgl");r&&((a=r.getExtension("WEBGL_lose_context"))==null||a.loseContext())}),(r,a)=>(I(),B("div",q))}});p.__docgenInfo={exportName:"default",displayName:"flame",description:"",tags:{},props:[{name:"size",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"250"}}]};const D={parameters:{storySource:{source:`import Flame from './components/flame/index.vue';
// import { Button } from '../components/index.ts';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Example/Flame',
  component: Flame,
  argTypes: {
    size: {
      type: Number,
      default: 250
    },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  components: { Flame },
  setup() {
    /**
     * 复制此处代码
     * -----------------------------------------------------------------
     * 
      import { createFlameMesh } from '@candelas/vue_three_components'

      const FlameMesh = createFlameMesh(20, 0x00ff00)
      FlameMesh.position.z = 0
      FlameMesh.rotateX(Math.PI / 2)
      scene.add( FlameMesh );
     *
     * -----------------------------------------------------------------
     * 复制此处代码
     */
    return { args };
  },
  template: '<Flame v-bind="args" />',
});

export const Index = Template.bind({});
Index.args = {
  size: 250,
};
`,locationsMap:{index:{startLoc:{col:17,line:17},endLoc:{col:2,line:37},startBody:{col:17,line:17},endBody:{col:2,line:37}}}}},title:"Example/Flame",component:p,argTypes:{size:{type:Number,default:250}}},G=l(e=>({components:{Flame:p},setup(){return{args:e}},template:'<Flame v-bind="args" />'}),"Template"),U=G.bind({});U.args={size:250};const W=["Index"];export{U as Index,W as __namedExportsOrder,D as default};
//# sourceMappingURL=Flame.stories-4f0c16e6.js.map
