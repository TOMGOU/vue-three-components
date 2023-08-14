var f=Object.defineProperty;var d=(t,s)=>f(t,"name",{value:s,configurable:!0});import{d as y,o as h,a as g,b as P,e as x,f as M}from"./vue.esm-bundler-42103fc0.js";import{k as _,l as b,f as v,M as z,s as e,m as L,n as B,o as E,p as I,q,t as w,c as m,r as c}from"./three-15c9ae80.js";import{c as C}from"./index-594fd1af.js";const k=d((t=60,s="#22ffcc")=>{const o=t*4,n=new _(t,o,4);n.rotateX(-Math.PI/2),n.translate(0,0,o/2);const a=new b({color:new v(s)}),r=new z(n,a),i=r.clone();i.scale.z=.5,i.position.z=o*(1+i.scale.z),i.rotateX(Math.PI),r.add(i);const p=d(()=>{r.rotateZ(.05),a.needsUpdate=!0,requestAnimationFrame(p)},"animation");p();const u=C(t,s);return u.position.z=o,r.add(u),r},"createPyramidMesh"),N={id:"Pyramid"},l=y({__name:"index",props:{size:{type:Number,default:20,required:!1},color:{type:String,default:"#22ffcc",required:!1}},setup(t){const s=t;let o=null;return h(()=>{o&&cancelAnimationFrame(o),e.remove.apply(e,e.children)}),g(()=>{e.add(L),e.add(B),e.add(E),e.add(I),e.add(q),e.add(w),m.zoom=1;const n=k(s.size,s.color);n.position.z=0,n.rotateX(-Math.PI/4),e.add(n);const a=document.getElementById("Pyramid");a&&a.appendChild(c.domElement);const r=d(()=>{c.render(e,m),m.updateProjectionMatrix(),o=requestAnimationFrame(r)},"render");r()}),P(()=>{var a;console.log("onBeforeUpdate"),c.clear(),e.remove.apply(e,e.children),e.remove.apply(e,e.children),c.forceContextLoss(),cancelAnimationFrame(o);const n=c.domElement.getContext("webgl");n&&((a=n.getExtension("WEBGL_lose_context"))==null||a.loseContext())}),(n,a)=>(M(),x("div",N))}});l.__docgenInfo={exportName:"default",displayName:"pyramid",description:"",tags:{},props:[{name:"size",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"20"}},{name:"color",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"'#22ffcc'"}}]};const W={parameters:{storySource:{source:`import Pyramid from './components/pyramid/index.vue';
// import { Button } from '../components/index.ts';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Example/Pyramid',
  component: Pyramid,
  argTypes: {
    color: { 
      control: 'color',
      default: '#15de1d'
    },
    size: {
      type: Number,
      default: 20
    },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  components: { Pyramid },
  setup() {
    /**
     * 复制此处代码
     * -----------------------------------------------------------------
     * 
      import { createPyramidMesh } from '@candelas/vue_three_components'

      const PyramidMesh = createPyramidMesh(20, '#22ffcc')
      PyramidMesh.position.z = 0
      PyramidMesh.rotateX(Math.PI / 2)
      scene.add( PyramidMesh );
     *
     * -----------------------------------------------------------------
     * 复制此处代码
     */
    return { args };
  },
  template: '<Pyramid v-bind="args" />',
});

export const Index = Template.bind({});
Index.args = {
  size: 60,
  color: '#22ffcc',
};
`,locationsMap:{index:{startLoc:{col:17,line:21},endLoc:{col:2,line:41},startBody:{col:17,line:21},endBody:{col:2,line:41}}}}},title:"Example/Pyramid",component:l,argTypes:{color:{control:"color",default:"#15de1d"},size:{type:Number,default:20}}},T=d(t=>({components:{Pyramid:l},setup(){return{args:t}},template:'<Pyramid v-bind="args" />'}),"Template"),A=T.bind({});A.args={size:60,color:"#22ffcc"};const G=["Index"];export{A as Index,G as __namedExportsOrder,W as default};
//# sourceMappingURL=Pyramid.stories-1261478f.js.map
