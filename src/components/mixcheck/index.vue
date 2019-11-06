<template>
  <div class="c-mixcheck">
    <slot></slot>
  </div>
</template>
<script>
import { isArray, debounce, findComponentsDownward } from './assist'
export default {
  name: 'Mixcheck',
  props: {
    value: {
      type: [Array, String, Number],
      required: true
    }
  },
  methods: {
    updateModel () {
      this.radioChildrens = findComponentsDownward(this, 'RadioItem')
      this.checkChildrens = findComponentsDownward(this, 'CheckItem')

      if (this.radioChildrens || this.checkChildrens) {
        const { value } = this
        const childrens = this.$children
        for (const child of childrens) {
          child.model = value
          child.currentValue = false
        }
        if (isArray(value)) {
          this.checkChildrens.forEach(child => {
            child.currentValue = value.indexOf(child.label) >= 0
          })
        } else {
          const index = this.radioChildrens.findIndex(ret => ret.label === value)
          if (index > -1) this.radioChildrens[index].currentValue = true
        }
      }
    },
    change (data) {
      this.currentValue = data
      this.$emit('input', data)
      this.$emit('change', data)
    }
  },
  watch: {
    value (nVal) {
      debounce(this.updateModel(), 1000)
    }
  },
  data () {
    return {
      currentValue: this.value,
      radioChildrens: [],
      checkChildrens: []
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.updateModel()
    })
  }
}
</script>
<style lang="less" scoped>
.c-mixcheck {
  position: relative;
  display: inline-flex;
  font-size: 0;
  /deep/ .mixcheck-item {
    height: 32px;
    line-height: 30px;
    padding: 0px 15px;
    color: #333;
    font-size: 14px;
    margin: 0;
    user-select: none;
    background-color: #fff;
    border: 1px solid #dcdee2;
    margin-right: -1px;
    cursor: pointer;
    &:first-child {
      border-left: 1px solid #dcdee2;
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }
    &:last-child {
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
    }
    &.c-wrapper-checked {
      color: #1890ff;
      border-color: #1890ff;
      background-color: #f0f9ff;
      z-index: 1;
      &:first-child {
        box-shadow: none;
      }
      &:after {
        border-left-color: #1890ff;
      }
    }
    &.c-wrapper-disabled {
      color: #cccccc;
      background-color: #f7f7f7;
      border-color: #dcdee2;
      cursor: not-allowed;
      box-shadow: none !important;
      &:first-child {
        border-left-color: #dcdee2;
      }
      &.c-wrapper-checked {
        color: #ffffff;
        background-color: #e6e6e6;
        &:after {
          border-left-color: #95b5d6;
        }
      }
    }
    .c-mix-input {
      opacity: 0;
      width: 0;
      height: 0;
    }
  }
}
</style>
