<template>
  <a-layout :style="{ height: 'inherit' }">
    <a-layout-header :style="{ padding: '0 22px' }">
      <div class="logo">
        <img src="~/assets/logo.png" alt="" />
        <span class="logo-name">广告投放平台</span>
      </div>
    </a-layout-header>
    <a-locale-provider :locale="locale" :auto-insert-space-in-button="false">
      <router-view />
    </a-locale-provider>
  </a-layout>
</template>
<script>
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN'
export default {
  name: 'createLayout',
  data () {
    return {
      locale: zhCN
    }
  }
}
</script>
<style lang="less">
@import "~@/assets/styles/mixin";

.g-container {
  flex: 1;
  .scroll();
  .round();
}
</style>
