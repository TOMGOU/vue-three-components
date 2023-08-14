var p=Object.defineProperty;var l=(t,r)=>p(t,"name",{value:r,configurable:!0});import{d as m,o as u,a as f,b as v,e as x,f as g}from"./vue.esm-bundler-42103fc0.js";import{s as e,c as d,A as W,r as a}from"./three-15c9ae80.js";import{c as h}from"./index-594fd1af.js";const y={id:"Wave"},c=m({__name:"index",props:{size:{type:Number,default:20,required:!1},color:{type:String,default:"#15de1d",required:!1}},setup(t){const r=t;let s=null;return u(()=>{s&&cancelAnimationFrame(s),e.remove.apply(e,e.children)}),f(()=>{d.zoom=1;const n=h(r.size,r.color);n.position.z=0,n.rotateX(-Math.PI/4),e.add(n),new W(5e3);const o=document.getElementById("Wave");o&&o.appendChild(a.domElement);const i=l(()=>{a.render(e,d),d.updateProjectionMatrix(),s=requestAnimationFrame(i)},"render");i()}),v(()=>{var o;console.log("onBeforeUpdate"),a.clear(),e.remove.apply(e,e.children),e.remove.apply(e,e.children),a.forceContextLoss(),cancelAnimationFrame(s);const n=a.domElement.getContext("webgl");n&&((o=n.getExtension("WEBGL_lose_context"))==null||o.loseContext())}),(n,o)=>(g(),x("div",y))}});c.__docgenInfo={exportName:"default",displayName:"wave",description:"",tags:{},props:[{name:"size",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"20"}},{name:"color",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"'#15de1d'"}}]};const I={parameters:{storySource:{source:`import Wave from './components/wave/index.vue';
// import { Button } from '../components/index.ts';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Example/Wave',
  component: Wave,
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
  components: { Wave },
  setup() {
    /**
     * 复制此处代码
     * -----------------------------------------------------------------
     * 
      import { createWaveMesh } from '@candelas/vue_three_components'

      const WaveMesh = createWaveMesh(20, 0x00ff00)
      WaveMesh.position.z = 0
      WaveMesh.rotateX(Math.PI / 2)
      scene.add( WaveMesh );
     *
     * -----------------------------------------------------------------
     * 复制此处代码
     */
    return { args };
  },
  template: '<Wave v-bind="args" />',
});

export const Index = Template.bind({});
Index.args = {
  size: 20,
  color: '#15de1d',
};
`,locationsMap:{index:{startLoc:{col:17,line:21},endLoc:{col:2,line:41},startBody:{col:17,line:21},endBody:{col:2,line:41}}}}},title:"Example/Wave",component:c,argTypes:{color:{control:"color",default:"#15de1d"},size:{type:Number,default:20}}},_=l(t=>({components:{Wave:c},setup(){return{args:t}},template:'<Wave v-bind="args" />'}),"Template"),M=_.bind({});M.args={size:20,color:"#15de1d"};const w=["Index"];export{M as Index,w as __namedExportsOrder,I as default};
//# sourceMappingURL=Wave.stories-a26ddae0.js.map
