import Noise from './components/noise/index.vue';
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
