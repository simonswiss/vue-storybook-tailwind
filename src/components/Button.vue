<template>
  <button 
    class="py-3 px-4 text-white font-semibold shadow rounded focus:outline-none" 
    :class="`bg-${color} hover:bg-${color}-light`"
    @click="$emit('click')">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: "green"
    }
  }
};
</script>

<style scoped>
button:focus,
button:active {
  box-shadow: 0 0 0 3px #d7d3dc;
}
</style>