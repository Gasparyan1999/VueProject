<template>
  <div class="card" v-for="num in numbers" :key="num.id">
    <h3 class="delete" v-on:click="remove(num.id)">✖</h3>
    <h2 class="number">{{ num.num }}</h2>
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
    numbers: {
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
.delete {
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
