import Flame from './components/flame/index.vue';
// import { Button } from '../components/index.ts';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Example/Flame',
  component: Flame,
  argTypes: {
    size: {
      type: Number,
      default: 250
    },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  components: { Flame },
  setup() {
    /**
     * 复制此处代码
     * -----------------------------------------------------------------
     * 
      import { createFlameMesh } from '@candelas/vue_three_components'

      const FlameMesh = createFlameMesh(20, 0x00ff00)
      FlameMesh.position.z = 0
      FlameMesh.rotateX(Math.PI / 2)
      scene.add( FlameMesh );
     *
     * -----------------------------------------------------------------
     * 复制此处代码
     */
    return { args };
  },
  template: '<Flame v-bind="args" />',
});

export const Index = Template.bind({});
Index.args = {
  size: 250,
};
