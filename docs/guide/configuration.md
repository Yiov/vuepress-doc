# 配置

> 最近更新：2024-7-29


## 打开项目

我们安装了vscode，鼠标右键 `通过code打开`

> 鼠标右键没有，是因为你没有[安装vscode](https://yiov.top/website/VSCode.html)

![](/configuration/01.png)


## 目录结构

项目的目录结构应该是这样的

```md
├─ docs           <--- 文档根目录
│  ├─ .vuepress        <--- 配置文件夹
│  │  └─ .cache        <--- 缓存文件
│  │  └─ .temp         <--- 临时文件
│  │  └─ config.ts     <--- 配置文件
│  └─ README.md      <--- 网站首页
├─ node_modules    <--- 依赖目录
├─ .gitignore      <--- git忽略文件
└─ package.json    <--- 依赖管理文件
```

## 站点配置

打开 `config.ts`文件，简单配置一下

::: details 你的文件是 config.js ？
JavaScript 格式为 config.js

TypeScript 格式为 config.ts【推荐】
:::

```md{3}
├─ docs
│  ├─ .vuepress
│  │  └─ config.ts   <--- 配置文件
│  └─ README.md
├─ .gitignore
└─ package.json
```

复制下面代码，粘贴并保存！

```ts title=".vuepress/config.ts"{10-12}
import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  bundler: viteBundler(),
  theme: defaultTheme(),

  lang: 'zh-CN',
  title: '你好， VuePress ！',
  description: '这是我的第一个 VuePress 站点',
})
```

![](/configuration/02.png)


`Ctrl` + ` 键，打开vscode内置的终端，运行项目

::: tip 快捷使用说明
方向键 `↑键` ，可快速调用上次命令
:::

:::: code-group
::: code-group-item pnpm
```sh
pnpm docs:dev
```
:::
::: code-group-item yarn
```sh
yarn docs:dev
```
:::
::: code-group-item npm
```sh
npm docs:dev
```
:::
::::

![](/configuration/03.png)



标签栏就有变化了，这样我们基础配置完成了

![](/configuration/04.png)





## 客户端配置文件(可选)

像我这种小白，基本很难用到了，有些代码基础的可以了解一下

```
├─ docs
│  ├─ .vuepress
│  │  ├─ client.ts   <--- 客户端配置文件
│  │  └─ config.ts
│  └─ README.md
├─ .gitignore
└─ package.json
```

步骤也是一样的，在 `.vuepress` 目录下新建一个 `client.ts`文件

![](/configuration/05.png)

一个基础的客户端配置文件是这样的

```ts title=".vuepress/client.ts"
import { defineClientConfig } from 'vuepress/client'

export default defineClientConfig({
  enhance({ app, router, siteData }) {},
  setup() {},
  rootComponents: [],
})
```
![](/configuration/06.png)

