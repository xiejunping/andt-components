<template>
  <select-item :title="title">
    <a-radio-group v-model="current">
      <a-radio
        class="c-version-item"
        v-for="r in versions"
        :key="r.value"
        :value="r.value">{{r.label}}</a-radio>
    </a-radio-group>
  </select-item>
</template>
<script>
import SelectItem from '../selecter/select-item'
export default {
  name: 'Version',
  components: { SelectItem },
  props: {
    value: {
      type: [String, Number],
      default: 'NONE'
    },
    data: {
      type: Array,
      default () {
        return []
      }
    },
    title: {
      type: String,
      default: '版本',
      required: true
    },
    android: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    current: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('input', val)
      }
    },
    vername () {
      return this.android ? 'Android' : 'iOS'
    },
    versions () {
      const data = this.data.map(ret => {
        return {
          label: `${this.vername} ${ret}及以上`,
          value: ret
        }
      })
      return [{ label: '不限', value: 'NONE' }, ...data]
    }
  }
}
</script>
<style lang="less" scoped>
.c-select-item {
  width: 400px;
  .c-version-item {
    display: block;
    height: 34px;
    line-height: 34px;
    margin-left: 12px;
  }
}
</style>
