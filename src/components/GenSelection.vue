<script setup lang="ts">
import { ref, defineEmits } from 'vue';

  const generation = ref(0);
  defineEmits(['selectGen'])
// export default defineComponent({
//   name: 'HelloWorld',
//   props: {
//     msg: String,
//   },
// });
</script>

<template>
  <div>
    <h4 class="m-auto">
      Choose the pokemon generation pokedex(or national dex)
    </h4>
    <div class="m-auto select-form">
      <select class="select" v-model="generation">
        <option disabled value="">Choose pokedex</option>
        <option value="1">National</option>
        <option value="2">Gen 1 (Kanto)</option>
        <option value="3">Gen 2 (Johto)</option>
        <option value="4">Gen 3 (Hoenn)</option>
        <option value="5">Gen 4 (Sinnoh)</option>
        <option value="6">Gen 5 (Unova)</option>
        <option value="7">Gen 6 (Kalos)</option>
        <option value="8">Gen 7 (Alola)</option>
        <option value="9">Gen 8 (Galar)</option>
      </select>
      <button class="confirm" @click="$emit('selectGen', generation)">
        Select gen
      </button>
    </div>
  </div>
</template>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.m-auto {
  width: fit-content;
  margin: auto;
}

.select {
  padding: 0.5em;
  border-radius: 5px;
  margin-right: 1rem;
}

.select-form {
  margin-top: 15px;
}
.confirm {
  padding: 0.5rem;
  border-radius: 10px;
  border: 0;
}
</style>
