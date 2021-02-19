<template>
  <button class="btn" :class="color" @click="$emit('action')">
    <!-- {{ text }} -->
    <slot />
  </button>
</template>

<script>
export default {
  emits: ['action'],

  props: {
    // параметры ниже можно удалить так как используется тэк <slot />  и передача параметров
    //  теперь идет через интерполяцию.
    //  если его не убрать то будет выдаваться предупреждение в консоли
    // text: {
    //   type: String,
    //   required: true
    // },
    color: {
      type: String,
      default: '',
      validator (value) {
        return ['', 'primary', 'danger'].includes(value)
      }
    }
  },
  methods: {
    btnLog () {
      console.log('Button Log')
    }
  }
}
</script>

<style>
</style>style>
