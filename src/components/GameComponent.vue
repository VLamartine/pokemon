<script setup lang="ts">
import { defineProps, defineEmits, ref } from 'vue';
const props = defineProps({
  pokemons: null,
});

const emit = defineEmits(['startGame']);
const guess = ref('');
const gameStarted = ref(false);

const startGame = () => {
  gameStarted.value = true;
  emit('startGame');
};

const onInputChange = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  props.pokemons.forEach((pokemon: any) => {
    if (pokemon.found) {
      return;
    }

    if (pokemon.name.toLowerCase() === guess.value.toLowerCase()) {
      pokemon.found = true;
      guess.value = '';
    }
  });
};
</script>

<template>
  <div class="game-header">
    <input
      :disabled="!gameStarted"
      class="name-input"
      v-model="guess"
      placeholder="Type the name"
      @input="onInputChange" />
    <button class="start-game" v-if="!gameStarted" @click="startGame">
      Start game
    </button>
  </div>
  <div class="list">
    <div v-for="pokemon in pokemons" :key="pokemon.number">
      <div class="pokemon">
        <span class="pokemon-number">{{ pokemon.number }}</span>
        <span class="pokemon-name">{{
          pokemon.found ? pokemon.name : ''
        }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.game-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  margin: 1rem auto;
}

.list {
  column-count: 1;
  column-fill: balance;
  column-gap: 0;
  width: 80%;
  margin: 0 auto;
}

.name-input {
  height: 50px;
  border-radius: 20px;
  padding: 1rem;
  width: 40%;
  flex-grow: 1;
  margin-right: 16px;
}

@media screen and (min-width: 768px) {
  .list {
    column-count: 4;
    column-fill: balance;
    column-gap: 0;
    width: 80%;
    margin: 0 auto;
  }
  .name-input {
    height: 50px;
    border-radius: 20px;
    padding: 1rem;
    width: 40%;
    flex-grow: 0;
    margin-right: 0;
  }
}

.pokemon {
  background: #fafad2;
  border: 1px solid #e6d2fa;
  width: 100%;
  color: black;
}

.pokemon-number {
  background: #8e6fad;
  width: 30%;
  display: inline-block;
  text-align: center;
  font-weight: bold;
}
.pokemon-name {
  text-transform: capitalize;
  display: inline-block;
  padding-left: 15px;
}

.break {
  flex-basis: 100%;
}

.start-game {
  border-radius: 20px;
  height: 35px;
  background: #52ff52;
}
</style>
