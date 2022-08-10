<template>
  <div>
    <h1>Главная страница</h1>
    <TextCheck />
    <Info />
  </div>
</template>

<script>
import TextCheck from "@/components/TextCheck";
import Info from "@/components/Info";
import { mapGetters, mapMutations } from "vuex";

export default {
  components: { TextCheck, Info },
  data() {
    return {
      currentTimer: null,
    };
  },
  watch: {
    currentSymbol() {
      if (this.currentSymbol === undefined) this.stopTimer();
    },
  },
  computed: {
    ...mapGetters({
      currentSymbol: "currentSymbol",
    }),
  },
  methods: {
    ...mapMutations(["updateTimer"]),
    startTimer() {
      this.currentTimer = setInterval(() => {
        this.updateTimer();
      }, 1000);
    },
    stopTimer() {
      clearTimeout(this.currentTimer);
    },
  },
  created() {
    this.startTimer();
  },
};
</script>

<style lang="scss"></style>
