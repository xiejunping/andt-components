<template>
  <div class="about">
    <h1>This is an about page</h1>

    <h2>投放组件</h2>
    <div class="demo">
      <a-row :gutter="12">
        <a-col :span="6">计划名称</a-col>
        <a-col :span="18">
          <div :style="{ width: '380px' }">
            <input-len
              v-model="name"
              width="420"
              :max="50"
              v-peach:event="{category: 'components', action: 'inputLen'}"
              placeholder="最大50个字符，1个中文等于2个字符" />
            <textarea-len
              v-model="descript"
              width="420"
              :max="100"
              v-peach:event="{category: 'components', action: 'textareaLen'}"
              placeholder="最大100个字符，1个中文等于2个字符" />
          </div>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="6"></a-col>
        <a-col :span="18">
          <span>name:</span>
          <span>{{name}}</span>
        </a-col>
      </a-row>
      <a-row :gutter="12">
        <a-col :span="6">草花游戏</a-col>
        <a-col :span="18">
          <div :style="{ width: '380px' }">
            <drop-tree
              v-model="gameId"
              :options="gameData"
              v-peach:event="{category: 'components', action: 'droptree'}"
              noResultsText="无匹配数据"
              placeholder="请选择游戏"></drop-tree>
          </div>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="6"></a-col>
        <a-col :span="18">
          <span>gameId:</span>
          <span>{{gameId}}</span>
        </a-col>
      </a-row>
      <a-row :gutter="12">
        <a-col :span="6">
          <span>运营商</span>
        </a-col>
        <a-col :span="18">
          <mixcheck v-model="carrier" v-peach:event="{category: 'components', action: 'mixcheck'}">
            <radio-item label="NONE">不限</radio-item>
            <check-item label="MOBILE">移动</check-item>
            <check-item label="UNICOM">联通</check-item>
            <check-item label="TELCOM">电信</check-item>
          </mixcheck>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="6"></a-col>
        <a-col :span="18">
          <span>carrier:</span>
          <span>{{carrier}}</span>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="6">
          <span>地域</span>
        </a-col>
        <a-col :span="18">
          <selecter
            v-model="mult_city"
            :data="cityData"
            :title="['省份', '城市']"
            v-peach:event="{category: 'components', action: 'selecter'}" />
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="6"></a-col>
        <a-col :span="18">
          <span>city:</span>
          <span>{{mult_city}}</span>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="6">
          <span>iOS版本</span>
        </a-col>
        <a-col :span="18">
          <version
            v-model="ios_osv"
            :data="iOSVersion"
            v-peach:event="{category: 'components', action: 'version'}"
            title="iOS版本" />
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="6"></a-col>
        <a-col :span="18">
          <span>ios_osv:</span>
          <span>{{ios_osv}}</span>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="6">
          <span>投放目标</span>
        </a-col>
        <a-col :span="18">
          <a-radio-group v-model="pricing" v-peach:event="{category: 'components', action: 'aradiogroup'}" @change="changePricing">
            <a-radio-button value="PRICING_OCPM">转化量</a-radio-button>
            <a-radio-button value="PRICING_CPC">点击量</a-radio-button>
            <a-radio-button value="PRICING_CPM">展示量</a-radio-button>
            <a-radio-button value="PRICING_CPV">有效播放量</a-radio-button>
          </a-radio-group>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="6"></a-col>
        <a-col :span="18">
          <span>pricing:</span>
          <span>{{pricing}}</span>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="6">
          <span>投放时间</span>
        </a-col>
        <a-col :span="18">
          <!-- <date-picker
            type="daterange"
            :value="datetime"
            :options="datetimeOption"
            confirm
            split-panels
            placement="bottom-end"
            placeholder="请选择查询日期范围"
            style="width: 180px"
            @on-change="handleDatetime"
            @on-ok="confirmDatetime"
            @on-clear-shortcut="clearShortCut" /> -->
          <a-range-picker
            v-model="datetime"
            :ranges="dateOption"
            v-peach:event="{category: 'components', action: 'arangepicker'}"
            :disabledDate="date => date && date.valueOf() > Date.now()"
            :placeholder="['请选择查询日期开始', '请选择查询日期结束']"
            @change="handleDatetime" />
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="6"></a-col>
        <a-col :span="18">
          <span>datetime:</span>
          <span>{{moment(datetime[0]).format('YYYY/MM/DD')}} ~ {{moment(datetime[1]).format('YYYY/MM/DD')}}</span>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="6">
          <span>投放时段</span>
        </a-col>
        <a-col :span="18">
          <drag-weektime
            v-model="mult_timeRange"
            v-peach:event="{category: 'components', action: 'dragWeektime'}">
          </drag-weektime>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="6"></a-col>
        <a-col :span="18">
          <span>mult_timeRange:</span>
          <span>{{mult_timeRange}}</span>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="6">
          <span>开关阻止事件</span>
        </a-col>
        <a-col :span="18">
          <a-popconfirm
            title="是否确定打开这个开关？"
            ok-text="确定"
            cancel-text="取消"
            @confirm="confirm"
          >
            <a-switch v-peach:event="{category: 'components', action: 'aswitch'}" :checked="switchBell"></a-switch>
          </a-popconfirm>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="6"></a-col>
        <a-col :span="18">
          <span>switchBell:</span>
          <span>{{switchBell}}</span>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="6">分页</a-col>
        <a-col :span="18">
          <a-pagination
            showSizeChanger
            :defaultCurrent="3"
            :total="500"
          />
        </a-col>
      </a-row>

      <a-form :form="form">
        <a-form-item label="计划名称">
          <input-len
            v-decorator="['name', { initialValue: '' }]"
            width="420"
            :max="50"
            placeholder="最大50个字符，1个中文等于2个字符" />
        </a-form-item>
        <a-form-item label="投放目标">
          <a-radio-group v-decorator="['pricing']" @change="changePricing">
            <a-radio-button value="PRICING_OCPM">转化量</a-radio-button>
            <a-radio-button value="PRICING_CPC">点击量</a-radio-button>
            <a-radio-button value="PRICING_CPM">展示量</a-radio-button>
            <a-radio-button value="PRICING_CPV">有效播放量</a-radio-button>
          </a-radio-group>
        </a-form-item>
        <a-form-item label="搜索框">
          <a-input-search allow-clear enterButton v-peach:event="{category: 'components', action: 'asearch'}" @search="search" />
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>
<script>
import moment from 'moment'

import caohuaGames from '@/data/caohua_games.json'
import cityData from '@/data/city_province.json'

const shortCuts = {
  '今天': [moment(), moment()],
  '昨天': [moment().subtract(1, 'days'), moment()],
  '本周': [moment().startOf('week'), moment()],
  '过去7天': [moment().subtract(7, 'days'), moment()],
  '上周': [moment(moment().startOf('week')).subtract(7, 'days'), moment(moment().endOf('week')).subtract(7, 'days')],
  '本月': [moment().startOf('month'), moment()],
  '上个月': [moment(moment().startOf('month')).subtract(1, 'months'), moment(moment().endOf('month')).subtract(1, 'months')]
}
const iOSVersion = [ '11.3', '11.2', '11.1', '10.3', '10.2', '10.1', '9.3', '9.2', '9.1', '9.0', '8.2', '8.1', '8.0', '7.1', '7.0', '6.0', '5.1', '5.0', '4.3', '4.2', '4.1', '4.0' ]

export default {
  name: 'About',
  components: { }, //, DatePicker
  computed: {
    gameData () {
      return this.games.map(ret => {
        return {
          id: ret.id,
          label: ret.name
        }
      })
    }
  },
  beforeCreate () {
    this.form = this.$form.createForm(this)
  },
  data () {
    return {
      name: '',
      descript: '',
      carrier: 'NONE',
      gameId: null,
      games: caohuaGames,
      mult_city: [],
      cityData: cityData,
      ios_osv: '9.3',
      iOSVersion: iOSVersion,
      pricing: 'PRICING_OCPM',
      switchBell: false,
      mult_timeRange: '000000000000000000000001111000000000000000000000000000000000000000000001111000000000000000000000000000000000000000000001111000000000000000000000000000000000000000000001111000000000000000000000000000000000000000000001111000000000000000000000000000000000000000000001111000000000000000000000000000000000000000000001111000000000000000000000',
      datetime: [moment('2019/10/19', 'YYYY/MM/DD'), moment('2019/10/20', 'YYYY/MM/DD')],
      dateOption: shortCuts
    }
  },
  methods: {
    moment,
    confirm () {
      this.switchBell = !this.switchBell
    },
    clickSwitch () {
      console.log(arguments[0])
    },
    handleDatetime (val) {
      this.datetime = val
    },
    confirmDatetime () {
      // this.comDate = JSON.parse(JSON.stringify(this.datetime))
    },
    clearShortCut () {
      const shortCut = document.querySelectorAll('.ivu-picker-panel-shortcut')
      const len = shortCut.length
      for (let i = 0; i < len; i++) {
        shortCut[i].style.background = 'none'
      }
    },
    changePricing () {
      console.log(arguments)
    },
    search () {}
  }
}
</script>
<style lang="less" scoped>
.demo {
  padding: 12px 44px;
  text-align: left;
}
.ant-row {
  margin: 15px 0;
}
</style>
