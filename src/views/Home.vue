<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App" @on-reg="getReg" />
    <a-button type="primary"> 取消请求 </a-button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { userLogin, userRegister, cancel, delay } from '@/api/user.model'

export default {
  name: 'home',
  components: {
    HelloWorld
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

    // userLogin({
    //   username: 'admin',
    //   password: 'U2FsdGVkX19Go0gRVmnFipB3nNsG33uLLLDHNDT+vZg=',
    //   code: 'h7kb'
    // }).then(data => {
    //   console.log(data)
    // })

    delay().then(data => {
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
    canBtn () {
      cancel()
    }
  }
}
</script>
