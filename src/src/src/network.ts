import Taro from '@tarojs/taro'

class Network {
  private baseUrl: string

  constructor() {
    // 开发环境
    this.baseUrl = process.env.TARO_ENV === 'weapp' ? 'http://localhost:3000' : '/api'
  }

  async request(options: Taro.request.Option<any>) {
    const url = options.url.startsWith('http') ? options.url : `${this.baseUrl}${options.url}`
    
    return Taro.request({
      ...options,
      url,
      header: {
        'Content-Type': 'application/json',
        ...options.header
      }
    })
  }

  async uploadFile(options: Taro.uploadFile.Option) {
    const url = options.url.startsWith('http') ? options.url : `${this.baseUrl}${options.url}`
    
    return Taro.uploadFile({
      ...options,
      url
    })
  }

  async downloadFile(options: Taro.downloadFile.Option) {
    const url = options.url.startsWith('http') ? options.url : `${this.baseUrl}${options.url}`
    
    return Taro.downloadFile({
      ...options,
      url
    })
  }
}

export const Network = new Network()
export default Network
