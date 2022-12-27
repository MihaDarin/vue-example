<template>
  <div class="hero">
    <div>
      <h2 class="card_head">{{ hero.heroName }}</h2>
      <div class="section">
        <span class="title">Superpower:</span>
        <span>{{ hero.superpower }}</span>
      </div>
      <div class="section">
        <span class="title">Universe:</span>
        <span>{{ hero.universe }}</span>
      </div>
    </div>
    <div class="btns">
      <button>Удалить</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    hero: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  font-size: 20px;
  width: 15em;
  background-color: rgba(0, 38, 255, 0.733);
  color: white;
  margin: 20px;
}
.section {
  display: flex;

  justify-content: space-between;
  padding: 0 20px;
  margin: 5px 5px;
  width: 100%;
}
.card_head {
  display: flex;
  justify-content: center;
}
</style>
