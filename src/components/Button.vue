<template>
  <v-btn color="#55c5ff" outlined>{{ text }}</v-btn>
</template>

<script>
export default {
  props: ["text"],
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

.v-btn__content {
  font-family: "Roboto", sans-serif;
  font-size: 18px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
}
</style>
