<template>
  <div>
    <p>Время - {{ timer | timerFormat }}</p>
    <p>Скорость - {{ speed | speedFormat }}</p>
    <p>Точность - {{ accuracy | accuracyFormat }}</p>
    <p>Количество ошибок - {{ countError }}</p>
    <button @click="resetGame">Заново</button>
  </div>
</template>

<script>
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
