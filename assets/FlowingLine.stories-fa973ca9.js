var P=Object.defineProperty;var d=(c,t)=>P(c,"name",{value:t,configurable:!0});import{d as T,o as C,a as R,b as V,e as A,f as H}from"./vue.esm-bundler-42103fc0.js";import{d as g,B as S,e as _,f as h,g as M,h as z,s as o,c as w,V as i,r as m}from"./three-15c9ae80.js";const I=d(c=>{const t=c.getSpacedPoints(100);let e=20;const r=15;let l=t.slice(e,e+r);const s=new g(l).getSpacedPoints(100),a=new S;a.setFromPoints(s);const x=[];for(let n=0;n<s.length;n++)x.push(n/s.length);const y=new _(new Float32Array(x),1);a.attributes.percent=y;const E=[];for(let n=0;n<s.length;n++){const p=new h(26214),B=new h(16776960),u=p.lerp(B,n/s.length);E.push(u.r,u.g,u.b)}a.attributes.color=new _(new Float32Array(E),3);const F=new M({color:16776960,size:5,vertexColors:!0}),L=new z(a,F);L.name="flowing-line",F.onBeforeCompile=function(n){n.vertexShader=n.vertexShader.replace("uniform float scale;",["uniform float scale;","attribute float percent;"].join(`
`)),n.vertexShader=n.vertexShader.replace("gl_PointSize = size",["gl_PointSize = percent * size"].join(`
`))};const b=t.length-r;function v(){e>b&&(e=0),e+=1,l=t.slice(e,e+r);const p=new g(l).getSpacedPoints(100);a.setFromPoints(p),requestAnimationFrame(v)}return d(v,"animation"),v(),L},"createFlowingLine"),j={id:"FlowingLine"},f=T({__name:"index",setup(c){let t=null;return C(()=>{t&&cancelAnimationFrame(t),o.remove.apply(o,o.children)}),R(()=>{w.zoom=1;const e=new g([new i(0,200,0),new i(0,-100,0),new i(0,-200,0),new i(50,-280,0),new i(70,-280,0),new i(300,-250,0),new i(570,-240,0),new i(-570,300,0),new i(-300,300,0)],!0,"chordal",1),r=I(e);o.add(r);const l=document.getElementById("FlowingLine");l&&l.appendChild(m.domElement);const s=d(()=>{m.render(o,w),w.updateProjectionMatrix(),t=requestAnimationFrame(s)},"render");s()}),V(()=>{var r;console.log("onBeforeUpdate"),m.clear(),o.remove.apply(o,o.children),o.remove.apply(o,o.children),m.forceContextLoss(),cancelAnimationFrame(t);const e=m.domElement.getContext("webgl");e&&((r=e.getExtension("WEBGL_lose_context"))==null||r.loseContext())}),(e,r)=>(H(),A("div",j))}});f.__docgenInfo={exportName:"default",displayName:"flowingLine",description:"",tags:{}};const U={parameters:{storySource:{source:`import FlowingLine from './components/flowingLine/index.vue';
// import { Button } from '../components/index.ts';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Example/FlowingLine',
  component: FlowingLine,
  // argTypes: {
  //   color: { 
  //     control: 'color',
  //     default: '#15de1d'
  //   },
  //   size: {
  //     type: Number,
  //     default: 20
  //   },
  // },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  components: { FlowingLine },
  setup() {
    /**
     * 复制此处代码
     * -----------------------------------------------------------------
     * 
      import { createFlowingLine } from '@candelas/vue_three_components'

      const curve = new THREE.CatmullRomCurve3(
        [
          new THREE.Vector3(0, -15, 200),
          new THREE.Vector3(0, -15, -100),
          new THREE.Vector3(0, -15, -200),
          new THREE.Vector3(50, -15, -280),
          new THREE.Vector3(70, -15, -280),
          new THREE.Vector3(-300, -15, -250),
          new THREE.Vector3(-570, -15, -240),
          new THREE.Vector3(-570, -15, 300),
          new THREE.Vector3(-300, -15, 300)
        ],
        true,
        'chordal',
        1.0
      )
      const FlowingLine = createFlowingLine(curve)
      scene.add( FlowingLine );
     *
     * -----------------------------------------------------------------
     * 复制此处代码
     */
    return { args };
  },
  template: '<FlowingLine v-bind="args" />',
});

export const Index = Template.bind({});
// Index.args = {
//   size: 20,
//   color: '#15de1d',
// };
`,locationsMap:{index:{startLoc:{col:17,line:21},endLoc:{col:2,line:55},startBody:{col:17,line:21},endBody:{col:2,line:55}}}}},title:"Example/FlowingLine",component:f},k=d(c=>({components:{FlowingLine:f},setup(){return{args:c}},template:'<FlowingLine v-bind="args" />'}),"Template"),O=k.bind({}),W=["Index"];export{O as Index,W as __namedExportsOrder,U as default};
//# sourceMappingURL=FlowingLine.stories-fa973ca9.js.map
