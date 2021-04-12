<template>
  <a-layout :style="{ flexDirection: 'row' }">
    <a-layout-sider class="nav-left">
      <steper :data="modulers" :current="current" />
    </a-layout-sider>
    <router-view />
  </a-layout>
</template>
<script>
import modulers from '@/data/toutiao/modulers.json'
import Steper from '@/components/steper'
export default {
  name: 'tencentMain',
  components: { Steper },
  data () {
    const Routes = ['campaign', 'plan', 'creative']
    const { path } = this.$route
    const name = path.substring(path.lastIndexOf('/') + 1)
    const current = Routes.indexOf(name)
    return { modulers, current }
  }
}
</script>
<style lang="less" scoped>
.nav-left {
  background: #fff;
  box-shadow: 0px 2px 4px 0px #eff1fa;
  padding: 22px 15px;
}
</style>
