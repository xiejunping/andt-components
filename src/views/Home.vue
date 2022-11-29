<template>
  <div class="home">
    <HelloWorld msg="" @on-reg="getReg" />
    <div class="container">
      <div class="al-btn">
        <a-button @click="getDelay">手动触发delay</a-button>
        <a-button type="primary" @click="canBtn">关于我们</a-button>
      </div>
      <a-row :gutter="24">
        <a-col :span="12">
          <ul>
            <li>广告管理 - &gt;媒体广告&lt;adplan</li>
            <li @click="$router.push('/promote/adplan/account')">广告账号 - account</li>
            <li @click="$router.push('/promote/adplan/group')">广告组 - group</li>
            <li @click="$router.push('/promote/adplan/advertise')">广告计划 - advertise</li>
            <li @click="$router.push('/promote/adplan/idea')">广告创意 - idea</li>
          </ul>
        </a-col>
        <a-col :span="12">
          <ul>
            <li>今日头条 - 新建广告</li>
            <li @click="$router.push('/create/toutiao/campaign')">创建广告组</li>
            <li @click="$router.push('/create/toutiao/plan')">创建广告计划</li>
            <li @click="$router.push('/create/toutiao/creative')">创意创意</li>
          </ul>
        </a-col>
      </a-row>

      <br>
      <br>
      <vxe-table
        :align="allAlign"
        :data="tableData">
        <vxe-table-column type="seq" width="60"></vxe-table-column>
        <vxe-table-column field="name" title="Name"></vxe-table-column>
        <vxe-table-column field="sex" title="Sex"></vxe-table-column>
        <vxe-table-column field="age" title="Age"></vxe-table-column>
      </vxe-table>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { userLogin, userRegister, delay } from '@/api/user.model'

export default {
  name: 'home',
  components: {
    HelloWorld
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
<style lang="less" scoped>
.home {
  width: 100%;
  .container {
    max-width: 1400px;
    margin: 0 auto;
    .al-btn {
      display: flex;
      justify-content: space-between;
      padding: 12px 0;
    }

    ul {
      padding: 8px 0;
      li {
        line-height: 28px;
      }
    }
  }
}
</style>
