var g=Object.defineProperty;var c=(a,r)=>g(a,"name",{value:r,configurable:!0});import{d as h,o as x,a as S,b as y,e as M,f as _}from"./vue.esm-bundler-42103fc0.js";import{T as b,P as L,l as v,f,D as w,M as B,s as e,m as E,n as I,o as z,p as q,q as T,t as C,c as p,r as d}from"./three-15c9ae80.js";const P=""+new URL("signal-005befcb.png",import.meta.url).href,N=c((a=1,r="#ffff00")=>{const i=new b,n=new L(a,.6*a);n.translate(-a/2,0,0),n.rotateZ(Math.PI/2);const t=new v({map:i.load(P),color:new f(r),transparent:!0,side:w,emissive:new f(r)}),l=new B(n,t);l.rotateX(-Math.PI/3);const s=1e3;let o=1;function u(){o+=20,l.scale.set(o,o,o),o<=s*.2?t.opacity=(o-1)/(s*.2-1):o>s*.2&&o<=s?t.opacity=1-(o-s*.2)/(s-s*.2):o=1,requestAnimationFrame(u)}return c(u,"animation"),u(),l},"createSignalMesh"),k={id:"Signal"},m=h({__name:"index",props:{size:{type:Number,default:20,required:!1},color:{type:String,default:"#22ffcc",required:!1}},setup(a){const r=a;let i=null;return x(()=>{i&&cancelAnimationFrame(i),e.remove.apply(e,e.children)}),S(()=>{e.add(E),e.add(I),e.add(z),e.add(q),e.add(T),e.add(C),p.zoom=1;const n=N(r.size,r.color);n.position.z=0,n.position.y=300,e.add(n);const t=document.getElementById("Signal");t&&t.appendChild(d.domElement);const l=c(()=>{d.render(e,p),p.updateProjectionMatrix(),i=requestAnimationFrame(l)},"render");l()}),y(()=>{var t;console.log("onBeforeUpdate"),d.clear(),e.remove.apply(e,e.children),e.remove.apply(e,e.children),d.forceContextLoss(),cancelAnimationFrame(i);const n=d.domElement.getContext("webgl");n&&((t=n.getExtension("WEBGL_lose_context"))==null||t.loseContext())}),(n,t)=>(_(),M("div",k))}});m.__docgenInfo={exportName:"default",displayName:"signal",description:"",tags:{},props:[{name:"size",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"20"}},{name:"color",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"'#22ffcc'"}}]};const G={parameters:{storySource:{source:`import Signal from './components/signal/index.vue';
// import { Button } from '../components/index.ts';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Example/Signal',
  component: Signal,
  argTypes: {
    color: { 
      control: 'color',
      default: '#15de1d'
    },
    size: {
      type: Number,
      default: 2
    },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  components: { Signal },
  setup() {
    /**
     * 复制此处代码
     * -----------------------------------------------------------------
     * 
      import { createSignalMesh } from '@candelas/vue_three_components'

      const SignalMesh = createSignalMesh(20, 0x00ff00)
      SignalMesh.position.z = 0
      SignalMesh.rotateX(Math.PI / 2)
      scene.add( SignalMesh );
     *
     * -----------------------------------------------------------------
     * 复制此处代码
     */
    return { args };
  },
  template: '<Signal v-bind="args" />',
});

export const Index = Template.bind({});
Index.args = {
  size: 2,
  color: '#22ffcc',
};
`,locationsMap:{index:{startLoc:{col:17,line:21},endLoc:{col:2,line:41},startBody:{col:17,line:21},endBody:{col:2,line:41}}}}},title:"Example/Signal",component:m,argTypes:{color:{control:"color",default:"#15de1d"},size:{type:Number,default:2}}},A=c(a=>({components:{Signal:m},setup(){return{args:a}},template:'<Signal v-bind="args" />'}),"Template"),F=A.bind({});F.args={size:2,color:"#22ffcc"};const V=["Index"];export{F as Index,V as __namedExportsOrder,G as default};
//# sourceMappingURL=Signal.stories-d866dd7e.js.map
