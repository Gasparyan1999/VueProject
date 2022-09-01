import { defineStore } from "pinia";

export const useNumberStore = defineStore({
  id: "numbers",
  state: () => ({ array: [] }),
  actions: {
    add() {
      this.array.push({
        num: Math.floor(Math.random() * 1000),
        id: Date.now() + Math.random() * 1000,
      });
    },
    sort() {
      this.array.sort((a, b) => a.num - b.num);
    },
    remove(id) {
      this.array = this.array.filter((elem) => elem.id != id);
    },
  },
});
