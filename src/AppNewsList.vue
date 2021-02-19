<template>
  <hr />
  <h4>{{ title }} </h4>
  <ul>
  <li v-for="item in news" :key="item.id">{{ item.title}} <span v-if="item.wasRead">!!!</span> </li>
  </ul>
</template>

<script>
export default {
  // props: ['news'], этот параметр уже не нужен так как данные news получаем из inject -a
  inject: ['title', 'news'] // список который мы хотим получить из App через provide: { title: 'текст'}
}
</script>

<style scoped>

</style>
