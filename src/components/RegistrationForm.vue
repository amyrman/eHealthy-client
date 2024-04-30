<script lang="ts">
import { emailRules, passwordRules, firstRules, lastRules, termsRules } from '../utils/formRules'
import http from '../http-common'
import ErrorMessage from './ErrorMessage.vue'

export default {
  data: () => ({
    first: null,
    last: null,
    email: null,
    password: null,
    terms: false,
    emailRules,
    passwordRules,
    firstRules,
    lastRules,
    termsRules,
    errorMessage: ''
  }),
  methods: {
    async submitForm() {
      try {
        const response = await http.post('/users/register', {
          firstname: this.first,
          lastname: this.last,
          email: this.email,
          password: this.password
        })

        if (response.status === 201) {
          this.$router.push('/login')
        } else {
          // The server responded with a status other than 201 CREATED
          this.errorMessage = 'Registration failed. Please try again.'
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
  <v-card class="mx-auto" max-width="344" title="User Registration">
    <v-form @submit.prevent="submitForm">
      <v-text-field
        v-model="first"
        color="primary"
        label="First name"
        variant="underlined"
        :rules="firstRules"
      ></v-text-field>

      <v-text-field
        v-model="last"
        color="primary"
        label="Last name"
        variant="underlined"
        :rules="lastRules"
      ></v-text-field>

      <v-text-field
        v-model="email"
        color="primary"
        label="Email"
        variant="underlined"
        :rules="emailRules"
      ></v-text-field>

      <v-text-field
        v-model="password"
        color="primary"
        label="Password"
        placeholder="Enter your password"
        variant="underlined"
        :rules="passwordRules"
      ></v-text-field>

      <v-checkbox
        v-model="terms"
        color="secondary"
        label="I agree to site terms and conditions"
        :rules="termsRules"
      ></v-checkbox>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn type="submit" color="success">
          Complete Registration
          <v-icon icon="mdi-chevron-right" end></v-icon>
        </v-btn>
      </v-card-actions>
    </v-form>
    <ErrorMessage :message="errorMessage" />
  </v-card>
</template>
