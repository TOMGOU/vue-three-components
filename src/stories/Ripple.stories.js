import Ripple from './components/ripple/index.vue';
// import { Button } from '../components/index.ts';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Example/Ripple',
  component: Ripple,
  argTypes: {
    url: { 
      control: 'text',
      default: './assets/sign-in_bg.png'
    },
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
  components: { Ripple },
  setup() {
    /**
     * 复制此处代码
     * -----------------------------------------------------------------
     * 
      import { createRipple } from '@candelas/vue_three_components'

      const Ripple = createRipple('/texture/sign-in_bg.png', 2000, 1600)
      scene.add( Ripple );
     *
     * -----------------------------------------------------------------
     * 复制此处代码
     */
    return { args };
  },
  template: '<Ripple v-bind="args" />',
});

export const Index = Template.bind({});
Index.args = {
  url: '/texture/sign-in_bg.png',
  width: 2000,
  height: 1600,
};
