export default {
  pages: [
    'pages/index/index',
    'pages/mine/index'
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
        "text": "้ฆ้กต"
      },
      {
        "pagePath": "pages/mine/index",
        "iconPath": "images/mine.png",
        "selectedIconPath": "images/mineSelect.png",
        "text": "ๆ็"
      }
    ]
  },
}
