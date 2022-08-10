<template>
  <div>
    <p>Время - {{ timer | timerFormat }}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import timerFormat from "@/helpers/timerFormat";

export default {
  filters: {
    timerFormat,
  },
  computed: {
    ...mapGetters({
      timer: "timer",
    }),
  },
};
</script>
