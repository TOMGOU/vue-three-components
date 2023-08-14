import Radar from './components/radar/index.vue';
// import { Button } from '../components/index.ts';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Example/Radar',
  component: Radar,
  argTypes: {
    size: {
      type: Number,
      default: 100
    },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  components: { Radar },
  setup() {
    /**
     * 复制此处代码
     * -----------------------------------------------------------------
     * 
      import { createRadar } from '@candelas/vue_three_components'

      const RadarMesh = createRadar(100)
      RadarMesh.position.z = 0
      RadarMesh.rotateX(Math.PI / 2)
      scene.add( RadarMesh );
     *
     * -----------------------------------------------------------------
     * 复制此处代码
     */
    return { args };
  },
  template: '<Radar v-bind="args" />',
});

export const Index = Template.bind({});
Index.args = {
  size: 100,
};
