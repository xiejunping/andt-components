<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,
      <br />check out the
      <a
        href="https://cli.vuejs.org"
        target="_blank"
        rel="noopener"
      >vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel"
          target="_blank"
          rel="noopener"
        >babel</a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint"
          target="_blank"
          rel="noopener"
        >eslint</a>
      </li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li>
        <a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a>
      </li>
      <li>
        <a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a>
      </li>
      <li>
        <a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a>
      </li>
      <li>
        <a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a>
      </li>
      <li>
        <a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a>
      </li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li>
        <a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a>
      </li>
      <li>
        <a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-devtools#vue-devtools"
          target="_blank"
          rel="noopener"
        >vue-devtools</a>
      </li>
      <li>
        <a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a>
      </li>
      <li>
        <a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a>
      </li>
    </ul>
    <a-layout>
      <a-layout-header>的覅i大多数</a-layout-header>
      <a-layout-content style="padding: 15px 16px">
        <a-row :gutter="16">
          <a-col :span="6">
            <a-button type="primary">激活按钮</a-button>
          </a-col>
          <a-col :span="6">
            <a-auto-complete :dataSource="dataSource" :filterOption="filterOption">

            </a-auto-complete>
          </a-col>
          <a-col :span="6">
            <a-auto-complete allowClear :filterOption="filterOption">
              <template slot="dataSource">
                <a-select-option v-for="item in gameData" :key="item.value">{{item.text}}</a-select-option>
              </template>
            </a-auto-complete>
          </a-col>
          <a-col :span="6">
            <a-auto-complete :dataSource="gameData" :filterOption="filterOption">
              <a-select :value="game" showSearch placeholder="input search text" :showArrow="false">
                <a-select-option v-for="d in gameData" :key="d.value">{{d.text}}</a-select-option>
              </a-select>
            </a-auto-complete>
          </a-col>
        </a-row>
      </a-layout-content>
    </a-layout>

    <a-select v-model="game" showSearch placeholder="input search text" :showArrow="false">
      <a-select-option :value="1">激活</a-select-option>
      <a-select-option :value="2">充值</a-select-option>
      <a-select-option :value="3">vip</a-select-option>
    </a-select>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
    return {
      dataSource: ['111', '2222', '3333', '1', '11'],
      game: '3-应用宝',
      gameData: [
        {
          text: '1-天瑀',
          value: '1000824'
        },
        {
          text: '111-百度',
          value: '1000823'
        },
        {
          text: '3-应用宝',
          value: '1000822'
        },
        {
          text: '大清演义',
          value: '1000821'
        },
        {
          text: '小主攻略-发行',
          value: '1000820'
        },
        {
          text: '全民投资IOS全民投资IOS全民投资IOS',
          value: '1000819'
        },
        {
          text: '天使投资人IOS',
          value: '1000818'
        },
        {
          text: '大秦之金戈铁马',
          value: '1000817'
        },
        {
          text: '银河指挥官',
          value: '1000816'
        },
        {
          text: '大秦纷争',
          value: '1000815'
        },
        {
          text: '亿万富翁IOS',
          value: '1000814'
        },
        {
          text: '模拟大亨OL',
          value: '1000813'
        }
      ]
    }
  },
  methods: {
    filterOption (input, option) {
      console.log(option)
      return true
    }
  },
  created () {
    this.$spin.show()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
