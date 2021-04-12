<template>
  <a-steps :current="current" direction="vertical" size="small">
    <a-step
      v-for="(moduler, index) in data"
      :key="moduler.id"
      :title="moduler.name"
    >
      <template slot="description" v-if="anchor(index)">
        <a-anchor :show-ink-in-fixed="false">
          <a-anchor-link
            v-for="t in moduler.children"
            :key="t.id"
            :href="`#${t.href}`"
            :title="t.name"
          />
        </a-anchor>
      </template>
      <template slot="description" v-else>
        <ul :class="['nav-ul', { 'c-disable': index > current }]">
          <li v-for="t in moduler.children" :key="t.id">
            <span>{{ t.name }}</span>
          </li>
        </ul>
      </template>
    </a-step>
  </a-steps>
</template>
<script>
export default {
  name: 'Steper',
  props: {
    current: {
      type: Number,
      default: 0
    },
    data: {
      type: Array,
      required: true
    }
  },
  computed: {
    anchor () {
      return (moduler) => moduler === this.current
    }
  }
}
</script>
<style lang="less" scoped>
.nav-ul {
  padding: 8px 0;

  li {
    padding: 7px 0 7px 6px;
    line-height: 1.2;
  }
}
.c-disable {
  cursor: not-allowed;
}

/deep/ .ant-steps-item-title {
  font-weight: 600;
  line-height: 45px;
}
/deep/ .ant-anchor {
  padding-top: 10px;
}
/deep/ .ant-anchor-ink {
  display: none;
}
/deep/ .ant-anchor-link {
  padding-left: 6px;
}
</style>
