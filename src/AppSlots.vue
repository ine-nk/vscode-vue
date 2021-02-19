<template>
<div class="container pt-1">
  <div class="card">
    <h2>Slots</h2>
</div>

<app-list>
  <!--
  <template #default="slotProps">
    <span style="color: orange;"> {{ slotProps.idx +1 }} Item: {{ slotProps.iter }}</span>
  </template>
  -->
  <template #default="{iter, idx}">
    <span style="color: orange;">
      <strong>{{ idx + 1 }}</strong>
        Item: {{ iter }}
    </span>
  </template>
</app-list>

<app-block>
  <p>Это самый важный текст для нового блока</p>

<template v-slot:header>
  <h3>Это заголовок !!! </h3>
</template>

<template v-slot:footer >
  <hr />
  <small>Это footer</small>
</template>
</app-block>
</div>
</template>

<script>
import AppBlock from './AppBlock'
import AppList from './AppList'
export default {
  components: {
    AppBlock, AppList
  }
}

</script>

<style >
</style>
//  вместо v-slot: можно указвать  #
