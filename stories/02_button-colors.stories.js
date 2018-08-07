import { storiesOf } from "@storybook/vue";
import Button from "../src/components/Button";

storiesOf("Button Colors", module)
  .add("All", () => ({
    components: {
      Button
    },
    template: `
  <div class="m-8">
    <Button color="purple">Purr pl</Button>
    <Button color="indigo">Indie go go!</Button>
    <Button color="blue">Blooo</Button>
    <Button color="teal">TIL</Button>
  </div>
    `
  }))
  .add("Purple", () => ({
    components: {
      Button
    },
    template: `
  <div class="m-8">
    <Button color="purple">Purr pl</Button>
  </div>
    `
  }))
  .add("Indigo", () => ({
    components: {
      Button
    },
    template: `
  <div class="m-8">
    <Button color="indigo">Indie go go!</Button>
  </div>
    `
  }))
  .add("Blue", () => ({
    components: {
      Button
    },
    template: `
  <div class="m-8">
    <Button color="blue">Blooo</Button>
  </div>
    `
  }))
  .add("Teal", () => ({
    components: {
      Button
    },
    template: `
  <div class="m-8">
    <Button color="teal">TIL</Button>
  </div>
    `
  }));
