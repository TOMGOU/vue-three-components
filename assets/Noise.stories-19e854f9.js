var p=Object.defineProperty;var s=(i,a)=>p(i,"name",{value:a,configurable:!0});import{d as x,o as y,a as g,b as N,e as S,f as w}from"./vue.esm-bundler-42103fc0.js";import{S as C,D as h,f as d,P as _,M as P,a as q,s as o,c as u,A as F,r as l}from"./three-15c9ae80.js";const z=`
  precision lowp float;
  uniform float uWaresFrequency;
  uniform float uScale;
  uniform float uNoiseFrequency;
  uniform float uNoiseScale;
  uniform float uXzScale;
  uniform float uTime;
  uniform float uXspeed;
  uniform float uZspeed;
  uniform float uNoiseSpeed;

  // 计算出的高度传递给片元着色器
  varying float vElevation;

  // 随机函数
  float random (vec2 st) {
      return fract(sin(dot(st.xy,vec2(12.9898,78.233)))*43758.5453123);
  }

  // 旋转函数
  vec2 rotate(vec2 uv, float rotation, vec2 mid)
  {
      return vec2(
        cos(rotation) * (uv.x - mid.x) + sin(rotation) * (uv.y - mid.y) + mid.x,
        cos(rotation) * (uv.y - mid.y) - sin(rotation) * (uv.x - mid.x) + mid.y
      );
  }

  // 噪声函数
  float noise (in vec2 _st) {
      vec2 i = floor(_st);
      vec2 f = fract(_st);

      // Four corners in 2D of a tile
      float a = random(i);
      float b = random(i + vec2(1.0, 0.0));
      float c = random(i + vec2(0.0, 1.0));
      float d = random(i + vec2(1.0, 1.0));

      vec2 u = f * f * (3.0 - 2.0 * f);

      return mix(a, b, u.x) +
              (c - a)* u.y * (1.0 - u.x) +
              (d - b) * u.x * u.y;
  }


  //	Classic Perlin 2D Noise 
  //	by Stefan Gustavson
  //
  vec4 permute(vec4 x)
  {
      return mod(((x*34.0)+1.0)*x, 289.0);
  }

  vec2 fade(vec2 t)
  {
      return t*t*t*(t*(t*6.0-15.0)+10.0);
  }

  float cnoise(vec2 P)
  {
      vec4 Pi = floor(P.xyxy) + vec4(0.0, 0.0, 1.0, 1.0);
      vec4 Pf = fract(P.xyxy) - vec4(0.0, 0.0, 1.0, 1.0);
      Pi = mod(Pi, 289.0); // To avoid truncation effects in permutation
      vec4 ix = Pi.xzxz;
      vec4 iy = Pi.yyww;
      vec4 fx = Pf.xzxz;
      vec4 fy = Pf.yyww;
      vec4 i = permute(permute(ix) + iy);
      vec4 gx = 2.0 * fract(i * 0.0243902439) - 1.0; // 1/41 = 0.024...
      vec4 gy = abs(gx) - 0.5;
      vec4 tx = floor(gx + 0.5);
      gx = gx - tx;
      vec2 g00 = vec2(gx.x,gy.x);
      vec2 g10 = vec2(gx.y,gy.y);
      vec2 g01 = vec2(gx.z,gy.z);
      vec2 g11 = vec2(gx.w,gy.w);
      vec4 norm = 1.79284291400159 - 0.85373472095314 * vec4(dot(g00, g00), dot(g01, g01), dot(g10, g10), dot(g11, g11));
      g00 *= norm.x;
      g01 *= norm.y;
      g10 *= norm.z;
      g11 *= norm.w;
      float n00 = dot(g00, vec2(fx.x, fy.x));
      float n10 = dot(g10, vec2(fx.y, fy.y));
      float n01 = dot(g01, vec2(fx.z, fy.z));
      float n11 = dot(g11, vec2(fx.w, fy.w));
      vec2 fade_xy = fade(Pf.xy);
      vec2 n_x = mix(vec2(n00, n01), vec2(n10, n11), fade_xy.x);
      float n_xy = mix(n_x.x, n_x.y, fade_xy.y);
      return 2.3 * n_xy;
  }


  void main(){
      vec4 modelPosition = modelMatrix * vec4(position,1.0);

      // float elevation = sin(modelPosition.x*uWaresFrequency+uTime*uXspeed)*sin(modelPosition.z*uWaresFrequency*uXzScale+uTime*uZspeed);
      float elevation = sin(modelPosition.x*uWaresFrequency+uTime*uXspeed) * sin(modelPosition.y*uWaresFrequency+uTime*uXspeed);

      // elevation += -abs(cnoise(vec2(modelPosition.xz*uNoiseFrequency+uTime*uNoiseSpeed))) * uNoiseScale;
      elevation += -abs(cnoise(vec2(modelPosition.xy*uNoiseFrequency+uTime*uNoiseSpeed))) * uNoiseScale;
      
      vElevation = elevation;
      
      elevation *= uScale;

      // modelPosition.y += elevation;
      modelPosition.z += elevation;

      gl_Position = projectionMatrix * viewMatrix * modelPosition;
  }
`,T=`
  precision lowp float;

  uniform vec3 uHighColor;
  uniform vec3 uLowColor;
  varying float vElevation;
  uniform float uOpacity;

  void main(){
      float a = (vElevation+1.0)/2.0;
      vec3 color = mix(uLowColor,uHighColor,a);
      // vec3 color = mix(vec3(1, 0, 0),vec3(1, 1, 0),a);
      gl_FragColor = vec4(color,uOpacity);
  }
`,M=s((i,a)=>{const e={uWaresFrequency:14,uScale:.03,uXzScale:1.5,uNoiseFrequency:10,uNoiseScale:1.5,uLowColor:i||"#ff0000",uHighColor:a||"#ffff00",uXspeed:1,uZspeed:1,uNoiseSpeed:1,uOpacity:1,uTime:0},n=new C({vertexShader:z,fragmentShader:T,side:h,uniforms:{uWaresFrequency:{value:e.uWaresFrequency},uScale:{value:e.uScale},uNoiseFrequency:{value:e.uNoiseFrequency},uNoiseScale:{value:e.uNoiseScale},uXzScale:{value:e.uXzScale},uTime:{value:e.uTime},uLowColor:{value:new d(e.uLowColor)},uHighColor:{value:new d(e.uHighColor)},uXspeed:{value:e.uXspeed},uZspeed:{value:e.uZspeed},uNoiseSpeed:{value:e.uNoiseSpeed},uOpacity:{value:e.uOpacity}},transparent:!0}),t=new _(3,2,1024,1024),r=new P(t,n);r.name="noise";const m=new q;function f(){const v=m.getElapsedTime();n.uniforms.uTime.value=v,requestAnimationFrame(f)}return s(f,"animate"),f(),r},"createNoise"),b={id:"noise"},c=x({__name:"index",props:{uLowColor:{type:String,default:"#ff0000",required:!1},uHighColor:{type:String,default:"#ffff00",required:!1}},setup(i){const a=i;let e=null;return y(()=>{e&&cancelAnimationFrame(e),o.remove.apply(o,o.children)}),g(()=>{const n=M(a.uLowColor,a.uHighColor);u.zoom=1e3,o.add(n),new F(1e3);const t=document.getElementById("noise");t&&t.appendChild(l.domElement);const r=s(()=>{l.render(o,u),u.updateProjectionMatrix(),e=requestAnimationFrame(r)},"render");r()}),N(()=>{var t;console.log("onBeforeUpdate"),l.clear(),o.remove.apply(o,o.children),o.remove.apply(o,o.children),l.forceContextLoss(),cancelAnimationFrame(e);const n=l.domElement.getContext("webgl");n&&((t=n.getExtension("WEBGL_lose_context"))==null||t.loseContext())}),(n,t)=>(w(),S("div",b))}});c.__docgenInfo={exportName:"default",displayName:"noise",description:"",tags:{},props:[{name:"uLowColor",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"'#ff0000'"}},{name:"uHighColor",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"'#ffff00'"}}]};const W={parameters:{storySource:{source:`import Noise from './components/noise/index.vue';
// import { Button } from '../components/index.ts';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Example/Noise',
  component: Noise,
  argTypes: {
    uLowColor: {
      control: 'color',
      type: String,
      default: '#ff0000',
    },
    uHighColor: {
      control: 'color',
      type: String,
      default: '#ffff00',
    }
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  components: { Noise },
  setup() {
    /**
     * 复制此处代码
     * -----------------------------------------------------------------
     * 
      import { createNoise } from '@candelas/vue_three_components'

      const NoiseMesh = createNoise('#ff0000', '#ffff00')
      NoiseMesh.position.z = 0
      NoiseMesh.rotateX(Math.PI / 2)
      scene.add( NoiseMesh );
     *
     * -----------------------------------------------------------------
     * 复制此处代码
     */
    return { args };
  },
  template: '<Noise v-bind="args" />',
});

export const Index = Template.bind({});
Index.args = {
  uLowColor: '#ff0000',
  uHighColor: '#ffff00'
};
`,locationsMap:{index:{startLoc:{col:17,line:23},endLoc:{col:2,line:43},startBody:{col:17,line:23},endBody:{col:2,line:43}}}}},title:"Example/Noise",component:c,argTypes:{uLowColor:{control:"color",type:String,default:"#ff0000"},uHighColor:{control:"color",type:String,default:"#ffff00"}}},L=s(i=>({components:{Noise:c},setup(){return{args:i}},template:'<Noise v-bind="args" />'}),"Template"),E=L.bind({});E.args={uLowColor:"#ff0000",uHighColor:"#ffff00"};const I=["Index"];export{E as Index,I as __namedExportsOrder,W as default};
//# sourceMappingURL=Noise.stories-19e854f9.js.map
