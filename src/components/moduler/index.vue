<template>
  <div :id="name" class="c-moduler">
    <div class="c-moduler-range">
      <div class="c-moduler-title">{{ title }}</div>
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Moduler',
  props: {
    title: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  }
}
</script>
<style lang="less" scoped>
.c-moduler {
  padding: 15px 15px 0 15px;
  .c-moduler-range {
    position: relative;
    min-width: 1130px;
    background-color: #fff;
    border: 1px solid #eaeaea;
    border-radius: 2px;
    box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.05);
    padding: 36px 24px 48px 48px;
    .c-moduler-title {
      font-size: 22px;
      margin-bottom: 36px;
      line-height: 30px;
    }
  }
}
</style>
