export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/create-character/index',
    'pages/character/index',
    'pages/cultivation/index',
    'pages/battle/index',
    'pages/bag/index',
    'pages/quest/index',
    'pages/shop/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#2563eb',
    navigationBarTitleText: '指尖修仙传',
    navigationBarTextStyle: 'white'
  },
  tabBar: {
    color: '#999999',
    selectedColor: '#2563eb',
    backgroundColor: '#ffffff',
    list: [
      { pagePath: 'pages/index/index', text: '首页' },
      { pagePath: 'pages/character/index', text: '角色' },
      { pagePath: 'pages/cultivation/index', text: '修炼' },
      { pagePath: 'pages/battle/index', text: '战斗' },
      { pagePath: 'pages/bag/index', text: '背包' }
    ]
  }
})
