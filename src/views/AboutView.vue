<script lang="ts">
export default {
  data() {
    return {
      checked: false,
    };
  },
};
</script>

<template>
  <div class="about">
    <h1>This is the about page</h1>
    <v-container>
      <v-checkbox label="Check me"></v-checkbox>
      <v-checkbox label="Check me too"></v-checkbox>
    </v-container>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    text-align: center;
  }
}
</style>
