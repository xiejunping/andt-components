<template>
  <label :class="wrapClasses">
    <span class="c-radio-item">
      <input
        type="radio"
        :class="inputClasses"
        :disabled="disabled"
        :checked="currentValue"
        :name="name"
        @change="change" />
      <slot>
        <span v-if="showSlot">
          {{ label }}
        </span>
      </slot>
    </span>
  </label>
</template>
<script>
import { findComponentUpward } from '../assist'
export default {
  name: 'RadioItem',
  props: {
    label: {
      type: [String, Number, Boolean]
    },
    disabled: {
      type: Boolean,
      default: false
    },
    name: {
      type: String
    }
  },
  computed: {
    wrapClasses () {
      return [
        'mixcheck-item',
        'c-radio-wrapper',
        {
          'c-wrapper-checked': this.currentValue,
          'c-wrapper-disabled': this.disabled
        }
      ]
    },
    inputClasses () {
      return 'c-mix-input'
    }
  },
  methods: {
    change (event) {
      if (this.disabled) return false
      const checked = event.target.checked
      this.currentValue = checked
      if (checked) this.parent.change(this.label)
      else this.parent.change('')
    }
  },
  data () {
    return {
      model: null,
      showSlot: true,
      currentValue: false,
      parent: findComponentUpward(this, 'Mixcheck')
    }
  },
  mounted () {
    this.showSlot = this.$slots.default === undefined
    this.parent.updateModel(true)
  }
}
</script>
<style lang="less" scoped>
.c-radio-wrapper {
  min-width: 94px;
  text-align: center;
  position: relative;
  &:hover {
    color: #3990ec;
  }
  .c-mix-input {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
    opacity: 0;
    cursor: pointer;
  }
}
</style>
