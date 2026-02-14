export default typeof definePageConfig === 'function'
  ? definePageConfig({
      navigationBarTitleText: '首页',
      navigationBarBackgroundColor: '#2563eb',
      navigationBarTextStyle: 'white'
    })
  : {
      navigationBarTitleText: '首页',
      navigationBarBackgroundColor: '#2563eb',
      navigationBarTextStyle: 'white'
    }
