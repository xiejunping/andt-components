<template>
  <a-popover v-model="visible" trigger="click" placement="topLeft" class="c-error-info">
    <template v-if="state">
      <a-icon type="warning" :style="{size: 24, color: '#f45858'}" />
      <span class="c-info-txt">有些项目填写错误，请修改</span>
    </template>
    <div slot="content">
      <div class="c-pop-content">
        <div class="c-pop-head">
          <a @click="close">×</a>
          <h3>请检查以下选项：</h3>
        </div>
        <ul type="disc">
          <li v-for="(msg, idx) in data" :key="idx">
            <span>{{msg.feild}}</span>
            <ins>1、{{msg.msg}}</ins>
          </li>
        </ul>
      </div>
    </div>
  </a-popover>
</template>
<script>
export default {
  name: 'popError',
  props: {
    value: {
      type: Boolean
    },
    state: {
      type: Boolean
    },
    data: {
      type: Array
    }
  },
  computed: {
    visible: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('input', val)
      }
    }
  },
  methods: {
    close () {
      this.visible = false
      setTimeout(() => {
        this.$emit('on-close', false)
      }, 300)
    }
  }
}
</script>
<style lang="less" scoped>
.c-error-info {
  text-align: left;
  height: 32px;
  line-height: 32px;
  .c-info-txt {
    margin-left: 8px;
  }
}
.c-pop-content {
  width: 420px;
  padding-bottom: 12px;
  .c-pop-head {
    padding: 6px 0;
    margin-bottom: 6px;
    font-size: 14px;
    line-height: 32px;
    a {
      display: block;
      float: right;
      font-size: 22px;
    }
  }
  ul {
    padding: 12px 24px;
    border: solid 1px #f45858;
    background-color: #fcf6f6;
    li {
      list-style-type: disc;
      margin-bottom: 10px;
      font-size: 14px;
      ins {
        font-size: 12px;
        display: block;
      }
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}
</style>
