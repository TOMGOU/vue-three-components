import Wave from './components/wave/index.vue';
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
