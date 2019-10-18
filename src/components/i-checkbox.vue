<template>
  <a-checkbox
    :checked="value"
    :indeterminate="indeterminate"
    @change="change">{{label}}</a-checkbox>
</template>
<script>
export default {
  name: 'ICheckbox',
  props: {
    value: {
      type: Boolean
    },
    label: {
      type: String
    },
    indeterminate: {
      type: Boolean
    }
  },
  methods: {
    change (e) {
      this.$emit('input', e.target.checked)
    }
  }
}
</script>
