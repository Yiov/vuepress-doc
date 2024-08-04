# 插件

> 最近更新：2024-7-29



## Markdown高亮

默认使用内置插件 [Prism.js](https://ecosystem.vuejs.press/zh/plugins/markdown/prismjs.html) 来为 Markdown 代码块启用高亮


而我，因为使用的 vscode 是 [shiki](https://ecosystem.vuejs.press/zh/plugins/markdown/shiki.html) ，我就安装它演示一下

:::: code-group
::: code-group-item pnpm
```sh
pnpm add -D @vuepress/plugin-shiki@next
```
:::
::: code-group-item yarn
```sh
yarn add -D @vuepress/plugin-shiki@next
```
:::
::: code-group-item npm
```sh
npm i -D @vuepress/plugin-shiki@next
```
:::
::::


```ts{1,5-8}
import { shikiPlugin } from '@vuepress/plugin-shiki'

export default defineUserConfig ({
  plugins: [
    //markdown代码高亮配置
    shikiPlugin({
      langs: ['ts', 'json', 'vue', 'md', 'bash', 'diff'],
    }),
  ],
})
```

可以根据自己喜好 [更换主题](https://shiki.tmrs.site/themes)


```ts {8}
import { shikiPlugin } from '@vuepress/plugin-shiki'

export default defineUserConfig ({
  plugins: [
    //markdown代码高亮配置
    shikiPlugin({
      langs: ['ts', 'json', 'vue', 'md', 'bash', 'diff'],
      theme:'one-dark-pro', //主题
      // 双主题
      // themes: {
      //       light: 'one-light',
      //       dark: 'one-dark-pro',
      // },
    }),
  ],
})
```


行高亮和行号显示和默认的使用方式一样，但是shiki还有其他功能

```ts {8}
import { shikiPlugin } from '@vuepress/plugin-shiki'

export default defineUserConfig ({
  plugins: [
    //markdown代码高亮配置
    shikiPlugin({
      notationDiff:true, //启用差异标记
      notationFocus:true , //启用聚焦标记
      notationHighlight:true, //启用高亮标记
      notationErrorLevel:true, //启用错误标记
      notationWordHighlight:true, //启用词高亮标记
    }),
  ],
})
```

输入：

````md
```ts
console.log('hewwo') // [\!code --]
console.log('hello') // [\!code ++]

console.log('Focused')  // [\!code focus]

console.log('Highlighted') // [\!code highlight]

console.warn('Warning') // [\!code warning]
console.error('Error') // [\!code error]

// [\!code word:Hello]
const message = 'Hello World'
console.log(message) // prints Hello World
```
````

输出：

```ts{4}
console.log('hewwo') // [!code --]
console.log('hello') // [!code ++]

console.log('Focused')  // [!code focus]

console.log('Highlighted') // [!code highlight]

console.warn('Warning') // [!code warning]
console.error('Error') // [!code error]

// [!code word:Hello]
const message = 'Hello World'
console.log(message) // prints Hello World
```




## 谷歌分析

利用插件 [google-analytics](https://analytics.google.com/) ，来查看网站访问量


:::: code-group
::: code-group-item pnpm
```sh
pnpm add -D @vuepress/plugin-google-analytics@next
```
:::
::: code-group-item yarn
```sh
yarn add -D @vuepress/plugin-google-analytics@next
```
:::
::: code-group-item npm
```sh
npm i -D @vuepress/plugin-google-analytics@next
```
:::
::::



```ts
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'

export default defineUserConfig ({
  plugins: [
    googleAnalyticsPlugin({
      id: 'G-XXXXXXXXXX', //跟踪ID
    }),
  ],
})
```

谷歌分析官网：[https://analytics.google.com/](https://analytics.google.com/)

点 `开始衡量`

::: tip 说明
没有账号的注册账号，要翻墙哦
:::

![](/plugin/01.png)

信息随便填，后面都可以改

![](/plugin/02.png)

创建完成，点网站，输入你自己的网站

![](/plugin/03.png)

![](/plugin/04.png)



衡量ID就是跟踪ID，我们填入 `config.ts`

![](/plugin/05.png)

如果不想要了，在账户设置里删除账户

::: tip 说明
删除了在回收站里，要35天后永久删除
:::

![](/plugin/06.png)







## 复制代码块

默认主题在移动端没有添加这个功能，可以使用 [官方插件：copy-code](https://ecosystem.vuejs.press/zh/plugins/features/copy-code.html)


:::: code-group
::: code-group-item pnpm
```sh
pnpm add -D @vuepress/plugin-copy-code@next
```
:::
::: code-group-item yarn
```sh
yarn add -D @vuepress/plugin-copy-code@next
```
:::
::: code-group-item npm
```sh
npm i -D @vuepress/plugin-copy-code@next
```
:::
::::





```ts{1,5-8}
import { copyCodePlugin } from '@vuepress/plugin-copy-code'

export default defineUserConfig ({
  plugins: [
    //===== copy-code配置 =====//
    copyCodePlugin({
      showInMobile: true, //是否显示在移动端
    }),
  ],
})
```

::: details warning plugin @vuepress/plugin-copy-code has been used multiple times, only the last one will take effect
官方虽然内置了，但是没有启用移动端，只能安装后配置

只是提醒你已经安装过了，不影响你使用
:::

![](/plugin/07.png)


## 更多插件

* [VuePress生态系统 - 插件](https://ecosystem.vuejs.press/zh/plugins/)



