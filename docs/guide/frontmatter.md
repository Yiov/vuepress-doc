---
next:
  text: Markdown
  link: /guide/markdown
---

# Frontmatter

> 最近更新：2024-7-29


## 配置参考

官方将默认配置教程放到了 [Vuepress生他系统](https://ecosystem.vuejs.press/zh/themes/default/frontmatter.html)

## 页面属性


### lang

```md
---
lang: zh-CN
---
```

### title

```md
---
title: 页面的标题
---
```

### description

```md
---
description: 页面的描述
---
```

![](/frontmatter/01.png)


### head

一般我们在config.ts中统一配置即可，无需单独设置页面的head，如果你有特殊的需求可以使用

```md
---
head:
  - - meta
    - name: foo
      content: yaml 第一种，数组语法
  - [meta, { name: bar, content: 第二种，方括号语法 }]
---
```


## 首页

### 设置首页

::: tip  说明
设置为 true ，就是首页，无侧边栏

不设置(默认关闭)，是普通页面，即文档页，有侧边栏
:::

```md{2}
---
home: true
---
```

打开 `README.md` ，首页就设定好了，我们依次添加其他元素来完善主页

![](/frontmatter/02.png)



### 图片路径

默认的路径是public文件夹，首页图片的引用方式 二选一

```md{3,5}
---
# Public文件路径 本地引用
heroImage: /images/logo.png

# URL 远程引用
heroImage: https://vuejs.org/images/logo.png
---
```

夜间模式中，单独使用其他的首页图片，示例：

::: tip 说明
有的人logo是黑色的，如果遇到夜间模式就需要单独配置，不然看不到了
:::

```md{2}
---
heroImageDark: /images/logodark.png
---
```



### 首页按钮

用 `actions` 配置首页按钮，一般2个是比较舒适的，当然你也可以配置多个

::: tip 说明
- text：显示文字

- link：跳转路径

- type：主次类型显示；仅primary默认，secondary次要
:::

输入：

```md{2-8}
---
actions:
  - text: 快速上手
    link: /guide/getting-started.html
    type: primary
  - text: 项目简介
    link: /guide/
    type: secondary
---
```

输出：

![](/frontmatter/03.png)




### 特性列表

用 `features` 配置首页特性列表

输入：

```md{2-8}
---
features:
  - title: 简洁至上
    details: 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
  - title: Vue 驱动
    details: 享受 Vue 的开发体验，可以在 Markdown 中使用 Vue 组件，又可以使用 Vue 来开发自定义主题。
  - title: 高性能
    details: VuePress 会为每个页面预渲染生成静态的 HTML，同时，每个页面被加载的时候，将作为 SPA 运行。
---
```

输出：

![](/frontmatter/04.png)






### 页脚


用 `footer` 配置首页的页脚，一般就是版权和备案信息


```md{2}
---
footer: MIT Licensed | Copyright © 2018-present Evan You
---
```

但有一个特殊情况，要备案的话需要有跳转，这里直接打 `</a>` 标签不能用

我们将页脚的html开启，然后书写备案信息

```md{2,4}
---
footerHtml: true

footer: Copyright © 2023 备案号：<a href="https://beian.miit.gov.cn/" target="_blank">京****号</a>
---
```

输出：

![](/frontmatter/05.png)




## 普通页


### 上个页面

会自动根据侧边栏配置进行推断，不是自己想要的你也可以手动配置


格式：

```md
---
# NavLink
prev:
  text: Get Started
  link: /guide/getting-started.html

# NavLink - 外部 URL
prev:
  text: GitHub
  link: https://github.com

# 字符串 - 页面文件路径
prev: /guide/getting-started.md

# 字符串 - 页面文件相对路径
prev: ../../guide/getting-started.md
---
```







### 下个页面


下一个页面的链接，会自动根据侧边栏配置进行推断，不是自己想要的你也可以手动配置

格式：

```md
---
# NavLink
next:
  text: Get Started
  link: /guide/getting-started.html

# NavLink - 外部 URL
next:
  text: GitHub
  link: https://github.com

# 字符串 - 页面文件路径
next: /guide/getting-started.md

# 字符串 - 页面文件相对路径
next: ../../guide/getting-started.md
---
```




### layout

如果主题布局无法满足你的需求，你可以使用自定义布局组件

示例：

在 `.vuepress/client.ts` 文件中注册一个布局组件：

```ts
import { defineClientConfig } from '@vuepress/client'
import CustomLayout from './CustomLayout.vue'

export default defineClientConfig({
  layouts: {
    CustomLayout,
  },
})
```

布局中写

```md
---
layout: CustomLayout
---
```


### pageClass

为当前页面添加额外的样式

在 `.vuepress/styles/index.scss` 文件中为这个页面添加自定义样式

```scss
.theme-container.custom-page-class {
  /* 页面样式 */
}
```

然后再布局中写就可以引用

```md
---
pageClass: custom-page-class
---
```

