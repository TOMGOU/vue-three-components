var g=Object.defineProperty;var r=(i,n)=>g(i,"name",{value:n,configurable:!0});import{d as x,o as v,a as f,b as h,e as _,f as b}from"./vue.esm-bundler-42103fc0.js";import{T as y,R as w,D as R,M as T,P as M,a as E,s as e,c as l,A as P,r as a}from"./three-15c9ae80.js";const B=`
  precision lowp float;
  attribute vec3 position;
  attribute vec2 uv;
  uniform mat4 modelMatrix;
  uniform mat4 viewMatrix;
  uniform mat4 projectionMatrix;
  uniform float uTime;
  varying vec2 vUv;
  varying float vElevation;

  void main(){
      vUv = uv;
      vec4 modelPosition = modelMatrix * vec4( position, 1.0 );

      modelPosition.z = sin((modelPosition.x+uTime*100.0) * .015)*100.0;
      modelPosition.z += sin((modelPosition.y+uTime*100.0)  * .015)*100.0;
      vElevation = modelPosition.z;

      gl_Position = projectionMatrix * viewMatrix * modelPosition;
  }
`,C=`
  precision lowp float;
  varying vec2 vUv;
  varying float vElevation;

  uniform sampler2D uTexture; 

  void main(){
      float height = vElevation + 1.0;
      vec4 textureColor = texture2D(uTexture, vUv);
      // textureColor.rgb *= height;
      gl_FragColor = textureColor;
  }
`,L=r((i="/sign-in_bg.png",n=8.5,t=4.2)=>{const s=new y().load(i),m=new w({vertexShader:B,fragmentShader:C,side:R,uniforms:{uTime:{value:0},uTexture:{value:s}}}),d=new E;function c(){const u=d.getElapsedTime();m.uniforms.uTime.value=u,requestAnimationFrame(c)}return r(c,"animate"),c(),new T(new M(n,t,64,64),m)},"createRipple"),k={id:"Ripple"},p=x({__name:"index",setup(i){let n=null;return v(()=>{n&&cancelAnimationFrame(n),e.remove.apply(e,e.children)}),f(()=>{l.zoom=1;const t=L("/texture/sign-in_bg.png",2e3,1600);e.add(t),new P(5e3);const o=document.getElementById("Ripple");o&&o.appendChild(a.domElement);const s=r(()=>{a.render(e,l),l.updateProjectionMatrix(),n=requestAnimationFrame(s)},"render");s()}),h(()=>{var o;console.log("onBeforeUpdate"),a.clear(),e.remove.apply(e,e.children),e.remove.apply(e,e.children),a.forceContextLoss(),cancelAnimationFrame(n);const t=a.domElement.getContext("webgl");t&&((o=t.getExtension("WEBGL_lose_context"))==null||o.loseContext())}),(t,o)=>(b(),_("div",k))}});p.__docgenInfo={exportName:"default",displayName:"ripple",description:"",tags:{}};const F={parameters:{storySource:{source:`import Ripple from './components/ripple/index.vue';
// import { Button } from '../components/index.ts';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Example/Ripple',
  component: Ripple,
  argTypes: {
    url: { 
      control: 'text',
      default: './assets/sign-in_bg.png'
    },
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
  components: { Ripple },
  setup() {
    /**
     * 复制此处代码
     * -----------------------------------------------------------------
     * 
      import { createRipple } from '@candelas/vue_three_components'

      const Ripple = createRipple('/texture/sign-in_bg.png', 2000, 1600)
      scene.add( Ripple );
     *
     * -----------------------------------------------------------------
     * 复制此处代码
     */
    return { args };
  },
  template: '<Ripple v-bind="args" />',
});

export const Index = Template.bind({});
Index.args = {
  url: '/texture/sign-in_bg.png',
  width: 2000,
  height: 1600,
};
`,locationsMap:{index:{startLoc:{col:17,line:25},endLoc:{col:2,line:43},startBody:{col:17,line:25},endBody:{col:2,line:43}}}}},title:"Example/Ripple",component:p,argTypes:{url:{control:"text",default:"./assets/sign-in_bg.png"},width:{type:Number,default:2e3},height:{type:Number,default:1600}}},A=r(i=>({components:{Ripple:p},setup(){return{args:i}},template:'<Ripple v-bind="args" />'}),"Template"),I=A.bind({});I.args={url:"/texture/sign-in_bg.png",width:2e3,height:1600};const z=["Index"];export{I as Index,z as __namedExportsOrder,F as default};
//# sourceMappingURL=Ripple.stories-4e6664af.js.map
