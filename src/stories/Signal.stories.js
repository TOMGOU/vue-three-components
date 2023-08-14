import Signal from './components/signal/index.vue';
// import { Button } from '../components/index.ts';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Example/Signal',
  component: Signal,
  argTypes: {
    color: { 
      control: 'color',
      default: '#15de1d'
    },
    size: {
      type: Number,
      default: 2
    },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  components: { Signal },
  setup() {
    /**
     * 复制此处代码
     * -----------------------------------------------------------------
     * 
      import { createSignalMesh } from '@candelas/vue_three_components'

      const SignalMesh = createSignalMesh(20, 0x00ff00)
      SignalMesh.position.z = 0
      SignalMesh.rotateX(Math.PI / 2)
      scene.add( SignalMesh );
     *
     * -----------------------------------------------------------------
     * 复制此处代码
     */
    return { args };
  },
  template: '<Signal v-bind="args" />',
});

export const Index = Template.bind({});
Index.args = {
  size: 2,
  color: '#22ffcc',
};
