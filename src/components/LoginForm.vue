<script lang="ts">
import { emailRules, passwordRules } from '../utils/formRules'
import http from '../http-common'
import ErrorMessage from './ErrorMessage.vue'

export default {
  data: () => ({
    email: null,
    password: null,
    emailRules,
    passwordRules,
    errorMessage: ''
  }),
  methods: {
    async submitForm() {
      try {
        const response = await http.post('/users/login', {
          email: this.email,
          password: this.password
        })

        if (response.status === 200) {
          // Login was successful
          // You might want to store the user's token and redirect them to a dashboard
          localStorage.setItem('user-token', response.data.token)
          this.$router.push('/dashboard')
        } else {
          // The server responded with a status other than 200 OK
          this.errorMessage = 'Login failed. Please check your email and password.'
        }
      } catch (error) {
        // An error occurred while trying to send the request
        // This could be a network error, or some other issue
        this.errorMessage = 'An error occurred. Please try again.'
      }
    }
  },
  components: {
    ErrorMessage
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
    

    <v-divider></v-divider>

    <v-card-actions>
      <v-spacer></v-spacer>

      <v-btn type="submit" color="success">
        Login
        <v-icon icon="mdi-chevron-right" end></v-icon>
      </v-btn>
    </v-card-actions>
  </v-form>
  <ErrorMessage :message="errorMessage" />
  </v-card>
</template>
