# 组件

> 最近更新：2024-7-29



## 基本组成

组件由三部分组成：`<template>` `<script>` `<style>`

::: tip 对应关系
template 对应 html

script 对应 js

style 对应 css
:::


## 注册插件

个人建议是在 `clients.ts` [客户端配置](./configuration.md#客户端配置文件-可选) 中添加，非常方便

```ts{3,6-8}
// clients.ts
import { defineClientConfig } from '@vuepress/client'
import MyComponent from './components/MyComponent.vue'

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    app.component('MyComponent', MyComponent)
  },
})
```



## layouts

layouts 配置项用于设置布局组件。你在此处注册布局后，用户就可以通过 [layout](https://v2.vuepress.vuejs.org/zh/reference/frontmatter.html#layout) frontmatter 来使用它们


```ts
import { defineClientConfig } from 'vuepress/client'
import MyLayout from './layouts/MyLayout.vue'

export default defineClientConfig({
  layouts: {
    MyLayout,
  },
})
```


