<template>
  <div class="home">
    <vue-danmaku :danmus="danmus" :style="{height: '300px'}"></vue-danmaku>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App" @on-reg="getReg" />
    <a-button @click="getDelay">手动触发delay</a-button>
    <a-button type="primary" @click="canBtn">关于我们</a-button>

    <vxe-table
      :align="allAlign"
      :data="tableData">
      <vxe-table-column type="seq" width="60"></vxe-table-column>
      <vxe-table-column field="name" title="Name"></vxe-table-column>
      <vxe-table-column field="sex" title="Sex"></vxe-table-column>
      <vxe-table-column field="age" title="Age"></vxe-table-column>
    </vxe-table>

  </div>
</template>

<script>
// @ is an alias to /src
import vueDanmaku from 'vue-danmaku'
import HelloWorld from '@/components/HelloWorld.vue'
import { userLogin, userRegister, delay } from '@/api/user.model'

export default {
  name: 'home',
  components: {
    HelloWorld,
    vueDanmaku
  },
  data () {
    return {
      allAlign: null,
      tableData: [
        { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'vxe-table 从入门到放弃' },
        { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
        { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
        { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women ', age: 24, address: 'Shanghai' }
      ],
      danmus: ['danmu1', 'danmu2']
    }
  },
  created () {
    // Promise.all([userLogin({
    //   username: 'admin',
    //   password: 'U2FsdGVkX19Go0gRVmnFipB3nNsG33uLLLDHNDT+vZg=',
    //   code: 'h7kb'
    // }), userRegister({
    //   username: 'pro14',
    //   password: 'U2FsdGVkX19Go0gRVmnFipB3nNsG33uLLLDHNDT+vZg=',
    //   phone: '18163680885',
    //   code: '525233',
    //   invite: '730708'
    // })]).then(data => {
    //   console.log(data)
    // })

    Promise.all([delay(), delay()]).then(data => {
      console.log(data)
    })
  },
  methods: {
    getReg () {
      userRegister({
        username: 'pro14',
        password: 'U2FsdGVkX19Go0gRVmnFipB3nNsG33uLLLDHNDT+vZg=',
        phone: '18163680885',
        code: '525233',
        invite: '730708'
      }).then(data => {
        console.log(data)
      })
    },
    getDelay () {
      delay().then(data => {
        console.log(data)
      })
    },
    login () {
      userLogin({
        username: 'admin',
        password: 'U2FsdGVkX19Go0gRVmnFipB3nNsG33uLLLDHNDT+vZg=',
        code: 'h7kb'
      }).then(data => {
        console.log(data)
      })
    },
    canBtn () {
      this.$router.push('about')
    }
  }
}
</script>
<style scoped>

</style>
