<script lang="ts">
export default {
  data: () => ({
    email: null,
    password: null,
    emailRules: [
      (value: string) => (value ? true : 'You must enter an email address.'),
      (value: string) => (/.+@.+\..+/.test(value) ? true : 'You must enter a valid email address.')
    ],
    passwordRules: [
      (value: string) => (value ? true : 'Password is required.'),
      (value: string) =>
        value && value.length >= 8 ? true : 'Password must be at least 8 characters long.'
    ]
  })
}
</script>

<template>
  <v-card class="mx-auto" max-width="344" title="User Login">
    <v-form @submit.prevent>
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
