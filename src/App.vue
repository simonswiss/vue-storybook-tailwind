<template>
  <div id="app" class="max-w-md mx-auto px-4 py-8 font-sans leading-normal">
    <h1 class="text-3xl text-purple-darker leading-tight font-black mb-6">Component library with Vue, Tailwind and Storybook</h1>
    <Button @click="handleClick" class="mr-2 mb-2" color="purple">How</Button>
    <Button @click="handleClick" class="mr-2 mb-2" color="indigo">cool</Button>
    <Button @click="handleClick" class="mr-2 mb-2" color="blue">is this</Button>
    <Button @click="handleClick" class="mr-2 mb-2" color="teal">huh?</Button>

    <p class="text-grey darker mt-2"><span class="text-3xl">☝</span>️ Pick your flavour - they all take you to the same github repo!</p>
  </div>
</template>

<script>
import Button from "./components/Button";
// Importing Tailwind CSS throughtout the whole app
import "@/assets/styles/main.scss";

export default {
  name: "app",
  components: {
    Button
  },
  methods: {
    handleClick() {
      window.location.href = "https://vue-storybook-tailwind.netlify.com/";
    }
  }
};
</script>