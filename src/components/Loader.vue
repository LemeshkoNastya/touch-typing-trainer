<template>
  <div class="loader">
    <v-progress-circular
      size="100"
      indeterminate
      color="#55c5ff"
      :width="this.$vuetify.breakpoint.width < 960 ? 8 : 15"
    ></v-progress-circular>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.loader {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
