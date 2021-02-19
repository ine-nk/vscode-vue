import { createApp, defineAsyncComponent } from 'vue'
import App from './App.vue'
import TheHeader from './TheHeader'
import './theme.css'

// App -> AppNews -> AppNewsList надо передать данные из A00 в AppNewsList
// из App :news="news" => AppNews  <app-news-list :news="news">  props: {
// news: Array, было для демонстрации передачи инф. из App =>
// AppNews => AppNewsList, дополнительно
// в App в <app-news был :news="news", из текущих ? параметров - <app-news-list :news="news">,  news: Array,

// App => AppNewsList

const app = createApp(App)

// глобальная регистрация компонента - и будет видна во всем приложении App
app.component('the-header', TheHeader)
app.component('async-component', defineAsyncComponent(() => {
  return import('./AppAsyncComponent')
}))

app.mount('#app')
