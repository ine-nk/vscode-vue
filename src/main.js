import { createApp } from 'vue'
import App from './App.vue'
import TheHeader from './TheHeader'
import './theme.css'

const app = createApp(App)

// глобальная регистрация компонента - и будет видна во всем приложении App
app.component('the-header', TheHeader)

app.mount('#app')
