<template>
  <div class="info">
    <div class="info__item">
      <v-icon class="info__icon">mdi-timer-outline</v-icon>
      <span>Время</span>
    </div>
    <p class="info__value">{{ timer | timerFormat }}</p>

    <div class="info__item">
      <v-icon class="info__icon">mdi-speedometer-slow</v-icon>
      <span>Скорость</span>
    </div>
    <p class="info__value">{{ speed | speedFormat }}</p>

    <div class="info__item">
      <v-icon class="info__icon">mdi-bullseye-arrow</v-icon>
      <span>Точность</span>
    </div>
    <p class="info__value">{{ accuracy | accuracyFormat }}</p>

    <div class="info__item">
      <v-icon class="info__icon">mdi-alert</v-icon>
      <span>Количество ошибок</span>
    </div>
    <p class="info__value">{{ countError }}</p>

    <Button @click.native="resetGame" :text="'Заново'" />
  </div>
</template>

<script>
import Button from "@/components/Button";
import { mapGetters, mapMutations, mapActions } from "vuex";
import {
  timerFormat,
  speedFormat,
  accuracyFormat,
} from "@/helpers/numberFormat";

export default {
  filters: {
    timerFormat,
    speedFormat,
    accuracyFormat,
  },
  components: { Button },
  computed: {
    ...mapGetters(["timer", "speed", "accuracy", "countError"]),
  },
  methods: {
    ...mapMutations(["reset"]),
    ...mapActions(["loadText"]),
    resetGame() {
      this.loadText();
      this.reset();
    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

.info {
  margin-left: 100px;
  font-family: "Roboto", sans-serif;
  min-width: 200px;

  &__item {
    display: flex;
    align-items: center;
    font-size: 20px;
  }

  &__icon {
    margin-right: 10px;
  }

  &__value {
    margin-bottom: 20px;
    font-size: 32px;
    color: #55c5ff;
  }
}
</style>
