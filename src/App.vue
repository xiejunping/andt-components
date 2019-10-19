<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>
<style lang="less">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 14px;
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
