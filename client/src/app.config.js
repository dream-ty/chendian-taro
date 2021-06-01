export default {
  pages: [
    'pages/index/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  cloud: true,
  tabBar: {
    "color": "#7A7E83",
    "selectedColor": "#1296db",
    "borderStyle": "black",
    "backgroundColor": "#ffffff",
    "list": [
      {
        "pagePath": "pages/index/index",
        "iconPath": "images/home.png",
        "selectedIconPath": "images/homeSelect.png",
        "text": "首页"
      },
      {
        "pagePath": "pages/index/index",
        "iconPath": "images/mine.png",
        "selectedIconPath": "images/mineSelect.png",
        "text": "我的"
      }
    ]
  },
}
