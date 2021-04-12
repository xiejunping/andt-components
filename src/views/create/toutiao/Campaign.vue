<template>
  <div class="g-container">
    <moduler name="group_creat" title="基础信息">
      <a-row :gutter="12" class="row-item">
        <a-col :span="4" class="col-item">
          <span class="item-field row-item-must">回调开关</span>
        </a-col>
        <a-col :span="20">

        </a-col>
      </a-row>
    </moduler>
  </div>
</template>
<script>
import Moduler from '@/components/moduler'
export default {
  name: 'tencentcampaign',
  components: { Moduler }
}
</script>
<style lang="less" scoped>
@import "~@/assets/styles/create";

</style>
