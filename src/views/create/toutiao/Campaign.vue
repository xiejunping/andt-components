<template>
  <div class="g-container">
    <moduler name="group_creat" title="基础信息">
      <row-form>
        <row-item label="推广目的" prop="landing_type">
          <a-radio-group v-model="form.landing_type" button-style="solid">
            <a-radio-button value="APP">应用</a-radio-button>
            <a-radio-button value="LINK">销售线索收集</a-radio-button>
            <a-radio-button value="STORE">门店</a-radio-button>
            <a-radio-button value="SHOP">电商店铺推广</a-radio-button>
          </a-radio-group>
        </row-item>

        <row-item label="广告组预算" prop="budget_mode">
          <a-radio-group v-model="form.budget_mode" button-style="solid">
            <a-radio-button value="BUDGET_MODE_INFINITE">不限</a-radio-button>
            <a-radio-button value="BUDGET_MODE_DAY">指定预算</a-radio-button>
          </a-radio-group>
        </row-item>

        <row-item label="日预算" prop="budget" required v-if="form.budget_mode === 'BUDGET_MODE_DAY'">
          <a-input-number v-model="form.budget" :min="0" :max="9999999.99" :precision="2" />
        </row-item>

        <row-item label="广告组名称" prop="campaign_name" required>
          <len-input v-model="form.campaign_name" :max="100" style="width:640px" />
        </row-item>

        <row-item label="状态" prop="operation">
          <a-switch checked-children="开启" un-checked-children="关闭" default-checked />
        </row-item>
      </row-form>
    </moduler>

    <a-row class="c-bar-submit">
      <a-col :span="12">
        <error-pop
          v-model="formErr"
          :state="Boolean(!errRes.length)"
          :data="errRes"
          @on-close="cannelError" />
      </a-col>
      <a-col :span="12" class="c-bar-btns">
        <a-button type="primary" :loading="loading" @click="submitToNext">
          <span v-if="!loading">保存并下一步</span>
          <span v-else>提交中...</span>
        </a-button>
      </a-col>
    </a-row>
  </div>
</template>
<script>

export default {
  name: 'tencentcampaign',
  components: { },
  data () {
    return {
      loading: null,
      formErr: true,
      errRes: [],
      form: {
        landing_type: 'APP',
        budget_mode: 'BUDGET_MODE_INFINITE',
        budget: 0,
        campaign_name: ''
      }
    }
  },
  methods: {
    submitToNext () {},
    cannelError () {}
  }
}
</script>
<style lang="less" scoped>
@import "~@/assets/styles/create";

.c-bar-submit {
  margin: 15px;
  padding: 15px;
  min-width: 1130px;
  background-color: #fff;
  border: 1px solid #eaeaea;
  border-radius: 2px;
  box-shadow: 0 2px 4px 0 #eff1fa;
  .c-bar-btns {
    text-align: right;
    button {
      margin-left: 8px;
      &:last-of-type {
        margin-bottom: 0;
      }
    }
  }
}
</style>
