<template>
  <form class="form" @submit.prevent>
    <h3 class="h3">Создание карточки</h3>
    <input v-model="hero.heroName" class="input" type="text" placeholder="Hero Name" />
    <input v-model="hero.superpower" class="input" type="text" placeholder="Super Power" />
    <input v-model="hero.universe" class="input" type="text" placeholder="Universe" />
    <button @click="createHero">Создать</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      hero: {
        heroName: "",
        superpower: "",
        universe: "",
      },
    };
  },
  methods: {
    createHero() {
      this.hero.id = Date.now();
      this.$emit("create", this.hero);
      this.hero = {
        heroName: "",
        superpower: "",
        universe: "",
      };
    },
  },
};
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 20em;
  height: 10em;
  font-size: 20px;
  border: 5px solid blue;
  padding: 5px;
}
.h3 {
  margin: 0px auto;
}
.input {
  font-size: 20px;
}
</style>
