import FlowingLine from './components/flowingLine/index.vue';
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
