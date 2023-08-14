var l=Object.defineProperty;var a=(r,o)=>l(r,"name",{value:o,configurable:!0});import{d,o as m,a as g,b as v,e as x,f}from"./vue.esm-bundler-42103fc0.js";import{R as u,D as h,M as y,P as _,s as e,c as i,A as G,r as s}from"./three-15c9ae80.js";const S=`

  precision lowp float;
  attribute vec3 position;
  attribute vec2 uv;
  uniform mat4 modelMatrix;
  uniform mat4 viewMatrix;
  uniform mat4 projectionMatrix;
  varying vec2 vUv;

  void main(){
    vUv = uv;
    vec4 modelPosition = modelMatrix * vec4( position, 1.0 );
    gl_Position = projectionMatrix * viewMatrix * modelPosition;
  }
`,P=`

  precision highp float;

  varying vec2 vUv;

  #define BLADES_SPACING 0.004
  #define JITTER_MAX 0.004
  // depends on size of grass blades in pixels
  #define LOOKUP_DIST 5

  #define HASHSCALE1 .1031
  #define HASHSCALE3 vec3(.1031, .1030, .0973)

  #define PI 3.14

  float hash12(vec2 p)
  {
    vec3 p3  = fract(vec3(p.xyx) * HASHSCALE1);
      p3 += dot(p3, p3.yzx + 19.19);
      return fract((p3.x + p3.y) * p3.z);
  }

  ///  3 out, 2 in...
  vec3 hash32(vec2 p)
  {
    vec3 p3 = fract(vec3(p.xyx) * HASHSCALE3);
      p3 += dot(p3, p3.yxz+19.19);
      return fract((p3.xxy+p3.yzz)*p3.zyx);
  }

  /// 2 out, 2 in...
  vec2 hash22(vec2 p)
  {
    vec3 p3 = fract(vec3(p.xyx) * HASHSCALE3);
      p3 += dot(p3, p3.yzx+19.19);
      return fract((p3.xx+p3.yz)*p3.zy);

  }

  vec3 getGrassColor(float x) {
      vec3 a = vec3(0.2, 0.4, 0.3);
      vec3 b = vec3(0.3, 0.5, 0.2);
      vec3 c = vec3(0.2, 0.4, 0.2);
      vec3 d = vec3(0.66, 0.77, 0.33);
      vec3 col = a + b * cos(2. * PI * (c * x + d));
      return col;
  }

  float getGrassBlade(in vec2 position, in vec2 grassPos, out vec4 color) {
    // between {-1, -1, -1} and {1, 1, 1}
      vec3 grassVector3 = hash32(grassPos * 123512.41) * 2.0 - vec3(1);
      // keep grass z between 0 and 0.4
      grassVector3.z = grassVector3.z * 0.2 + 0.2;
      vec2 grassVector2 = normalize(grassVector3.xy);

      float grassLength = hash12(grassPos * 102348.7) * 0.01 + 0.012;

      // take coordinates in grass blade frame
      vec2 gv = position - grassPos;
      float gx = dot(grassVector2, gv);
      float gy = dot(vec2(-grassVector2.y, grassVector2.x), gv);
      float gxn = gx / grassLength;

      // TODO make gy depends to gx
      if (gxn >= 0.0 && gxn <= 1.0 && abs(gy) <= 0.0008 * (1. - gxn * gxn)) {
          vec3 thisGrassColor = getGrassColor(hash12(grassPos * 2631.6));
          color = vec4(thisGrassColor * (.2 + 0.8 * gxn), 1.0);
        return grassVector3.z * gxn;
      }
      else {
          color = vec4(0., 0., 0., 1.);
          return -1.0;
      }
  }

  float getPoint(in vec2 position, out vec4 color) {
      int xcount = int(1. / BLADES_SPACING);
      int ycount = int(1. / BLADES_SPACING);
      int ox = int(position.x * float(xcount));
      int oy = int(position.y * float(ycount));

      float maxz = 0.0;

      for (int i = -LOOKUP_DIST; i < LOOKUP_DIST; ++i) {
          for (int j = -LOOKUP_DIST; j < LOOKUP_DIST; ++j) {
              vec2 upos = vec2(ox + i, oy + j);
              vec2 grassPos = (upos * BLADES_SPACING + hash22(upos) * JITTER_MAX);

              vec4 tempColor;
              float z = getGrassBlade(position, grassPos, tempColor);

              if (z > maxz) {
                  maxz = z;
                  color = tempColor;
              }
          }
      }
      if (maxz == 0.0) {
          color = vec4(0.);
      }

      return maxz;
  }

  void main() {
      vec4 color;
      float z = getPoint(vUv, color);
      gl_FragColor = color;
  }
`,z=a((r=8.5,o=4.2)=>{const t=new u({vertexShader:S,fragmentShader:P,side:h});return new y(new _(r,o,64,64),t)},"createGrass"),A={id:"Grass"},c=d({__name:"index",setup(r){let o=null;return m(()=>{o&&cancelAnimationFrame(o),e.remove.apply(e,e.children)}),g(()=>{i.zoom=1;const t=z(2e3,1600);e.add(t),new G(5e3);const n=document.getElementById("Grass");n&&n.appendChild(s.domElement);const p=a(()=>{s.render(e,i),i.updateProjectionMatrix(),o=requestAnimationFrame(p)},"render");p()}),v(()=>{var n;console.log("onBeforeUpdate"),s.clear(),e.remove.apply(e,e.children),e.remove.apply(e,e.children),s.forceContextLoss(),cancelAnimationFrame(o);const t=s.domElement.getContext("webgl");t&&((n=t.getExtension("WEBGL_lose_context"))==null||n.loseContext())}),(t,n)=>(f(),x("div",A))}});c.__docgenInfo={exportName:"default",displayName:"grass",description:"",tags:{}};const w={parameters:{storySource:{source:`import Grass from './components/grass/index.vue';
// import { Button } from '../components/index.ts';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Example/Grass',
  component: Grass,
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
  components: { Grass },
  setup() {
    /**
     * 复制此处代码
     * -----------------------------------------------------------------
     * 
      import { createGrass } from '@candelas/vue_three_components'

      const Grass = createGrass(2000, 1600)
      scene.add( Grass );
     *
     * -----------------------------------------------------------------
     * 复制此处代码
     */
    return { args };
  },
  template: '<Grass v-bind="args" />',
});

export const Index = Template.bind({});
Index.args = {
  width: 2000,
  height: 1600,
};
`,locationsMap:{index:{startLoc:{col:17,line:21},endLoc:{col:2,line:39},startBody:{col:17,line:21},endBody:{col:2,line:39}}}}},title:"Example/Grass",component:c,argTypes:{width:{type:Number,default:2e3},height:{type:Number,default:1600}}},b=a(r=>({components:{Grass:c},setup(){return{args:r}},template:'<Grass v-bind="args" />'}),"Template"),C=b.bind({});C.args={width:2e3,height:1600};const M=["Index"];export{C as Index,M as __namedExportsOrder,w as default};
//# sourceMappingURL=Grass.stories-32a147a7.js.map
