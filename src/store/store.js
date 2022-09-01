import { defineStore } from "pinia";

if (!localStorage.getItem("card"))
  localStorage.setItem("card", JSON.stringify([]));

export const useNumberStore = defineStore({
  id: "numbers",
  state: () => ({ array: JSON.parse(localStorage.getItem("card")) }),
  actions: {
    add() {
      this.array.push({
        num: Math.floor(Math.random() * 1000),
        id: Date.now() + Math.random() * 1000,
      });
      localStorage.setItem("card", JSON.stringify(this.array));
    },
    sort() {
      this.array.sort((a, b) => a.num - b.num);
      localStorage.setItem("card", JSON.stringify(this.array));
    },
    remove(id) {
      this.array = this.array.filter((elem) => elem.id != id);
      localStorage.setItem("card", JSON.stringify(this.array));
    },
  },
});
