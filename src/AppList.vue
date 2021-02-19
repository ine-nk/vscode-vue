<template>

<!-- данный компонетн отвечает за вывод списка -->

  <div class="card">
  <ul>
    <li v-for="(item, i) in 5 " >
      <slot :iter="item" :idx="i"></slot>
    </li>
  </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>
