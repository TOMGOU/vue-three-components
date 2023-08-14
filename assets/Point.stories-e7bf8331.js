var d=Object.defineProperty;var l=(t,r)=>d(t,"name",{value:r,configurable:!0});import{d as f,o as m,a as u,b as A,e as g,f as x}from"./vue.esm-bundler-42103fc0.js";import{i as P,T as y,f as S,j as B,s as o,c,A as O,r as i}from"./three-15c9ae80.js";const h="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAAAXNSR0IArs4c6QAABP1JREFUWAnNWE1Mo0UYpruFTYC0upC1VGlAcBcrAhckKO3NAwGbCBwMxMCBZDcS4cK1ySa9ciEGIwkXYrbxQDkghIM3ihLlwp8rGhDCT4sGWLcBEoFdfJ7yDQ4fMwXquumXTGfmnfd95ul8M++872dJS+I5OTnJg5kPxYPyOorTKKjSIkbZRB1GGbFYLFHU13osV9UGmVvQvY/SfHh4+O7y8vLjmZmZX9fX15+srq7GlpaWnmLMUlxcbCsoKLDl5+e/WlFRca+oqMidkZExj7EgSj9I/o360udSYiB0AygtKAGQeTo8PBweGhr6HeSeX4oOBZC60dTU9GZDQ4MHJO0Q+VEegWBC+4TEQMoFkNDW1tbtgYGBb0Oh0Cr6ST+NjY0F7e3tHzkcjl2ANILcmg5MSwykPkAJjY2N/eD3+yd0AMnIA4GAt66u7n0QI7nvVRhKYiD0ydHR0Vd9fX3BwcHB31SG/1XW2tp6t6Ojozk9Pf0ByH1jxrtAjCsFUmPd3d1fTkxM/Gk2eJF9r9d7p6en5zOQqzOv3DliIOVC+am3t3f4spWy2WxWl8uV5XQ6szIzM9OxyW+SNA7Fs4ODg6NIJLK/tra2H4vFjhP9mba2tnudnZ0fg9h7KGd77owYCPH0/Tg6OrqeaE9lZ2ffhBvIASlbognFGMjF4FZ29vb2ngmZueaeq6+vz4e8CuTip1Um9ilO38Pa2tovzIaiX1hYmFVZWfma1Wrln7jyc3x8/Hx6evqPlZWVfZ3R+Pj45zitD0Hsa+rEJ8Bq0XkG6BJ0hmVlZa9UV1fnXZcU8WhDW2Lo8I25AwaXU2JQvk/nqfNTXKnS0tJcHehV5cQglkqfc5MDuXBcvJIWenSVAfcUX59qLBkZsYipsjU4NHPMgqXLw0la8ng8ftU1U1NTcyfRRseRd5eUlLyNyW4TEJt8d3Fx8Re4msfsqx4eiMnJyQuuiNdXOBwOoC62wtCHC/hnFSnDJShPX05OTqbP5/swNzf3DXlyu93uqKqqcuBefGtkZOS7nZ2dA3mcbf5RPLtmV0IO5OJ2u318lV4cZ6V3p58yg4q+ipQYY03C1JFlcluHPTs7Sy5eEnNubGw8kY1Em85TtOWar8+8UvK4aFOHuqIv1zpshlHQc8aJMZ6SjUSbHl205Zp7Su4naut0ddgGl1NiRpB3AV9cM+YBsdHNclVfp6vDNrjEiZ0A8OwGUIG/ZBm5xO/HKMNh1eQ4Jcr7jS5Bpa+S6XR12AaXKPdYhDG6CpRRgkpOP6WSq2Q6XR22wSVCYptMHFSgDF1UcjrP7e3tDdWYLKOOztHqsA0umyQWLi8vvysDijbjKdE213SeichxjDpmO9HXYTOzgk44da8kxD9R3JfzTLGCweCS+EeiZpAHZ5itC3f4qnSvS2DINWMzYsoy0SYHuJF5cuKr5BNk3nfaPP/LyJNB3nlp8j1iEVOFYHBgYnwW9vQzGWXepzJg5LmwsLCtGruOjBi6KJZzGwlxPzHjK4alY9ruZzKqm2hubu6vqampKF+FTkcnpw1tiaHTMeb2G1z+9fjYZySZeskI/wnIvfT0jYlvV1dXA1ZKnb6JJQa51Et4JXKp94lAIpd6H1Ukcqn3GUoix9OaWh/uBDnWOBTM1pmMtiCWKmU2wySG+YL0qTMN8ZRdfOpkcID+O7hmFmD3COXFfeoE2IUHJP/3j8P/AChL8P5SmZalAAAAAElFTkSuQmCC",C=l((t=60,r="#ffffff")=>{const a=new P({map:new y().load(h),transparent:!0,color:new S(r)}),n=new B(a);n.scale.set(t,t,1);let e=0;const s=l(()=>{e+=.01,e<.5?(n.scale.x=t*(1+e),n.scale.y=t*(1+e)):e>=.5&&e<1?(n.scale.x=t*(2-e),n.scale.y=t*(2-e)):e=0,requestAnimationFrame(()=>s())},"waveAnimation");return s(),n},"createPointTag"),M={id:"Point"},p=f({__name:"index",props:{size:{type:Number,default:60,required:!1},color:{type:String,default:"#ffffff",required:!1}},setup(t){const r=t;let a=null;return m(()=>{a&&cancelAnimationFrame(a),o.remove.apply(o,o.children)}),u(()=>{c.zoom=1;const n=C(r.size,r.color);n.position.z=0,o.add(n),new O(5e3);const e=document.getElementById("Point");e&&e.appendChild(i.domElement);const s=l(()=>{i.render(o,c),c.updateProjectionMatrix(),a=requestAnimationFrame(s)},"render");s()}),A(()=>{var e;console.log("onBeforeUpdate"),i.clear(),o.remove.apply(o,o.children),o.remove.apply(o,o.children),i.forceContextLoss(),cancelAnimationFrame(a);const n=i.domElement.getContext("webgl");n&&((e=n.getExtension("WEBGL_lose_context"))==null||e.loseContext())}),(n,e)=>(x(),g("div",M))}});p.__docgenInfo={exportName:"default",displayName:"point",description:"",tags:{},props:[{name:"size",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"60"}},{name:"color",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"'#ffffff'"}}]};const Z={parameters:{storySource:{source:`import Point from './components/point/index.vue';
// import { Button } from '../components/index.ts';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Example/Point',
  component: Point,
  argTypes: {
    size: {
      type: Number,
      default: 60
    },
    color: { 
      control: 'color',
      default: '#15de1d'
    },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  components: { Point },
  setup() {
    /**
     * 复制此处代码
     * -----------------------------------------------------------------
     * 
      import { createPointTag } from '@candelas/vue_three_components'

      const PointMesh = createPointTag(60)
      scene.add( PointMesh );
     *
     * -----------------------------------------------------------------
     * 复制此处代码
     */
    return { args };
  },
  template: '<Point v-bind="args" />',
});

export const Index = Template.bind({});
Index.args = {
  size: 60,
  color: '#ffffff'
};
`,locationsMap:{index:{startLoc:{col:17,line:21},endLoc:{col:2,line:39},startBody:{col:17,line:21},endBody:{col:2,line:39}}}}},title:"Example/Point",component:p,argTypes:{size:{type:Number,default:60},color:{control:"color",default:"#15de1d"}}},T=l(t=>({components:{Point:p},setup(){return{args:t}},template:'<Point v-bind="args" />'}),"Template"),v=T.bind({});v.args={size:60,color:"#ffffff"};const j=["Index"];export{v as Index,j as __namedExportsOrder,Z as default};
//# sourceMappingURL=Point.stories-e7bf8331.js.map
