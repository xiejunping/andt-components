<template>
  <div class="c-base-setting">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'rowForm',
  props: {
    value: {
      type: Object
    }
  },
  provide () {
    return {
      form: this
    }
  }
}
</script>
<style lang="less" scoped>
.c-base-setting {
  position: relative;
}
</style>
