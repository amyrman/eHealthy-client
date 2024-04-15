<script lang="ts">
import { emailRules, passwordRules, firstRules, lastRules, termsRules } from '../utils/formRules'
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
    termsRules
  }),
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
  </v-card>
</template>
