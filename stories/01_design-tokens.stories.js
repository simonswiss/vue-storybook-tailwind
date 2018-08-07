/* eslint-disable react/react-in-jsx-scope */
import { storiesOf } from "@storybook/vue";
// import { action } from "@storybook/addon-actions";
// import { linkTo } from "@storybook/addon-links";
// The produced Tailwind CSS output - only need to import in one file for all stories
import "../src/assets/styles/main.scss";

// The Tailwind config file, aka 'design tokens'
import TailwindConfig from "../tailwind";

// Set colors, sizes and weights in data to iterate through them!
storiesOf("Design Tokens", module)
  .add("Colors", () => ({
    data() {
      return {
        colors: TailwindConfig.colors
      };
    },
    template: `
    <div class="flex flex-wrap m-8">
      <div v-for="(value, key) in colors" class="w-32 mb-2 hover-woof">
        <div :class="'rounded shadow h-6 w-16 bg-' + key">
        </div>
        <p class="text-xs text-grey mt-2 uppercase">{{ key }}</p>
      </div>
    </div>
    `
  }))
  .add("Font Sizes", () => ({
    data() {
      return {
        fontSizes: TailwindConfig.textSizes
      };
    },
    template: `
    <div class="m-8">
      <div v-for="(value, key) in fontSizes" class="mb-4">
        <p class="text-xs text-grey uppercase tracking-wide inline-block">{{ key }}</p>
        <p :class="'text-' + key">The quick brown fox jumps over the lazy dog</p>
      </div>
    </div>
  `
  }))
  .add("Font Weights", () => ({
    data() {
      return {
        fontWeights: TailwindConfig.fontWeights
      };
    },
    template: `
    <div class="m-8">
      <div v-for="(value, key) in fontWeights" class="mb-4">
        <p class="text-xs text-grey uppercase tracking-wide inline-block">{{ key }}</p>
        <p :class="'text-lg font-' + key">The quick brown fox jumps over the lazy dog</p>
      </div>
    </div>
    `
  }));

/* eslint-enable react/react-in-jsx-scope */
