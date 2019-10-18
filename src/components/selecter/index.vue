<template>
  <div class="c-selecter">
    <a-row :gutter="12">
      <a-col :span="16">
        <a-row>
          <a-col
            :span="col"
            v-for="(box, idx) in resource"
            :key="idx">
            <select-item :title="box.title">
              <select-box
                v-model="box.current"
                :data="box.data"
                :level="box.level"
                @on-child="pushChild"
                @on-select="selectAll" />
            </select-item>
          </a-col>
        </a-row>
      </a-col>
      <a-col :span="7" offset="1">
        <select-item
          v-if="resultLen && transfer"
          title="已选"
          clear
          @on-clear="$emit('on-clear', {list: data})">
          <div
            v-for="item in result"
            :key="item.id"
            class="c-pop-tip">
            <a-tag
              closable
              class="c-tag-item"
              @close="handleClose(item.value)">{{item.value}}</a-tag>
          </div>
        </select-item>
      </a-col>
    </a-row>
  </div>
</template>
<script>
import SelectItem from './select-item.vue'
import SelectBox from './select-box.vue'
export default {
  name: 'selecter',
  components: { SelectItem, SelectBox },
  props: {
    value: {
      type: Array
    },
    title: {
      type: Array
    },
    data: {
      type: Array
    },
    transfer: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      resource: []
    }
  },
  computed: {
    col () {
      return this.resource.length > 1 ? 24 / this.resource.length : 12
    },
    result () {
      return this.value
    },
    resultLen () {
      return Boolean(this.value.length)
    }
  },
  watch: {
    data (nVal) {
      if (nVal && nVal.length) this.updateResource()
      else this.resource = []
    }
  },
  methods: {
    updateResource () {
      this.resource = []
      this.resource.push({
        data: this.data,
        current: '',
        level: 1,
        title: this.title[0]
      })
    },
    handleClose (name) {
      this.$emit('on-delete', { list: this.data, name })
    },
    selectAll ({ level, check, cat }) {
      let index = level - 2
      let current = index > -1 ? this.resource[index].current : ''
      cat && (current = cat)
      this.$emit('on-select', {
        check,
        current,
        list: this.data
      })
    },
    pushChild (params) {
      const { item, level } = params
      const len = this.resource.length
      if (level <= len - 1) {
        this.resource.splice(level, len - level)
      }
      this.resource.push({
        data: item.children,
        current: '',
        level: level + 1,
        title: this.title[level] || item.value
      })
      this.resource[level - 1].current = item.value
    }
  },
  created () {
    this.updateResource()
  }
}
</script>
<style lang="less" scoped>
.c-pop-tip {
  width: 100%;
}
.c-tag-item {
  width: 90%;
  margin: 8px 8px 0;
  padding: 2px 6px;
  display: block;
  height: 28px;
  /deep/ .anticon-close {
    float: right;
    line-height: 25px;
  }
}
</style>
