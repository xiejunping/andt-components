<template>
  <div class="c-select-item">
    <div class="c-header">
      <span class="c-header-title">{{title}}</span>
      <span
        class="c-header-clear"
        v-if="clear"
        @click="$emit('on-clear')">
        清空全部
      </span>
    </div>
    <div class="c-selecter-content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'selectItem',
  props: {
    title: {
      type: String
    },
    clear: {
      type: Boolean
    }
  }
}
</script>
<style lang="less" scoped>
.c-select-item {
  background-color: #fff;
  border: solid 1px #dee4f5;
  .c-header {
    padding: 0 12px;
    height: 34px;
    color: #333;
    border-bottom: solid 1px #dee4f5;
    background-color: #fafbfe;
    .c-header-title, .c-header-clear {
      height: 34px;
      line-height: 34px;
      vertical-align: middle;
    }
    .c-header-clear {
      color: #598fe6;
      float: right;
      cursor: pointer;
    }
  }
  .c-selecter-content {
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    height: 246px;
    width: 100%;
    padding-bottom: 8px;
  }
}
</style>
