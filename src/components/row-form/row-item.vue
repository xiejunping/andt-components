<template>
  <a-row
    type="flex"
    class="row-item"
    :class="{'row-item-mini': mini}"
    :justify="justify"
    :align="align"
    :gutter="12">
    <a-col :span="1" v-if="indent">
      <span>&nbsp;</span>
    </a-col>
    <a-col :span="fieldSpan" class="col-item">
      <span v-if="label" class="item-field" :class="{'row-item-must': required}">{{label}}</span>
    </a-col>
    <a-col :span="contentSpan">
      <slot></slot>
    </a-col>
  </a-row>
</template>
<script>
export default {
  name: 'rowItem',
  props: {
    label: {
      type: String
    },
    required: {
      type: Boolean,
      default () {
        return false
      }
    },
    prop: {
      type: String
    },
    justify: {
      type: String,
      default: 'start'
    },
    align: {
      type: String,
      default: 'middle'
    },
    mini: {
      type: Boolean,
      default: false
    },
    indent: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    fieldSpan () {
      return this.mini ? (this.label ? 8 : 0) : 5
    },
    contentSpan () {
      return this.mini ? (this.label ? 16 : 24) : 16
    }
  },
  inject: ['form']
}
</script>
<style lang="less" scoped>
.row-item {
  margin-bottom: 24px;
  &.row-item-mini {
    margin-bottom: 10px;
    .item-field {
      font-size: 12px;
      padding-right: 0px;
    }
  }
  .col-item {
    text-align: right;
  }
  i {
    margin-right: 4px;
    vertical-align: middle;
    &.ivu-icon-md-add {
      margin: 0;
    }
  }
  .item-field {
    font-size: 14px;
    padding-right: 12px;
  }
  .row-item-must {
    position: relative;
    z-index: 5;
    &:after {
      content: " ";
      display: inline-block;
      width: 4px;
      height: 4px;
      position: absolute;
      top: 6px;
      right: 0;
      background-color: #f45858;
      border-radius: 3px;
    }
  }
}
</style>
