<template>
  <view className="index">
    <button @tap="getLogin">获取登录云函数12</button>
    <text>context：{{ context }}</text>
  </view>
</template>

<script>
import Taro from "@tarojs/taro";

export default {
  name: "login",
  data() {
    return {
      context: {},
    };
  },
  methods: {
    getLogin() {
      Taro.cloud
        .callFunction({
          name: "login",
          data: {
            a: 1,
            b: 2,
          },
        })
        .then((res) => {
          this.context = JSON.stringify(res.result)
          console.log(1111111111,res.result.openid, res.result.event, res.result.context );
        })
        // .catch(() => {
        //   console.log("异常");
        // });
    },
  },
};
</script>
