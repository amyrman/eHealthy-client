export const emailRules = [
  (value: string) => (value ? true : 'You must enter an email address.'),
  (value: string) => (/.+@.+\..+/.test(value) ? true : 'You must enter a valid email address.')
]

export const passwordRules = [
  (value: string) => (value ? true : 'Password is required.'),
  (value: string) =>
    value && value.length >= 8 ? true : 'Password must be at least 8 characters long.'
]
export const firstNameRules = [(value: string) => (value ? true : 'First name is required.')]

export const lastNameRules = [(value: string) => (value ? true : 'Last name is required.')]

export const termsRules = [
  (value: boolean) => (value ? true : 'You must accept the terms and conditions.')
]
