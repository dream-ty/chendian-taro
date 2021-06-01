import Vue from 'vue'
import Taro from '@tarojs/taro'
import 'taro-ui-vue/dist/style/index.scss'
import './app.scss'

const App = {
  mounted () {
    if (process.env.TARO_ENV === 'weapp') {
      Taro.cloud.init({
        env: 'chendian-taro-6gqb6vxzcb76cb82' 
      })
    }
  },
  onShow (options) {
  },
  render(h) {
    // this.$slots.default 是将要会渲染的页面
    return h('block', this.$slots.default)
  }
}

export default App
