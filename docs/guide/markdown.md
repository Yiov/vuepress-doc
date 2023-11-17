---
# NavLink
prev:
  text: Fromtmatter
  link: /guide/fromtmatter
---
  # Markdown

> 最近更新：2023-11-17


如果你还不了解 Markdown ，[请看我整理的Markdown教程](https://yiov.top/daily/markdown/)



## 基础功能

VuePress 会使用 [markdown-it](https://github.com/markdown-it/markdown-it) 插件来实现语法扩展

::: warning 建议
配置代码如下

如无必要，无需配置，保持默认即可！
:::

```ts{2-4}
export default {
  markdown:{
      //这里填配置项
  }
}
```


### 链接

除了常用的markdown超链接方法，还有目录的引用，用个目录来演示

::: warning 建议
对于指向内部 Markdown 文件的链接，尽可能使用相对路径，而不是绝对路径
:::

```md{4}
├─ docs
│  ├─ .vuepress
│  ├─ guide
│  │   └─ markdown.md   <- 我在这里
│  │   └─ README.md     <- 指南首页
│  └─ README.md         <- 首页
├─ .gitignore
└─ package.json
```

以本篇文档为例，这篇文档是存放在guide目录下的 `markdown.md`

::: tip 说明
那么以它为参考，其他文件都是与markdown.md处于相对位置

`./` 表示同级

`../` 表示上一级

`../../` 表示上上一级
:::


```md
<!-- 相对路径 -->
[指南首页](./README.md)

[首页](../README.md)

[package.json](../../package.json)

<!-- 绝对路径 -->
[指南首页](/README.md)

[首页](/docs/README.md)

<!-- URL -->
[GitHub](https://github.com)
```



### emoji


输入：

```md
VuePress 2 已经发布 :tada: ！
```

`:tada:` 就是emoji表情符

表情参考：[https://www.webfx.com/tools/emoji-cheat-sheet/](https://www.webfx.com/tools/emoji-cheat-sheet/)

输出：

VuePress 2 已经发布 :tada: ！

::: warning 注意
如无必要，无需更改配置，不填入即可！
:::


```ts
markdown: {
  emoji:false, //禁用emoji表情
}
```


### 目录

如果你想要把当前页面的目录添加到 Markdown 内容中，你可以使用 `[[toc]]` 语法

输入：

```md
[[toc]]
```

会自动识别当前标题锚点，请勿禁用锚点！

::: details 点击查看目录表
[[toc]]
:::

::: warning 注意
如无必要，无需更改配置，不填入即可！
:::

```ts
markdown: {
    anchor:false, //禁用锚点，请勿轻易使用
    toc:false, //禁用目录，请勿轻易使用
  },
```



### 图片引用

一般情况下，我们推荐你使用相对路径来引用图片，因为我们经常把图片和README.md放在一起

```md
<!-- 就相当于与markdown.md在同一目录 -->
![图片描述](./image.png)
```

比如我引用 `guide/hero.png` 里的hero图片

::: warning 注意
hero.png和markdown.md文件必须都在guide目录里
:::

输入：

```md
![](./hero.png)
```

输出：

![](./hero.png)


如果你想引用其他目录，可以使用完整的路径，比如：

输入：

```md
![](../.vuepress/public/images/hero.png)
```

输出：

![](../.vuepress/public/images/hero.png)




### Public文件

静态资源放在 Public 目录中，它们会被复制到最终生成的网站的根目录下

由于Public的特殊性，可以用相对路径路径直接引用文件

比如：在 `vuepress/public/images/hero.png` 的使用方法

```md
![](/images/hero.png)
```

输出：

![](/images/hero.png)




如果你想改变目录，需要使用 [别名路径](#别名路径) 且在config.ts添加如下配置

::: warning 注意
若无必要，不要乱改！！！
:::

:::: code-group
::: code-group-item pnpm
```sh
pnpm add -D @vuepress/utils@next
```
:::
::: code-group-item yarn
```sh
yarn add -D @vuepress/utils@next
```
:::
::: code-group-item npm
```sh
npm i -D @vuepress/utils@next
```
:::
::::


```ts{1,4}
import { getDirname, path } from '@vuepress/utils'

export default {
  public:path.resolve(__dirname, './目录名'),
}

```

还有一种特殊情况，就是自己开发主题的时候，因为仓库名非根路径，导致`public目录`的图片无法引用，我们还可以通过 `$withBase` 来直接使用这个工具函数

输入：

```md
<!-- public目录 -->
<img :src="$withBase('/images/logo.png')" alt="VuePress Logo">
```

输出：

<img :src="$withBase('/images/logo.png')" alt="VuePress Logo">



### 依赖包

尽管这不是常见用法，但是你可以从依赖包中引用图片

由于 Markdown 会默认将图片链接视为相对链接，你需要使用 `<img>` 标签

::: warning 注意
这里的 `package-name` 就是 `pnpm` 或者 `yarn`

`pnpm/image.png` 或者 `yarn/image.png`
:::

```md
<img src="package-name/image.png" alt="来自依赖包的图片">
```


### 别名路径

在配置文件中设置的路径别名也同样支持更改


:::: code-group
::: code-group-item pnpm
```sh
pnpm add -D @vuepress/utils@next
```
:::
::: code-group-item yarn
```sh
yarn add -D @vuepress/utils@next
```
:::
::: code-group-item npm
```sh
npm i -D @vuepress/utils@next
```
:::
::::


```ts{1,3,6-8}
import { getDirname, path } from '@vuepress/utils'

const __dirname = getDirname(import.meta.url)

export default defineUserConfig({
  alias: {
    '@目录名': path.resolve(__dirname, '../目录名'),
  },
})
```

输入：

```md
<img src="@目录名/image.png" alt="来自路径别名的图片">
```














## 代码块

::: warning 注意
如无必要，无需更改配置，不填入即可！
:::

```ts
markdown: {
    //code:false, //禁用代码块
    code: {
      //这里是配置项
    },
}
```

### 行高亮


比如：第1和456行高亮，`,`隔开行 ，`-`连续行

输入：

````md
```ts{1,4-6}
import { defaultTheme } from 'vuepress'

export default {
  lang: 'zh-CN',
  title: '你好， VuePress ！',
  description: '这是我的第一个 VuePress 站点',
}
```
````

输出：

```ts{1,4-6}
import { defaultTheme } from 'vuepress'

export default {
  lang: 'zh-CN',
  title: '你好， VuePress ！',
  description: '这是我的第一个 VuePress 站点',
}
```

::: warning 注意
如无必要，无需更改配置，不填入即可！
:::

```ts
markdown: {
  code: {
      highlightLines:false, //禁用代码高亮
  },
}
```


### 行号显示

默认是开启的，你可以通过配置项关闭，也可以临时屏蔽

输入：

````md
```ts
// 行号默认是启用的
这是第2行
这是第3行
```

```ts:no-line-numbers
// 行号被禁用
这是第2行
这是第2行
```
````


输出：

```ts
// 行号默认是启用的
这是第2行
这是第3行
```

```ts:no-line-numbers
// 行号被禁用
这是第2行
这是第2行
```


::: warning 注意
如无必要，无需更改配置，不填入即可！
:::

```ts
markdown: {
  code: {
      lineNumbers:false, //禁用行号
  },
}
```



### 导入代码

一般使用相对路径

::: tip 说明
因本md文件与config.ts文件，并不在一个目录，无法引用，看下使用方式即可
:::

```md
<!-- 最简单的语法 -->
@[code](./.vuepress/config.ts)
```

常见例子：

```md
<!-- 仅导入第 1 行至第 10 行 -->
@[code{1-10}](./.vuepress/config.ts)

<!-- 指定代码语言 如：ts -->
@[code ts](./.vuepress/config.ts)

<!-- 第 2 / 4 /5 行高亮 -->
@[code ts{2,4-5}](./.vuepress/config.ts)
```

复杂例子：

```md
<!-- 第 3-10 行高亮 ts语言，其中显示的第3行高亮，不显示行号 -->
@[code{3-10} ts{3}:no-line-numbers](./.vuepress/config.ts)
```
::: warning 注意
若无必要，不要乱改！！！
:::

针对上面这种无法引用的路径，我们可以通过配置 `config.ts` 来处理 [别名路径](#别名路径)

:::: code-group
::: code-group-item pnpm
```sh
pnpm add -D @vuepress/utils@next
```
:::
::: code-group-item yarn
```sh
yarn add -D @vuepress/utils@next
```
:::
::: code-group-item npm
```sh
npm i -D @vuepress/utils@next
```
:::
::::


```ts{1,3,7-11}
import { getDirname, path } from '@vuepress/utils'

const __dirname = getDirname(import.meta.url)

export default {
  markdown: {
    importCode: {
      handleImportPath: (str) =>
        //将`@vuepress`目录作为一个`./`相对路径
        str.replace(/^@vuepress/, path.resolve(__dirname, './')),
    },
  },
}
```


输入：

```md
@[code{1-9}](@vuepress/config.ts)
```

输出：

@[code{1-9}](@vuepress/config.ts)






### 分组代码

也叫代码块嵌套，这里使用到里主题集成的自定义容器

使用 `code-group` 包裹，使用`code-group-item` 列出
```md
:::: code-group
::: code-group-item 这里是分组标题
:::
::::
```

输入：

````md
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
````


输出：

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


另一种写法：用 `active` Prop来设置初始激活的元素。如果不设置，默认激活第一个元素。

::: tip 说明
本次的 `active`在YARN中
:::


输入：

````md{10}
<CodeGroup>
  <CodeGroupItem title="PNPM">

```bash:no-line-numbers
pnpm install
```

  </CodeGroupItem>

  <CodeGroupItem title="YARN" active>

```bash:no-line-numbers
yarn install
```

  </CodeGroupItem>

  <CodeGroupItem title="NPM">

```bash:no-line-numbers
npm install
```

  </CodeGroupItem>
</CodeGroup>
````


输出：

<CodeGroup>
  <CodeGroupItem title="PNPM">

```bash:no-line-numbers
pnpm install
```

  </CodeGroupItem>

  <CodeGroupItem title="YARN" active>

```bash:no-line-numbers
yarn install
```

  </CodeGroupItem>

  <CodeGroupItem title="NPM">

```bash:no-line-numbers
npm install
```

  </CodeGroupItem>
</CodeGroup>





## 容器



### Badge组件

你可以在 Markdown 中直接使用 Vue 组件

输入

```md
这是默认主题内置的 `<Badge />` 组件 <Badge text="演示" />
```

输出

这是默认主题内置的 `<Badge />` 组件 <Badge text="演示" />


还有另外的用法，输入：

```md
- VuePress - <Badge type="tip" text="v2" vertical="top" />
- VuePress - <Badge type="warning" text="v2" vertical="middle" />
- VuePress - <Badge type="danger" text="v2" vertical="bottom" />
```

输出：


- VuePress - <Badge type="tip" text="v2" vertical="top" />
- VuePress - <Badge type="warning" text="v2" vertical="middle" />
- VuePress - <Badge type="danger" text="v2" vertical="bottom" />



### 提示标签

原markdown代码为 `>`

输入：

```md
::: tip
这是一个提示
:::

::: warning
这是一个警告
:::

::: danger
这是一个危险警告
:::

::: danger STOP
危险区域，禁止通行
:::
```

输出：

::: tip
这是一个提示
:::

::: warning
这是一个警告
:::

::: danger
这是一个危险警告
:::

::: danger STOP
危险区域，禁止通行
:::


### 收缩/展开

使用的也是 `details` 打码，原来的使用方式：

```md
<details>
<summary>这里写预览标题</summary>

<!--原来的方式：这里写内容 -->

</details>
```

现在的方式，输入：

````md
::: details
这是一个 details 标签
:::

::: details 点击查看代码
```ts
console.log('你好，VuePress！')
```
:::
````


输出：

::: details
这是一个 details 标签
:::

::: details 点击查看代码
```ts
console.log('你好，VuePress！')
```
:::





