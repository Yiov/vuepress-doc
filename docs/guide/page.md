# 页面

> 最近更新：2024-7-29

## 基础配置


### 首页

我们通过 [Frontmatter](./frontmatter.md) ，在 `README.md` 中进行配置和修改


### Logo

网站布局好了，但是logo即Favicon图标还没有，看下官方的目录表

```
└─ docs
   └─.vuepress
      └─ public
         └─ images
            └─ logo.png  <- Logo 文件
```


根据目录得知logo文件的位置，在 `.vuepress` 新建一个 `public` 文件夹，再新建一个 `images` 文件夹，放入`logo.png`

::: tip 说明
官方给的是本地引用，懒人可以直接用远程引用

没有图片显示，确保你文件夹里有图片
:::

打开 `config.ts`文件，添加下列代码中的高亮代码

```ts{4-5}
export default defineUserConfig({
  bundler: viteBundler(),
  theme: defaultTheme(),

  lang: 'zh-CN',
  title: '你好， VuePress ！',
  description: '这是我的第一个 VuePress 站点',

  //========logo路径========//
  head: [['link', { rel: 'icon', href: '/images/logo.png' }]],
})
```


![](/page/01.png)

![](/page/02.png)



### 语言栏

要启用 VuePress 的语言支持，首先需要使用如下的文件目录结构

::: tip 说明
实际就是新建一个语言目录，再把根目录所有文档放进去，然后手动翻译

其他国语言也一样
:::

```
docs
├─ README.md       <- 默认主页
└─ en              <- 单独新建一个语言目录 例如:en
   └─ README.md    <- 英文版主页
```

在你的 `config.ts` 中设置 locales 选项：

```ts{2-15}
export default defineUserConfig {
  //========站点语言配置========//
  locales: {
    //默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'zh-CN',
      title: 'VuePress',
      description: 'Vue 驱动的静态网站生成器',
    },
    '/en/': {
      lang: 'en-US',
      title: 'VuePress',
      description: 'Vue-powered Static Site Generator',
    },
  },
}
```

![](/page/03.png)


配置完我们发现一个小细节，就是右上角 `Languages` ，切换成中文了，还没有汉字显示


我们需要在`默认主题`下，配置 `selectLanguageName` 和 `selectLanguageText` 来改变


```ts{3-13}
export default defineUserConfig {
  theme: defaultTheme({
  //多国语言切换
    locales: {
      '/': {
        selectLanguageName: '简体中文',
        selectLanguageText: '选择语言',
      },
      '/en/': {
        selectLanguageName: 'English',
        selectLanguageText: 'Language',
      },
    },
  }),
}
```

![](/page/04.png)

::: tip 说明
这里很多人搞不定，是因为看错了

站点语言是和语言切换位置不一样
```ts
export default defineUserConfig {
  //站点语言位置

  theme: defaultTheme({
    //语言切换位置
  }),
}
```
:::


### 深浅模式

默认好像是深色，我们可以自己改成浅色

::: tip 说明
仅针对首次进入，如果使用按钮开关切换过，则不会变更回来
:::

```ts{3}
export default defineUserConfig {
  theme: defaultTheme({
    colorMode: 'light', //浅色模式，默认auto，还有dark
  }),
}
```

不想要切换开关，可以关闭

```ts{3}
export default defineUserConfig {
  theme: defaultTheme({
    colorModeSwitch: false, //关闭深浅模式开关
  }),
}
```


### 搜索框

官方文档使用的是 [Algolia DocSearch](https://docsearch.algolia.com/)，非常的高大上

::: tip 说明
需要提交你的网站 URL 来加入 DocSearch 项目才能获得索引，索引成功创建后， DocSearch 团队会将 `apiKey` 和 `indexName` 发送到你的邮箱

所以，等我们网站搭建完毕后再去提交网址

[☛ 点我查看具体步骤](../guide/docsearch)
:::








## 导航栏


VuePress有一个开箱即用的默认主题，你需要在你的配置文件中通过 theme 配置项来使用它


### 导航标签

在 `config.ts` 中我们先添加一个 `首页` 标签


```ts{2-10}
export default defineUserConfig {
//========默认主题配置========//
  theme: defaultTheme({
    // 导航栏
    navbar: [
      {
        text: '首页',
        link: '/',
      },
    ],
  }),
}
```

![](/page/05.png)

![](/page/06.png)


如何继续添加其他的导航标签呢，先看目录表

```
└─ docs
   ├─ guide                     <- 目录：指南
   │  └─ README.md 或 index.md  <- 指南的主页
   └─ README.md                 <- 网站的首页
```


我们在 `doc` 目录新建一个 `guide` 目录，然后新建一个 `READE.md` 文件，里面随便打点内容

```md
## 这是一个指南

我们在 `doc` 目录新建一个 `guide` 目录，然后新建一个 `READE.md` 文件
```

::: tip 说明
目录名都用英文！

这样，我们的指南标签的路由，就准备好了

如果访问404了，检查路由是否正确
:::

```ts{10-13}
export default defineUserConfig {
  //========默认主题配置========//
  theme: defaultTheme({
    // 导航栏
    navbar: [
      {
        text: '首页',
        link: '/',
      },
      {
        text: '指南',
        link: '/guide/',
      },
    ],
  }),
}
```

![](/page/07.png)

其他导航标签添加就不赘述了，如果觉得文字单调，我们还可以添加emoji表情，随便找个网站即可

Emoji：[https://www.emojiall.com/zh-hant](https://www.emojiall.com/zh-hant)

```ts{3}
navbar: [
      {
        text: '🧝 指南',
        link: '/guide/',
      },
    ],
```

![](/page/08.png)


### 导航数组

`children` 字是一个 导航栏数组，而 `prefix` 是前缀路径

```ts{9-22}
//========默认主题配置========//
  theme: defaultTheme({
    // 导航栏
    navbar: [
      {
        text: '首页',
        link: '/',
      },
      {
        text: '🧝 指南',
        prefix: '/guide/', //前缀路径
        children: [
          {
            text: '快速上手',
            link: 'getting-started',
          },
          {
            text: '配置',
            link: 'configuration',
          },
        ],
      },
    ],
  }),
```

![](/page/09.png)


在此基础上，可添加一个组名，也就是再嵌套一个 `children`



```ts
//========默认主题配置========//
  theme: defaultTheme({
    // 导航栏
    navbar: [
      {
        text: '首页',
        link: '/',
      },
      {
        text: '🧝 指南',
        children: [
          {
            //第1组名称(不可点击)
            text: '教程参考',
            prefix: '/guide/', //前缀路径
            //第1组导航标签
            children: [
              {
                text: '快速上手',
                link: 'getting-started',
              },
              {
                text: '配置',
                link: 'configuration',
              },
            ],
          },
          {
            //第2组名称(不可点击)
            text: '教程参考2',
            prefix: '/guide/', //前缀路径
            //第2组导航标签
            children: [
              {
                text: '快速上手',
                link: 'getting-started',
              },
              {
                text: '配置',
                link: 'configuration',
              },
            ],
          },
        ],
      },
    ],
  }),
```

![](/page/10.png)







## 侧边栏


vueprss可以自动生成，配置 `'heading'` 也是一样的效果

但是仅根据当前文件标题生成，其他目录的需要插件或者手动配置

```ts{3}
export default defineUserConfig {
  theme: defaultTheme({
    sidebar: 'heading',
  }),
}
```


### 单组侧边栏

```ts{4-8}
export default defineUserConfig {
  theme: defaultTheme({
    sidebar: [
      //这里填文件路径
      '/guide/', 
      '/guide/getting-started', 
      '/guide/configuration', 
      '/guide/page'
    ],
  }),
}
```

### 多组侧边栏

我们还可以加入目录大标题，将这些文件放入children中


```ts{3-27}
export default defineUserConfig {
  theme: defaultTheme({
    sidebar: [
      //多组侧边栏
      {
        text: '指南',
        prefix: '/guide/', //前缀路径
        link: '/guide/',//前缀路径是否添加链接
        collapsible: true, //折叠开关
        children: [
            '/guide/', 
            '/guide/getting-started', 
            '/guide/configuration', 
            '/guide/page',
            {
              //包含远程链接
              text: 'github',
              link: 'https://github.com',
            },
        ],
      },
      {
        //单独远程链接
        text: 'github',
        link: 'https://github.com',
      },
    ],
  }),
}
```

## 底部

### 编辑此页

只有先配置了仓库repo，才能显示编辑

```ts{3-9}
export default defineUserConfig {
  theme: defaultTheme({
    // 默认Github格式：用户名/仓库名
    repo: 'vuejs/vuepress',
    // 其他仓库格式
    // repo: 'https://gitlab.com/vuejs/vuepress',

    //默认:Edit this page，修改显示文字
    editLinkText:'在 GitHub 上编辑此页',
  }),
}
```

如果你的代码不是默认分支，或者文档放在docs等文件夹，需要单独另外配置

```ts{3-10}
export default defineUserConfig {
  theme: defaultTheme({
    // 仓库 URL 
    docsRepo: 'https://gitlab.com/owner/name',
    // 仓库分支
    docsBranch: 'master',
    // 页面文件的相对路径
    docsDir: 'docs',
    // 页面源文件的路径
    editLinkPattern: ':repo/edit/:branch/:path',

    //默认:Edit this page，修改显示文字
    editLinkText:'在 GitHub 上编辑此页',
  }),
}
```

会生成类似于 `https://github.com/owner/name/edit/main/docs/path/file.md` 的链接


### 上次更新


```ts
export default defineUserConfig {
  theme: defaultTheme({
    lastUpdated:true, //开启上次更新
    lastUpdatedText: '上次更新', //修改显示更新的标题
  }),
}
```

### 贡献者

```ts
export default defineUserConfig {
  theme: defaultTheme({
    contributors: true, //开启贡献者
    contributorsText: '贡献者', //修改显示共享者标题
  }),
}
```

### 上下页

```ts
export default defineUserConfig {
  theme: defaultTheme({
    prev:'上一页', //修改上一页显示标题
    next:'下一页', //修改下一页显示标题
  }),
}
```