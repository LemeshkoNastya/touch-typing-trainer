<template>
  <p>
    <span
      v-for="(symbol, index) in symbols"
      :key="index"
      class="symbol"
      :class="[
        { symbol_current: index === indexSymbol },
        { symbol_wrong: index === indexSymbol && isWrong },
        { symbol_correct: index < indexSymbol },
      ]"
      >{{ symbol }}</span
    >
  </p>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  watch: {
    indexSymbol() {
      this.wrongSymbol(false);
    },
  },
  computed: {
    ...mapGetters({
      symbols: "symbols",
      indexSymbol: "indexSymbol",
      currentSymbol: "currentSymbol",
      isWrong: "isWrong",
    }),
  },
  methods: {
    ...mapMutations(["updateIndexSymbol", "wrongSymbol"]),
    pressKey({ key }) {
      if (key !== "Shift") {
        if (this.currentSymbol !== key) {
          this.wrongSymbol(true);
        } else {
          this.updateIndexSymbol();
        }
      }
    },
  },
  created() {
    document.addEventListener("keydown", this.pressKey);
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

.symbol {
  font-family: "Roboto", sans-serif;
  line-height: 2;
  font-size: 24px;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  &_current {
    background: #5fd837;
    color: white;
    padding: 3px;
    border-radius: 3px;
  }

  &_wrong {
    background: #f43131;
  }

  &_correct {
    background: transparent;
    color: #5bc538;
    padding: 0;
  }
}
</style>
