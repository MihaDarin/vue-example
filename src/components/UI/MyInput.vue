<template>
  <input type="text" :value="value" @input="updateInput" />
</template>

<script>
export default {
  name: "my-input",
  props: {
    value: [String, Number],
  },
  methods: {
    updateInput(event) {
      this.$emit("update:value", event.target.value);
    },
  },
};
</script>

<style scoped></style>
