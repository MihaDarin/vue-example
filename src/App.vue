<template>
  <div class="App_container">
    <hero-form @create="createHero" />
    <heroes-list :heroes="heroes" />
  </div>
</template>

<script>
import HeroesList from "@/components/HeroesList.vue";
import HeroForm from "@/components/HeroForm.vue";
export default {
  components: {
    HeroesList,
    HeroForm,
  },
  data() {
    return {
      heroes: [
        { id: 1, heroName: "Spider-Man", superpower: "Pautina", universe: "Marvel" },
        { id: 2, heroName: "Superman ", superpower: "Mnogo chego", universe: "DC" },
        {
          id: 3,
          heroName: "Reanimatolog posle smeny",
          superpower: "Coffee",
          universe: "Bolnichka",
        },
      ],
      heroName: "",
      superpower: "",
      universe: "",
    };
  },
  methods: {
    createHero(hero) {
      this.heroes.push(hero);
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.App_container {
  padding: 20px;
}
</style>
