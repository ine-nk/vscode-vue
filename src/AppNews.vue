<template>
  <div class="card" >
    <h2> {{ title }} </h2>

    <app-button
      @action="open"
      >{{ isNewsOpen ? 'Закрыть' : 'Открыть' }}</app-button>

    <app-button
      color="danger"
      v-if="wasRead"
      @action="$emit('unmark', id)"
      >Сделать непрочитанной</app-button>

  <div v-if="isNewsOpen">
    <p >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea illo odit eligendi ratione aliquid nesciunt natus minus excepturi earum! Odit veritatis sequi et suscipit assumenda eius corporis ab exercitationem repellat!
    </p>
    <hr />
  <app-button
      v-if="!wasRead"
      color="primary"
      @action="mark"
    >Прочесть новость</app-button>

    <app-news-list >
    </app-news-list>
    </div>
  </div>
</template>

<script>
// import App from './App'
import AppButton from './AppButton'
import AppNewsList from './AppNewsList'

export default {
  // props: ['title'],
  //  emits: [     'open-news'   ],
  /* пример валидации
    'open-news' (num) {
    if (num) {
        return true
      }
      console.warn(' No data in open-news emit')
      return false
    },
    */

  props: {
    // news: Array, было для демонстрации передачи инф. из App => AppNews => AppNewsList, дополнительно в App в <app-news был :news="news", из текущих ?параметров - <app-news-list :news="news">,
    // news: Array,
    wasRead: Boolean,
    title: {
      type: String,
      required: true
    },
    id: {
      type: Number,
      required: true
    },
    isOpen:
    {
      type: Boolean,
      required: false,
      default: false,
      validator (value) {
        // console.log(value)
        return value === true || value === false // проверка на логическую функцию
      }
    }
  },
  emits: {
    // валидация данных
    'open-news': null, // так как валидация не нужна
    'read-news' (id) {
      if (id) {
        return true
      }
      console.warn('Нет параметра Id для emit read-news')
      return false
    },
    unmark: null
  },

  data () {
    // return { isOpenLocal: this.props.isOpen };
    return { isNewsOpen: this.isOpen }
  },
  methods: {
    open () {
      this.isNewsOpen = !this.isNewsOpen
      if (this.isNewsOpen) {
        this.$emit('open-news')
      }
    },
    mark () {
      this.isNewsOpen = false // таким образом  мы закрываем новость
      this.$emit('read-news', this.id) // при передаче события мы также передаем id того элемента на котором был клик
    }
    // ? перенесли выполнение в шаблон так как функционал в одну строку
    // unmark () {
    //   this.$emit('unmark', this.id)
    // }
  },
  components: { AppButton, AppNewsList }
  // created () {
  //   this.isOpenLocal = this.isOpen
  // }
}

</script>
