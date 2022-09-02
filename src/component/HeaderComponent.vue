<template>
  <div class="header">
    <button v-on:click="add">Add Card</button>
    <button v-on:click="sort">Sort Cards</button>
  </div>
</template>

<script>
import { useNumberStore } from "../store/store";

export default {
  setup() {
    const number = useNumberStore();

    const { add, sort } = number;
    return { add, sort };
  },
};
</script>

<style>
.header {
  display: flex;
  width: 100%;
  height: 10%;
  align-items: center;
  border-bottom: solid 1px black;
  column-gap: 35px;
}
button {
  background-color: white;
  width: 100px;
  height: 45px;
  cursor: pointer;
}
</style>
