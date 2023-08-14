import Grass from './components/grass/index.vue';
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
