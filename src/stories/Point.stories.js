import Point from './components/point/index.vue';
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
