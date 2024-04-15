<script setup lang="ts">
import LoginForm from '../components/LoginForm.vue'

</script>

<template>
  <main>
    <div class="registration">
      <h1>This is the LOGIN page</h1>
    </div>

    <LoginForm />

  </main>
</template>

<style>
@media (min-width: 1024px) {
  .registration {
    text-align: center;
  }
}
</style>
