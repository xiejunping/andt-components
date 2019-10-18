<template>
  <div class="c-select-box">
    <div class="c-check-all">
      <div class="c-item-select c-cataract" @click="selectAll"></div>
      <a-checkbox class="c-check-item" v-model="all">全选</a-checkbox>
    </div>
    <div v-for="item in data" :key="item.id">
      <div v-if="item.children && item.children.length" :class="itemClasses(item)" @click="$emit('on-child', {item, level})">
        <i-checkbox v-model="item.check" :indeterminate="itemIndeterminate(item)" :label="item.value" />
        <a-icon type="right" class="c-check-arrow" />
        <span class="c-item-checkbox c-cataract" @click="selectItem(item)"></span>
      </div>
      <i-checkbox v-else class="c-check-item" v-model="item.check" :label="item.value" />
    </div>
  </div>
</template>
<script>
import ICheckbox from '@/components/i-checkbox'
const computeChild = (list, Vue) => {
  list.forEach(item => {
    if (item.children && item.children.length) {
      const child = item.children
      if (child.every(ret => ret.check)) Vue.$set(item, 'check', true)
      else Vue.$set(item, 'check', false)
      child && computeChild(child, Vue)
    }
  })
}
export default {
  name: 'selectBox',
  components: { ICheckbox },
  props: {
    value: {
      type: [String, Number]
    },
    data: {
      type: Array
    },
    level: {
      type: Number
    }
  },
  computed: {
    itemClasses () {
      return item => {
        const cls = ['c-check-item']
        item.value === this.value && cls.push('active')
        return cls
      }
    },
    all () {
      const len = this.data.filter(ret => ret.check).length
      return this.data.length === len
    }
  },
  methods: {
    selectAll () {
      this.$emit('on-select', {
        check: !this.all,
        level: this.level
      })
    },
    selectItem (item) {
      this.$emit('on-select', {
        check: !item.check,
        level: this.level,
        cat: item.value
      })
    },
    selectItem1 (e) {
      console.log(e)
      console.log(this.data)
    },
    itemIndeterminate (child) {
      const hasChild = (meta) => {
        return meta.children.reduce((sum, item) => {
          let foundChilds = []
          if (item.check) sum.push(item)
          if (item.children) foundChilds = hasChild(item)
          return sum.concat(foundChilds)
        }, [])
      }
      const some = hasChild(child).length > 0
      const every = child.children && child.children.every(ret => ret.check)
      return some && !every
    }
  },
  watch: {
    data: {
      handler (nVal, oVal) {
        computeChild(nVal, this)
      },
      deep: true
    }
  },
  mounted () {
    computeChild(this.data, this)
  }
}
</script>
<style lang="less" scoped>
.c-cataract {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 8;
  cursor: pointer;
}
.c-check-all {
  width: 100%;
  height: 36px;
  position: relative;
  z-index: 9;
  &:hover {
    .c-check-item {
      background-color: #f8f8f8;
    }
  }
  .c-item-select {
    width: 100%;
    height: 100%;
  }
}
.c-check-item {
  margin: 0;
  padding: 0 12px;
  display: block;
  position: relative;
  height: 36px;
  line-height: 36px;
  &:hover {
    background-color: #f8f8f8;
  }
  &.active {
    color: #598fe6;
    background-color: #f8f8f8;
    .c-check-arrow {
      color: #598fe6 !important;
    }
  }
  .c-check-arrow {
    float: right;
    margin-top: 10px;
    color: #c1c1c1;
    font-size: 14px;
  }
  .c-item-checkbox {
    width: 36px;
    height: 36px;
  }
  .ivu-checkbox-wrapper {
    /deep/ .ivu-checkbox {
      margin-right: 4px;
    }
  }
}
.c-select-box {
  /deep/ .ivu-checkbox-indeterminate {
    .ivu-checkbox-inner {
      background-color: #6fb3fb;
      border-color: #6fb3fb;
    }
  }
}
</style>
