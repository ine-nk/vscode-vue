<template>
<div class="container pt-1">
<div class="card">
  <h2>Актуальные новости {{ now }}</h2>
</div>

<div class="card" v-for="item in news" :key="item">
  <h3> {{ item }} </h3>
  <button class="btn" @click="isOpen = !isOpen">Открыть</button>
  <p v-if="isOpen">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea illo odit eligendi ratione aliquid nesciunt natus minus excepturi earum! Odit veritatis sequi et suscipit assumenda eius corporis ab exercitationem repellat!
  </p>
</div>

</div>
</template>

<script>

export default {
  data () {
    return {
      now: new Date().toLocaleDateString(),
      isOpen: false,
      news: [
        'Джо Байден победил',
        'Vue 3 успешно работает'
      ]
    }
  }
}
</script>

<style >

</style>
