import Pyramid from './components/pyramid/index.vue';
// import { Button } from '../components/index.ts';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Example/Pyramid',
  component: Pyramid,
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
  components: { Pyramid },
  setup() {
    /**
     * 复制此处代码
     * -----------------------------------------------------------------
     * 
      import { createPyramidMesh } from '@candelas/vue_three_components'

      const PyramidMesh = createPyramidMesh(20, '#22ffcc')
      PyramidMesh.position.z = 0
      PyramidMesh.rotateX(Math.PI / 2)
      scene.add( PyramidMesh );
     *
     * -----------------------------------------------------------------
     * 复制此处代码
     */
    return { args };
  },
  template: '<Pyramid v-bind="args" />',
});

export const Index = Template.bind({});
Index.args = {
  size: 60,
  color: '#22ffcc',
};
