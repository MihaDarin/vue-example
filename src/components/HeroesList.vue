<template>
  <div>
    <hero-item v-for="hero in heroes" :hero="hero" />
  </div>
</template>

<script>
import HeroItem from "./HeroItem.vue";
export default {
  components: { HeroItem },
  props: {
    heroes: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
</style>
