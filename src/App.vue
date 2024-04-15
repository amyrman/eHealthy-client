// TODO: Add v-app-bar

<script setup lang="ts">
import { RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
    <header>
        <nav>
          <v-btn :to="'/'">Home</v-btn>
          <v-btn :to="'/about'">About</v-btn>
          <v-btn :to="'/registration'">Registration</v-btn>
          <v-btn :to="'/login'">Login</v-btn>
          <v-btn :to="'/dashboard'">Dashboard</v-btn>
        </nav>
    </header>

  <RouterView />
</template>

<style scoped>
header {
  top: 0;
  width: 100%;
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}
</style>
