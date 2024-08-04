---
prev:
  text: 前言
  link: /guide/
---

# 快速上手

> 最近更新：2024-7-29



::: danger 注意
本人已转用 [Vitepress](https://vitepress.yiov.top/) ，可能不会再更新了
:::


## 在线体验

免安装体验及调试 StackBlitz：[https://stackblitz.com/fork/vuepress](https://stackblitz.com/fork/vuepress)



## 前期工作


::: tip 说明
已经安装 或者 熟练了，可以不用看此步骤
:::

::: details 必备工具

* 必装：[nodejs](https://yiov.top/website/nodejs.html)


* 建议安装：[VScode](https://yiov.top/website/VSCode.html)


* 可选安装：[git](https://yiov.top/website/pages/git.html)
:::


::::: details pnpm

安装好nodejs后，通过 npm 安装 [pnpm](https://pnpm.io/zh/) 或 [yarn](https://www.yarnpkg.cn/)


:::: code-group
::: code-group-item pnpm
```sh
#安装pnpm
npm install -g pnpm
#查看版本号
pnpm -v
```
:::
::: code-group-item yarn
```sh
#安装yarn
npm install -g yarn
#查看版本号
yarn -v
```
:::
::::

![](/getting-started/01.png)

:::::


:::: details 创建文件目录

win键+R键，调出命令运行框，输入 `cmd`

![](/getting-started/02.png)


先进入任意盘符，比如 F 盘

```sh
#盘符可以自定义 回车进入
f:
```

![](/getting-started/03.png)

再创建文件夹名

```sh
#创建目录并进入，也可以自定义目录名
mkdir vuepress && cd vuepress
```

::: tip 说明
这样我的目录路径为 `F:\vuepress`

不习惯的，也可以直接电脑创建
:::

![](/getting-started/04.png)

::::


## 安装

::: tip 说明
如果你是首次接触，推荐你使用 [一键安装](#一键安装) 

你已经够熟练了，直接使用 [手动安装](#手动安装)
:::

## 一键安装


通过 [create-vuepress](https://www.npmjs.com/package/create-vuepress) 直接创建项目模板

:::: code-group
::: code-group-item pnpm
```sh
pnpm create vuepress vuepress-starter
```
:::
::: code-group-item yarn
```sh
yarn create vuepress vuepress-starter
```
:::
::: code-group-item npm
```sh
npm init vuepress vuepress-starter
```
:::
::::

用键盘 `方向键↓` 选择 简体中文，回车

![](/getting-started/05.png)

包管理器就选择你安装时的包，我是pnpm，回车

![](/getting-started/06.png)

打包器用默认的vite即可，回车

![](/getting-started/07.png)

项目类型，我用文档演示，用键盘 `方向键↓` 选择 `docs`

![](/getting-started/08.png)

应用名称、版本号、描述也可以之后再改，直接回车

默认协议MIT，默认创建工作流，回车

![](/getting-started/09.png)

等下载安装完成，问是否启动，输入 `y` 回车

::: details WARN  Issues with peer dependencies found
这里提示依赖关系需要不对等，不急，我们等会处理
:::

![](/getting-started/10.png)


这里自动生成了一个本地8080端口的网页，复制到浏览器打开

![](/getting-started/11.png)


::::: details 打开网页一片空白，什么都没有

这就是刚才提示依赖不对等造成的，我们`ctrl+c` ，输入 `y` 回车结束终端

![](/getting-started/12.png)

进入自动创建的vuepress-starter文件夹

```sh
cd vuepress-starter
```

使用 pnpm dlx 升级vuepress

:::: code-group
::: code-group-item pnpm
```sh
pnpm dlx vp-update
```
:::
::: code-group-item yarn
```sh
yarn dlx vp-update
```
:::
::: code-group-item npm
```sh
npx vp-update
```
:::
::::

![](/getting-started/13.png)

最后手动启动看看，已经可以查看网页了


:::: code-group
::: code-group-item pnpm
```sh
pnpm docs:dev
```
:::
::: code-group-item yarn
```sh
yarn dlx vp-update
```
:::
::: code-group-item npm
```sh
npx vp-update
```
:::
::::


![](/getting-started/14.png)


:::::

![](/getting-started/15.png)






## 手动安装


cmd不小心关了，在目录上方的地址栏输入 `cmd` 回车，可以快捷打开

![](/getting-started/16.png)


### 初始化

:::: code-group
::: code-group-item pnpm
```sh
pnpm init
```
:::
::: code-group-item yarn
```sh
yarn init
```
:::
::: code-group-item npm
```sh
npm init
```
:::
::::

![](/getting-started/17.png)




### 安装依赖


:::: code-group
::: code-group-item pnpm
```sh
# 安装 vuepress 和 vue
pnpm add -D vuepress@next vue
# 安装打包工具和主题
pnpm add -D @vuepress/bundler-vite@next @vuepress/theme-default@next
```
:::
::: code-group-item yarn
```sh
# 安装 vuepress
yarn add -D vuepress@next
# 安装打包工具和主题
yarn add -D @vuepress/bundler-vite@next @vuepress/theme-default@next
```
:::
::: code-group-item npm
```sh
# 安装 vuepress
npm install -D vuepress@next
# 安装打包工具和主题
npm install -D @vuepress/bundler-vite@next @vuepress/theme-default@next
```
:::
::::


![](/getting-started/18.png)

![](/getting-started/19.png)

### 创建目录

```sh
# 创建 docs 目录和 docs/.vuepress 目录
mkdir docs
mkdir docs\.vuepress
```

![](/getting-started/20.png)




### 创建配置文件

在 docs/.vuepress/ 目录中，创建一个空的配置文件

```sh
echo >docs/.vuepress/config.ts
```

![](/getting-started/21.png)



右键记事本打开，复制下面代码，粘贴到 `config.ts` 中保存

```ts
import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  bundler: viteBundler(),
  theme: defaultTheme(),
})
```

![](/getting-started/22.png)



### 脚本命令

在 `package.json` 中更改 scripts 命令，保存

```json{2-3}
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
```

::: tip 命令讲解
执行命令 `docs:dev`，就会运行 `vuepress dev docs`

执行命令 `docs:build`，就会运行 `vuepress build docs`
:::


![](/getting-started/23.png)



### git忽略项

添加 `.gitignore` 文件，主要用于上传到gitee/github的忽略项

::: warning 注意
分别将 依赖文件 / 临时目录 / 缓存目录 / 静态目录 添加到.gitignore文件中

建议先使用cmd，使用vscode有可能会出现乱码
:::

```sh
echo node_modules >> .gitignore

echo .temp >> .gitignore

echo .cache >> .gitignore

echo dist >> .gitignore
```

![](/getting-started/24.png)

::: details Github上传未忽略dist文件夹
原因：vscode输入命令导致编码错误

解决：Github Desktop - Repository settings - ignored files

输入我们忽略的dist文件即可，save保存即可

```
node_modules
.temp
.cache
dist
```
:::




### 创建文档

::: warning 注意
建议先使用cmd，使用vscode有可能会出现乱码
:::

创建你的第一篇文档

```sh
echo # Hello VuePress > docs/README.md
```

![](/getting-started/25.png)




### 本地启动

执行在 [脚本命令](#脚本命令) 中的命令，进入开发环境来搭建文档网站

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

::: tip 如何退出
`ctrl+c` 即可退出开发模式
:::

![](/getting-started/26.png)


本地启动了一个 `8080` 端口的热重载开发服务器

复制 `http://localhost:8080` 网址到浏览器打开，看到页面就说明vuepress就搭建完成了

::: warning 注意
接下来我们可以关闭cmd，全程用vscode了
:::


![](/getting-started/27.png)
