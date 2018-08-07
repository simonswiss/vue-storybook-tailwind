<template>
  <button 
    class="py-3 px-4 text-white font-semibold shadow rounded" 
    :class="`bg-${color} hover:bg-${color}-light`">
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