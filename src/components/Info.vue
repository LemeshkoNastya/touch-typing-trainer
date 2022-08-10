<template>
  <div>
    <p>Время - {{ timer | timerFormat }}</p>
    <p>Скорость - {{ speed | speedFormat }}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { timerFormat, speedFormat } from "@/helpers/numberFormat";

export default {
  filters: {
    timerFormat,
    speedFormat,
  },
  computed: {
    ...mapGetters({
      timer: "timer",
      speed: "speed",
    }),
  },
};
</script>
