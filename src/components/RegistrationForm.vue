<script lang="ts">
import { emailRules, passwordRules, firstRules, lastRules, termsRules } from '../utils/formRules'
import { handleStatusCode } from '@/utils/helpers'
import http from '@/http-common'
import ErrorMessage from './ErrorMessage.vue'
import axios from 'axios'

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
      // Validate the form inputs // TODO: Test validation
      // if (!this.$refs.form.validate()) {
      //   return
      // }
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
      } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
          if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            this.errorMessage = handleStatusCode(error.response.status)
          } else {
            // The request was made but no response was received
            // This could be due to a network error, or some other issue
            this.errorMessage =
              "We're having trouble processing your request. Please check your internet connection, try again later, or contact our support if the problem persists."
          }
        } else if (error instanceof Error) {
          // Handle other types of errors that are instances of Error
          this.errorMessage = `An error occurred: ${error.message}`
        } else {
          // Handle any other type of error
          this.errorMessage = 'An unexpected error occurred. Please try again later.'
        }
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
    <v-form @submit.prevent="submitForm" ref="form">
      <v-text-field
        id="firstName-field"
        v-model="first"
        color="primary"
        label="First name"
        variant="underlined"
        :rules="firstRules"
      ></v-text-field>

      <v-text-field
        id="lastName-field"
        v-model="last"
        color="primary"
        label="Last name"
        variant="underlined"
        :rules="lastRules"
      ></v-text-field>

      <v-text-field
        id="email-field"
        v-model="email"
        color="primary"
        label="Email"
        variant="underlined"
        :rules="emailRules"
      ></v-text-field>

      <v-text-field
        id="password-field"
        v-model="password"
        color="primary"
        label="Password"
        placeholder="Enter your password"
        variant="underlined"
        :rules="passwordRules"
      ></v-text-field>

      <v-checkbox
        id="terms-checkbox"
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
