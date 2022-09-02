<template>
  <div class="card" v-for="elements in numbersArray" :key="elements.id">
    <h3 class="deleteButton" v-on:click="remove(elements.id)">✖</h3>
    <h2 class="number">{{ elements.num }}</h2>
  </div>
</template>

<script>

import { useNumberStore } from "../store/store";

export default {
  setup() {
    const number = useNumberStore();
    const { remove } = number;
    return { remove };
  },
  props: {
    numbersArray: {
      type: Array,
      require: true,
    },
  },
};
</script>

<style>
.card {
  position: relative;
  display: flex;
  width: 170px;
  height: 100px;
  align-items: center;
  justify-content: center;
  border: solid 1px black;
}
.deleteButton {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 10px;
  top: 1px;
  width: 25px;
  height: 25px;
  font-size: 20px;
  cursor: pointer;
}
</style>
