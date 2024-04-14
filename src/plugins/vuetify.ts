import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
import { createVuetify } from 'vuetify'

export default createVuetify({
  icons: {
    defaultSet: 'mdi' // This is already the default value - only for display purposes
  },
  theme: {
    defaultTheme: 'myCustomTheme', // Optional: set a default theme
    themes: {
      myCustomTheme: {
        dark: false, // Optional: indicates whether this is a dark theme
        colors: {
          primary: '#4CAF50', // Example primary color
          secondary: '#9C27b0', // Example secondary color
          accent: '#FFC107', // Example accent color
          error: '#FF5252', // Example error color
          info: '#2196F3', // Example info color
          success: '#4CAF50', // Example success color
          warning: '#FB8C00' // Example warning color
        }
      },
      myDarkTheme: {
        dark: true, // This is a dark theme
        colors: {
          primary: '#424242',
          secondary: '#616161',
          accent: '#82B1FF',
          error: '#FF5252',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FB8C00'
        }
      }
    }
  }
})
