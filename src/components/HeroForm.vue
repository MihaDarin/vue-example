<template>
  <form class="form" @submit.prevent>
    <h3 class="h3">Создание карточки</h3>
    <my-input
      v-model:value="hero.heroName"
      class="input"
      type="text"
      placeholder="Hero Name"
    />
    <my-input
      v-model:value="hero.superpower"
      class="input"
      type="text"
      placeholder="Super Power"
    />
    <my-input
      v-model:value="hero.universe"
      class="input"
      type="text"
      placeholder="Universe"
    />
    <my-button
      class="my_button"
      @click="createHero"
      >Создать</my-button
    >
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
.my_button {
  width: max-content;
  padding: 10px;
  align-self: center;
}
</style>
