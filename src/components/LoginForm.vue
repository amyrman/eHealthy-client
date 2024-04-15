<script lang="ts">
import { emailRules, passwordRules } from '../utils/formRules'
import http from '../http-common'

export default {
  data: () => ({
    email: null,
    password: null,
    emailRules,
    passwordRules
  }),
  methods: {
    async submitForm() {
      try {
        const response = await http.post('/login', {
          email: this.email,
          password: this.password
        })
        // TODO: handle response...
      } catch (error) {
        // TODO: handle error...
      }
    }
  }
}
</script>

<template>
  <v-card class="mx-auto" max-width="344" title="User Login">
    <v-form @submit.prevent="submitForm">
      <v-text-field
        v-model="email"
        :rules="emailRules"
        color="primary"
        label="Email"
        placeholder="Enter your email"
        variant="underlined"
      ></v-text-field>

      <v-text-field
        v-model="password"
        :rules="passwordRules"
        color="primary"
        label="Password"
        placeholder="Enter your password"
        variant="underlined"
      ></v-text-field>
    </v-form>

    <v-divider></v-divider>

    <v-card-actions>
      <v-spacer></v-spacer>

      <v-btn type="submit" color="success">
        Login
        <v-icon icon="mdi-chevron-right" end></v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
