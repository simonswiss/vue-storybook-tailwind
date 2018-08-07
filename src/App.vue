<template>
  <div id="app" class="max-w-md mx-auto px-4 py-8 font-sans leading-normal">
    <h1 class="text-3xl text-purple-darker leading-tight font-black mb-6">Component library with Vue, Tailwind and Storybook</h1>
    <Button @click="handleClick('https://vue-storybook-tailwind-demo.netlify.com')" class="mr-2 mb-2" color="purple">Check live demo</Button>
    <Button @click="handleClick('https://github.com/simonswiss/vue-storybook-tailwind')" class="mr-2 mb-2" color="indigo">View on GitHub</Button>

    <p class="text-grey darker mt-2"><span class="text-3xl">☝</span>️ See a live demo or go get the github repo!</p>
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
    handleClick(url) {
      window.location.href = url;
    }
  }
};
</script>