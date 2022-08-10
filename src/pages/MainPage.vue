<template>
  <div class="app">
    <h1 class="app__title">Тренажёр слепой печати</h1>
    <Button
      v-if="!showTrainer"
      @click.native="startGame"
      :text="'Начать тестирование'"
    />

    <Loader v-else-if="loading" />
    <Notification v-else-if="errorLoading" :text.sync="errorLoading" />
    <div v-else class="app__content">
      <TextCheck />
      <Info />
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button";
import Loader from "@/components/Loader";
import Notification from "@/components/Notification";
import TextCheck from "@/components/TextCheck";
import Info from "@/components/Info";
import { mapGetters, mapMutations, mapActions } from "vuex";

export default {
  components: { Button, Loader, Notification, TextCheck, Info },
  data() {
    return {
      currentTimer: null,
      showTrainer: false,
    };
  },
  watch: {
    currentSymbol() {
      if (this.currentSymbol === undefined) this.stopTimer();
    },
    loading() {
      if (!this.loading) this.startTimer();
    },
  },
  computed: {
    ...mapGetters(["currentSymbol", "loading", "errorLoading"]),
  },
  methods: {
    ...mapMutations(["updateTimer"]),
    ...mapActions(["loadText"]),
    startTimer() {
      this.showTrainer = true;
      this.currentTimer = setInterval(() => {
        this.updateTimer();
      }, 1000);
    },
    stopTimer() {
      clearTimeout(this.currentTimer);
    },
    startGame() {
      this.loadText();
    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

body {
  background: #95dcff;
  margin: 0;
}

.app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 100px auto;
  padding: 50px;
  font-family: "Roboto", sans-serif;
  background: white;
  border-radius: 20px;
  max-width: 1200px;

  &__title {
    margin-bottom: 50px;
    font-size: 36px;
  }

  &__content {
    display: flex;
    margin-top: 30px;
  }
}
</style>
