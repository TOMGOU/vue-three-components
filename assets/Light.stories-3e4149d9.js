var p=Object.defineProperty;var a=(n,r)=>p(n,"name",{value:r,configurable:!0});import{d as u,o as v,a as g,b as h,e as f,f as x}from"./vue.esm-bundler-42103fc0.js";import{R as y,D as w,M as L,P as b,a as _,s as e,c as m,A as M,r as s}from"./three-15c9ae80.js";const T=`
  precision lowp float;
  attribute vec3 position;
  attribute vec2 uv;
  uniform mat4 modelMatrix;
  uniform mat4 viewMatrix;
  uniform mat4 projectionMatrix;
  uniform float uTime;
  varying vec2 vUv;

  void main(){
      vUv = uv;
      vec4 modelPosition = modelMatrix * vec4( position, 1.0 );

      gl_Position = projectionMatrix * viewMatrix * modelPosition;
  }
`,E=`
  // precision lowp float;
  // varying vec2 vUv;
  // varying float vElevation;

  // uniform sampler2D uTexture; 

  // void main(){
  //     float height = vElevation + 1.0;
  //     vec4 textureColor = texture2D(uTexture, vUv);
  //     gl_FragColor = textureColor;
  // }

  precision highp float;
  uniform float uTime;
  varying vec2 vUv;

  void main(){
    vec3 c;
    float l,z=uTime;
    for(int i=0;i<3;i++) {
      vec2 uv,p=vUv;
      uv=vUv;
      p-=.5;
      p.x*=vUv.x/vUv.y;
      z+=.07;
      l=length(p);
      uv+=p/l*(sin(z)+1.)*abs(sin(l*9.-z-z));
      c[i]=.01/length(mod(uv,1.)-.5);
    }
    gl_FragColor=vec4(c/l,uTime);
  }
`,U=a((n=8.5,r=4.2)=>{const o=new y({vertexShader:T,fragmentShader:E,side:w,uniforms:{uTime:{value:0}}}),i=new _;function t(){const d=i.getElapsedTime();o.uniforms.uTime.value=d,requestAnimationFrame(t)}return a(t,"animate"),t(),new L(new b(n,r,64,64),o)},"createLight"),B={id:"Light"},c=u({__name:"index",props:{width:{type:Number,default:20,required:!1},height:{type:Number,default:20,required:!1}},setup(n){const r=n;let o=null;return v(()=>{o&&cancelAnimationFrame(o),e.remove.apply(e,e.children)}),g(()=>{m.zoom=1;const i=U(r.width,r.height);e.add(i),new M(5e3);const t=document.getElementById("Light");t&&t.appendChild(s.domElement);const l=a(()=>{s.render(e,m),m.updateProjectionMatrix(),o=requestAnimationFrame(l)},"render");l()}),h(()=>{var t;console.log("onBeforeUpdate"),s.clear(),e.remove.apply(e,e.children),e.remove.apply(e,e.children),s.forceContextLoss(),cancelAnimationFrame(o);const i=s.domElement.getContext("webgl");i&&((t=i.getExtension("WEBGL_lose_context"))==null||t.loseContext())}),(i,t)=>(x(),f("div",B))}});c.__docgenInfo={exportName:"default",displayName:"light",description:"",tags:{},props:[{name:"width",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"20"}},{name:"height",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"20"}}]};const A={parameters:{storySource:{source:`import Light from './components/light/index.vue';
// import { Button } from '../components/index.ts';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Example/Light',
  component: Light,
  argTypes: {
    width: {
      type: Number,
      default: 2000
    },
    height: {
      type: Number,
      default: 1600
    },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  components: { Light },
  setup() {
    /**
     * 复制此处代码
     * -----------------------------------------------------------------
     * 
      import { createLight } from '@candelas/vue_three_components'

      const Light = createLight(2000, 1600)
      scene.add( Light );
     *
     * -----------------------------------------------------------------
     * 复制此处代码
     */
    return { args };
  },
  template: '<Light v-bind="args" />',
});

export const Index = Template.bind({});
Index.args = {
  width: 2000,
  height: 1600,
};
`,locationsMap:{index:{startLoc:{col:17,line:21},endLoc:{col:2,line:39},startBody:{col:17,line:21},endBody:{col:2,line:39}}}}},title:"Example/Light",component:c,argTypes:{width:{type:Number,default:2e3},height:{type:Number,default:1600}}},C=a(n=>({components:{Light:c},setup(){return{args:n}},template:'<Light v-bind="args" />'}),"Template"),N=C.bind({});N.args={width:2e3,height:1600};const F=["Index"];export{N as Index,F as __namedExportsOrder,A as default};
//# sourceMappingURL=Light.stories-3e4149d9.js.map
