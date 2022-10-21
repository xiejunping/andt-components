<template>
  <div id="app">
    <a-config-provider :locale="locale">
      <router-view/>
    </a-config-provider>
  </div>
</template>
<script>
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN'
export default {
  data () {
    return {
      locale: zhCN
    }
  }
}
</script>
<style lang="less">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 14px;
  height: 100%;
}

#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
/* radio button bg-color */
.ant-radio-button-wrapper-checked {
  background-color: #f0f9ff;
}
/* 合计 */
.ant-table-thead .ant-table-tbody > tr {
  background: #fbfbfb;
  &:hover > td {
    background: none;
  }
}
</style>
