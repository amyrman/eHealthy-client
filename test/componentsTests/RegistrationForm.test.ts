import { mount, VueWrapper } from '@vue/test-utils'
import http from '@/http-common'
import RegistrationForm from '@/components/RegistrationForm.vue'
import {
  emailRules,
  passwordRules,
  firstNameRules,
  lastNameRules,
  termsRules // TODO: include in test?
} from '@/utils/formRules'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'

const vuetify = createVuetify({
  components
})

vi.mock('@/http-common')

describe('RegistrationForm.vue', () => {
  let wrapper: VueWrapper

  beforeEach(() => {
    wrapper = mount(RegistrationForm, {
      global: {
        plugins: [vuetify],
      },
    })
  })

  afterEach(() => {
    wrapper.unmount()
    vi.clearAllMocks() // Clear mock calls between tests
  })


  it('does not submit the form with invalid input fields', async () => {
    const emailInput = wrapper.find('#email-field')
    const passwordInput = wrapper.find('#password-field')
    const firstNameInput = wrapper.find('#firstName-field')
    const lastNameInput = wrapper.find('#lastName-field')
    const termsCheckbox = wrapper.find('#terms-checkbox')

    await emailInput.setValue('not an email')
    await passwordInput.setValue('short')
    await firstNameInput.setValue('')
    await lastNameInput.setValue('')
    await termsCheckbox.setValue(false)

    await wrapper.find('form').trigger('submit.prevent')

    expect(wrapper.text()).toContain(passwordRules[1]('short'))
    expect(wrapper.text()).toContain(firstNameRules[0](''))
    expect(wrapper.text()).toContain(lastNameRules[0](''))
    expect(wrapper.text()).toContain(emailRules[1]('not an email'))

    expect(http.post).not.toHaveBeenCalled()
  })

  it('submits the form with valid input fields', async () => {
    const firstNameInput = wrapper.find('#firstName-field')
    const lastNameInput = wrapper.find('#lastName-field')
    const emailInput = wrapper.find('#email-field')
    const passwordInput = wrapper.find('#password-field')
    const termsCheckbox = wrapper.find('#terms-checkbox')

    await firstNameInput.setValue('John')
    await lastNameInput.setValue('Doe')
    await emailInput.setValue('test@example.com')
    await passwordInput.setValue('validpassword')
    await termsCheckbox.setValue(true)

    // Mock the resolved value for http.post
    vi.mocked(http.post).mockResolvedValueOnce({ status: 201, data: { success: true } })

    await wrapper.vm.submitForm()
    expect(http.post).toHaveBeenCalledWith('/users/register', {
      firstName: 'John',
      lastName: 'Doe',
      email: 'test@example.com',
      password: 'validpassword'
    })
  })

  it('handles http error response', async () => {
    const firstNameInput = wrapper.find('#firstName-field')
    const lastNameInput = wrapper.find('#lastName-field')
    const emailInput = wrapper.find('#email-field')
    const passwordInput = wrapper.find('#password-field')
    const termsCheckbox = wrapper.find('#terms-checkbox')

    await emailInput.setValue('test@example.com')
    await passwordInput.setValue('validpassword')
    await firstNameInput.setValue('John')
    await lastNameInput.setValue('Doe')
    await termsCheckbox.setValue(true)

    // Mock the rejected value for http.post
    vi.mocked(http.post).mockRejectedValueOnce({
      response: { status: 500 },
      isAxiosError: true
    })

    await wrapper.find('form').trigger('submit.prevent')
    await wrapper.vm.submitForm()

    expect(wrapper.vm.errorMessage).toBe('Something went wrong on our end. Please try again later.')
  })

  it('handles non-http error', async () => {
    const firstNameInput = wrapper.find('#firstName-field')
    const lastNameInput = wrapper.find('#lastName-field')
    const emailInput = wrapper.find('#email-field')
    const passwordInput = wrapper.find('#password-field')
    const termsCheckbox = wrapper.find('#terms-checkbox')

    await emailInput.setValue('test@example.com')
    await passwordInput.setValue('validpassword')
    await firstNameInput.setValue('John')
    await lastNameInput.setValue('Doe')
    await termsCheckbox.setValue(true)

    // Mock the rejected value for http.post with a non-http error
    vi.mocked(http.post).mockRejectedValueOnce(new Error('General error'))

    await wrapper.find('form').trigger('submit.prevent')
    await wrapper.vm.submitForm()

    expect(wrapper.vm.errorMessage).toBe('An error occurred: General error')
  })
})
