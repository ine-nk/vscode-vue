<template>
  <div class="card" >
    <h3> {{ title }} </h3>
    <button class="btn" @click="isOpenLocal = !isOpenLocal">Открыть</button>
    <p v-if="isOpen">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea illo odit eligendi ratione aliquid nesciunt natus minus excepturi earum! Odit veritatis sequi et suscipit assumenda eius corporis ab exercitationem repellat!
    </p>
  </div>
</template>

<script>
// import App from './App'

export default {
  // props: ['title'],
  props: {
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
      default: false
    }
  },
  data () {
    return { isOpenLocal: false }
  },
  created () {
    this.isOpenLocal = this.isOpen
  }
}
</script>
