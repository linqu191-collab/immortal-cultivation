# 指尖修仙传

一款基于 Taro 框架开发的微信小程序修仙游戏。

## 功能特性

- ✅ 角色系统（创建、查看属性）
- ✅ 修炼系统（修炼、升级、突破）
- ✅ 战斗系统（妖兽挑战）
- ✅ 背包系统（物品管理）
- ✅ 任务系统（主线、支线、日常）
- ✅ 商店系统（购买物品）
- ✅ 挂机修炼（离线收益）
- ✅ 炼丹炼器（配方制作）
- ✅ 门派系统（加入门派）
- ✅ 社交系统（好友聊天）

## 技术栈

- 前端：Taro 4.1.9 + React 18 + TypeScript
- 后端：NestJS 10 + Supabase (PostgreSQL)
- UI：Tailwind CSS 4.x

## 快速开始

### 克隆项目
\`\`\`bash
git clone https://github.com/linqu191-collab/immortal-cultivation.git
cd immortal-cultivation
\`\`\`

### 安装依赖
\`\`\`bash
pnpm install
\`\`\`

### 启动开发环境
\`\`\`bash
pnpm dev
\`\`\`

### 构建小程序
\`\`\`bash
pnpm build:weapp
\`\`\`

## 项目结构

\`\`\`
├── src/                    # 前端源代码
│   ├── pages/             # 页面组件
│   │   ├── index/         # 首页
│   │   ├── character/     # 角色信息
│   │   ├── cultivation/   # 修炼系统
│   │   ├── battle/        # 战斗系统
│   │   ├── bag/          # 背包系统
│   │   ├── quest/        # 任务系统
│   │   └── shop/         # 商店系统
│   ├── app.config.ts      # 应用配置
│   └── network.ts         # 网络请求
├── server/                 # 后端源代码
│   └── src/              # 后端模块
│       ├── character/    # 角色模块
│       ├── cultivation/  # 修炼模块
│       ├── battle/       # 战斗模块
│       ├── inventory/    # 背包模块
│       ├── quest/        # 任务模块
│       ├── shop/         # 商店模块
│       └── ...
└── package.json           # 项目配置
\`\`\`

## 部署

详见项目中的部署文档。

## 许可证

MIT
