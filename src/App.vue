<script setup lang="ts">
import { ref, onMounted } from 'vue';
import GenSelection from './components/GenSelection.vue';
import GameComponent from './components/GameComponent.vue';
import * as Pokedex from 'pokeapi-js-wrapper';
// const pokedex = require("pokeapi-js-wrapper");

let pokemons = ref(null);
let gameInProgress = ref(false);
let currentGen = ref(0);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let pokedex: any;

const nameReplacements = {
  "nidoran-f": "nidoran♀",
  "nidoran-m": "nidoran♂",
  farfetchd: "farfetch'd",
  "mime-jr": "mime jr",
  "mr-mime": "mr mime",
}


onMounted(() => {
  pokedex = new Pokedex.Pokedex();
});

const selectGen = (gen: number) => {
  if (gen == currentGen.value) {
    return;
  }
  if (gameInProgress.value) {
    if (
      !confirm(
        "Are you sure you want to change the generation? The game will be reset."
      )
    ) {
      return;
    }
  }

  gameInProgress.value = false;
  currentGen.value = gen;
  /* eslint-disable @typescript-eslint/no-explicit-any */
  pokedex.getPokedexByName(gen).then((data: any) => {
    pokemons.value = data.pokemon_entries.map((pokemon: any) => {
      return {
        number: pokemon.entry_number,
        name: nameReplacements[pokemon.pokemon_species.name]
          ? nameReplacements[pokemon.pokemon_species.name]
          : pokemon.pokemon_species.name,
        found: false,
      };
    });
  });

  /* eslint-enable @typescript-eslint/no-explicit-any */
}
</script>

<template>
  <GenSelection @select-gen="selectGen"/>
  <GameComponent v-if="currentGen != 0" @start-game="gameInProgress = true" :pokemons="pokemons" />
</template>

<style scoped>
@import "@/assets/base.css";

#app {
  width: 80%;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.game-title {
  text-align: center;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  body {
    display: flex;
  }

  #app {
    /* display: grid;
    grid-template-columns: 1fr 1fr; */
    padding: 0 2rem;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
