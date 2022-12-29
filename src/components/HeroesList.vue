<template>
  <div v-if="heroes.length > 0">
    <h3>Список Супергероев</h3>
    <hero-item
      v-for="hero in heroes"
      :hero="hero"
      :key="hero.id"
      @remove="$emit('remove', hero)"
    />
  </div>
  <div v-else>
    <h3>Список пуст</h3>
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

<style scoped></style>
