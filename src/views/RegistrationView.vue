<script setup lang="ts">
import RegistrationForm from '../components/RegistrationForm.vue'

</script>

<template>
  <main>
    <div class="registration">
      <h1>This is the REGISTRATION page</h1>
    </div>

    <RegistrationForm />

  </main>
</template>

<style>
@media (min-width: 1024px) {
  .registration {
    text-align: center;
  }
}
</style>
