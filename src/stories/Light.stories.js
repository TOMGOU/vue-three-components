import Light from './components/light/index.vue';
// import { Button } from '../components/index.ts';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Example/Light',
  component: Light,
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
  components: { Light },
  setup() {
    /**
     * 复制此处代码
     * -----------------------------------------------------------------
     * 
      import { createLight } from '@candelas/vue_three_components'

      const Light = createLight(2000, 1600)
      scene.add( Light );
     *
     * -----------------------------------------------------------------
     * 复制此处代码
     */
    return { args };
  },
  template: '<Light v-bind="args" />',
});

export const Index = Template.bind({});
Index.args = {
  width: 2000,
  height: 1600,
};
