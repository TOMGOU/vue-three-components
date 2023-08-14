import Circle from './components/circle/index.vue';
// import { Button } from '../components/index.ts';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Example/Circle',
  component: Circle,
  argTypes: {
    size: {
      type: Number,
      default: 20
    },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  components: { Circle },
  setup() {
    /**
     * 复制此处代码
     * -----------------------------------------------------------------
     * 
      import { createWaveCircle } from '@candelas/vue_three_components'

      const CircleMesh = createWaveCircle(20)
      CircleMesh.position.z = 0
      CircleMesh.rotateX(Math.PI / 2)
      scene.add( CircleMesh );
     *
     * -----------------------------------------------------------------
     * 复制此处代码
     */
    return { args };
  },
  template: '<Circle v-bind="args" />',
});

export const Index = Template.bind({});
Index.args = {
  size: 20,
};
