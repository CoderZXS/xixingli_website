# 西兴里科技 - IT外包公司官网

基于 Vite + Vue 3 + Element-Plus + TypeScript 构建的IT外包公司官方网站。

## 技术栈

- **构建工具**: Vite 8.x
- **前端框架**: Vue 3.5.x (Composition API + `<script setup>`)
- **UI组件库**: Element-Plus 2.x
- **路由**: Vue Router 4.x
- **语言**: TypeScript 6.x
- **包管理**: npm

## 项目结构

```
it-outsourcing-website/
├── public/
│   └── favicon.svg          # 网站图标
├── src/
│   ├── components/           # 公共组件
│   │   ├── AppHeader.vue    # 导航栏（响应式+滚动效果）
│   │   ├── AppFooter.vue    # 页脚
│   │   └── BackToTop.vue     # 返回顶部按钮
│   ├── views/               # 页面组件
│   │   ├── Home.vue         # 首页（Hero+服务+优势+统计+流程+CTA）
│   │   ├── Services.vue     # 服务领域（6大服务详情+技术栈）
│   │   ├── Cases.vue        # 成功案例（筛选+卡片+详情弹窗）
│   │   ├── About.vue        # 关于我们（公司简介+发展历程+团队+资质）
│   │   └── Contact.vue      # 联系我们（联系方式+表单+FAQ）
│   ├── router/
│   │   └── index.ts         # 路由配置（懒加载）
│   ├── styles/
│   │   └── main.css         # 全局样式（CSS变量+重置+通用类）
│   ├── App.vue              # 根组件
│   └── main.ts              # 应用入口
├── index.html               # HTML模板
├── vite.config.ts           # Vite配置（@别名+端口）
├── tsconfig.json            # TypeScript配置
├── tsconfig.app.json        # 应用TS配置
└── package.json             # 项目依赖
```

## 功能特性

- ✅ 响应式设计（PC/平板/手机）
- ✅ 5个完整页面（首页/服务/案例/关于/联系）
- ✅ 固定导航栏（滚动透明效果+移动端汉堡菜单）
- ✅ 首页Hero动画（浮动卡片+脉冲效果）
- ✅ 案例筛选与详情弹窗
- ✅ 联系表单（含表单验证）
- ✅ FAQ折叠面板
- ✅ 返回顶部按钮
- ✅ 路由懒加载
- ✅ 页面切换过渡动画
- ✅ SEO Meta标签

## 快速开始

```bash
# 安装依赖
npm install

# 启动开发服务器 (http://localhost:3000)
npm run dev

# 构建生产版本
npm run build

# 预览生产版本
npm run preview
```

## 页面说明

| 页面     | 路径        | 说明                                                  |
| -------- | ----------- | ----------------------------------------------------- |
| 首页     | `/`         | Hero横幅、核心服务、公司优势、数据统计、服务流程、CTA |
| 服务领域 | `/services` | 6大服务详情、技术栈展示                               |
| 成功案例 | `/cases`    | 案例筛选、卡片展示、详情弹窗                          |
| 关于我们 | `/about`    | 公司简介、使命愿景、发展历程、核心团队、资质认证      |
| 联系我们 | `/contact`  | 联系方式、咨询表单、地图占位、FAQ                     |

## 自定义配置

- 主题色修改: `src/styles/main.css` 中的 `:root` CSS变量
- 公司信息修改: 各组件中的数据数组
- 路由配置: `src/router/index.ts`

## License

MIT
