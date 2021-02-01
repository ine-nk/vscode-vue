<template>
  <div class="card" >
    <h3> {{ title }} </h3>
    <button class="btn"
      @click="open"
      >{{ isNewsOpen ? 'Закрыть' : 'Открыть'}}
    </button>
    <button class="btn danger"
      v-if="wasRead"
      @click=" $emit('unmark', id)"
      >Сделать непрочитанной</button>
    <div v-if="isNewsOpen">
    <p >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea illo odit eligendi ratione aliquid nesciunt natus minus excepturi earum! Odit veritatis sequi et suscipit assumenda eius corporis ab exercitationem repellat!
    </p>
    <hr />
    <button
      v-if="!wasRead" class="btn primary"
      @click="mark" >Прочесть новость</button>
    </div>
  </div>
</template>

<script>
// import App from './App'

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
        console.log(value)
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
      this.$emit('read-news', this.id)
    }
    // перенесли выполнение в шаблон
    // unmark () {
    //   this.$emit('unmark', this.id)
    // }
  }
  // created () {
  //   this.isOpenLocal = this.isOpen
  // }
}

</script>
