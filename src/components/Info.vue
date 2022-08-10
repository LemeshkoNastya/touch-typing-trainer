<template>
  <div>
    <p>Время - {{ timer | timerFormat }}</p>
    <p>Скорость - {{ speed | speedFormat }}</p>
    <p>Точность - {{ accuracy | accuracyFormat }}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
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
    ...mapGetters({
      timer: "timer",
      speed: "speed",
      accuracy: "accuracy",
    }),
  },
};
</script>
