import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'dark',
    themes: {
      light: {
        colors: {
          background: '#ffffff',
          surface: '#ffffff',
          primary: '#3f51b5',
          secondary: '#b0bec5',
          accent: '#8c9eff',
          error: '#b71c1c'
          // Add other colors if needed
        }
      },
      dark: {
        colors: {
          background: '#121212',
          surface: '#121212',
          primary: '#bb86fc',
          secondary: '#03dac6',
          accent: '#3700b3',
          error: '#cf6679'
        }
      }
    }
  },

  icons: {
    defaultSet: 'mdi' // This is already the default value - only for display purposes
  }
})

export default vuetify
