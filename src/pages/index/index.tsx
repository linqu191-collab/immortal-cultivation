import { View, Text, Button } from '@tarojs/components'
import Taro from '@tarojs/taro'
import './index.config'

export default function IndexPage() {
  const handleStartGame = async () => {
    try {
      Taro.showToast({ title: '功能开发中...', icon: 'none' })
    } catch (error) {
      console.error('启动失败', error)
    }
  }

  return (
    <View className="min-h-screen bg-gradient-to-b from-blue-600 to-purple-600">
      <View className="flex flex-col items-center justify-center min-h-screen p-4">
        <Text className="text-4xl font-bold text-white mb-4">指尖修仙传</Text>
        <Text className="text-lg text-white mb-2">踏入修仙之路，成就不朽传说</Text>
        <Text className="text-base text-white opacity-80 mb-8">修仙 · 战斗 · 飞升</Text>

        <View className="w-full max-w-sm">
          <View className="bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl p-6 mb-4">
            <Text className="block text-white text-lg font-semibold mb-2">游戏特色</Text>
            <View className="space-y-3">
              <View className="flex items-center">
                <Text className="text-yellow-400 mr-2">⚔️</Text>
                <Text className="text-white text-sm">自由修炼，突破境界</Text>
              </View>
              <View className="flex items-center">
                <Text className="text-red-400 mr-2">🔥</Text>
                <Text className="text-white text-sm">热血战斗，挑战妖兽</Text>
              </View>
              <View className="flex items-center">
                <Text className="text-purple-400 mr-2">✨</Text>
                <Text className="text-white text-sm">挂机收益，轻松修炼</Text>
              </View>
              <View className="flex items-center">
                <Text className="text-green-400 mr-2">💊</Text>
                <Text className="text-white text-sm">炼丹炼器，提升实力</Text>
              </View>
            </View>
          </View>

          <Button
            onClick={handleStartGame}
            className="w-full bg-white text-blue-600 font-bold py-4 rounded-2xl text-lg shadow-lg"
          >
            开始修仙之旅
          </Button>
        </View>
      </View>
    </View>
  )
}
