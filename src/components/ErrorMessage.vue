<template>
  <p v-if="message" class="error">{{ message }}</p>
</template>

<script lang="ts">
export default {
  props: {
    message: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.error {
  color: red;
  font-size: 0.8em;
  margin-top: 0.5em;
}
</style>
