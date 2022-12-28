<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "my-button",
};
</script>

<style scoped>
.button {
  background-color: rgba(0, 0, 255, 0.692);
  border: 2px solid orange;
  color: white;
}
</style>
