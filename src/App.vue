<template>
<div class="container pt-1">
  <div class="card">
  <app-async-component></app-async-component>
    <h2>Динамические и асинхронные компоненты</h2>

  <app-button
    ref="myBtn"
    :color="oneColor"
    @action="active = 'one'"
  >One</app-button>
  <app-button
    :color="twoColor"
    @action="active = 'two'"
  >Two</app-button>

  </div>
  <!-- убираем -так отображение реализовано через ф-ю componentName
<app-text-one v-if="active === 'one'"></app-text-one>
<app-text-two v-else-if="active === 'two' "></app-text-two>
-->
<keep-alive>
  <component :is="componentName"></component>
</keep-alive>

</div>
</template>

<script>
import AppAsyncComponent from './AppAsyncComponent.vue'
import AppButton from './AppButton.vue'
import AppTextOne from './AppTextOne.vue'
import AppTextTwo from './AppTextTwo.vue'

export default {
  data () {
    return {
      active: 'one' // 'two' это для отслеживания состояния нажатой кнопки one по умолчанию
    }
  },
  mounted () {
    // setTimeout(() => {
    //   this.componentName = 'new comp name'
    // }, 1500)
    // console.log(this.$refs.myBtn)
    this.$refs.myBtn.btnLog() // если в кнопке есть обращение к методам  - то через ref  - можно вызывать эти методы
  },
  computed: {
    // componentName () {
    // if (this.active === 'one') {
    //   return 'app-text-one'
    // }
    // return 'app-text-two'
    //  оптимизация  : вместо  if = >
    //   return 'app-text-' + this.active
    // },
    componentName: {
      get () {
        return 'app-text-' + this.active
      },
      set (value) {
        console.log('componentName: ', value)
      }
    },
    // передача классов для цвета кнопок
    oneColor () {
      return this.active === 'one' ? 'primary' : ''
    },
    twoColor () {
      return this.active === 'two' ? 'primary' : ''
    }
  },
  components: {
    AppButton,
    AppTextOne,
    AppTextTwo,
    AppAsyncComponent
  }
}

</script>

<style >
</style>
//  вместо v-slot: можно указвать  #
