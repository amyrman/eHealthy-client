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
      <v-checkbox v-model="checked" label="Check me"></v-checkbox>
    </v-container>
    <v-icon color="info" icon="$vuetify"></v-icon>
    <v-checkbox label="Checkbox"></v-checkbox>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    text-align: center;
  }
}
</style>
