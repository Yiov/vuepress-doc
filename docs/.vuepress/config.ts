import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { sidebarA } from './configs/index.ts'
import { shikiPlugin } from '@vuepress/plugin-shiki'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'
import { copyCodePlugin } from '@vuepress/plugin-copy-code'

import { getDirname, path } from '@vuepress/utils'
const __dirname = getDirname(import.meta.url)

import { version } from './configs/meta.ts'

//pnpm add -D vuepress vue @vuepress/bundler-vite @vuepress/theme-default @vuepress/utils @vuepress/plugin-docsearch @vuepress/plugin-copy-code @vuepress/plugin-shiki

export default defineUserConfig({

  base: '/', //网站部署的路径，默认根目录

  lang: 'zh-CN',
  title: '你好， VuePress ！',
  description: '这是我的第一个 VuePress 站点',

  //========logo路径========//
  head: [['link', { rel: 'icon', href: '/images/logo.png' }]],

  //========站点语言配置========//
  locales: {
    //默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'zh-CN',
      title: 'VuePress',
      description: '本人已转用VitePress，可能会无限期停更',
    },
    '/en/': {
      lang: 'en-US',
      title: 'VuePress',
      description: 'Vue-powered Static Site Generator',
    },
  },



  bundler: viteBundler(),

  markdown: {
    importCode: {
      handleImportPath: (str) =>
        //将`@vuepress`目录作为一个`./`相对路径
        str.replace(/^@vuepress/, path.resolve(__dirname, './')),
    },
  },




  plugins: [
    shikiPlugin({
      // 配置项
      langs: ['ts', 'json', 'vue', 'md', 'bash', 'diff'],
      theme: 'one-dark-pro', //主题
      notationDiff: true, //启用差异标记
      notationFocus: true, //启用聚焦标记
      notationHighlight: true, //启用高亮标记
      notationErrorLevel: true, //启用错误标记
      notationWordHighlight: true, //启用词高亮标记
    }),

    //===== copy-code配置 =====//
    copyCodePlugin({
      showInMobile: true, //是否显示在移动端
    }),

    docsearchPlugin({
      // appId: 'F6RYJMVN8K',
      // apiKey: 'a27586ba3f214fba3e7782735988691e',
      // indexName: 'vuepressyiov',

      appId: "NR5QNPJN44",
      apiKey: "1f28f6ca8aad82e405dc4741a517e9d9",
      indexName: "yiov",

      locales: {
        '/': {
          placeholder: '搜索文档',
          translations: {
            button: {
              buttonText: '搜索文档',
            },
          },
        },
        '/en/': {
          placeholder: 'Search Documentation',
          translations: {
            button: {
              buttonText: 'Search Documentation',
            },
          },
        },
      },
    }),
  ],



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

    colorMode: 'light', //浅色模式，默认auto，还有dark

    // 导航栏
    navbar: [
      {
        text: '首页',
        link: '/',
      },
      {
        text: '🧝 指南',
        //导航数组
        children: [
          {
            //第1组名称(不可点击)
            text: '基础配置',
            prefix: '/guide/', //前缀路径
            //第1组导航标签
            children: [
              {
                text: '指南',
                link: '/guide/',
              },
              {
                text: '快速上手',
                link: 'getting-started',
              },
              {
                text: '配置',
                link: 'configuration',
              },
              {
                text: '页面',
                link: 'page',
              },
              {
                text: 'Frontmatter',
                link: 'frontmatter',
              },
            ]
          },
          {
            //第2组名称(不可点击)
            text: '进阶玩法',
            prefix: '/guide/', //前缀路径
            //第1组导航标签
            children: [
              {
                text: 'Markdown',
                link: 'markdown',
              },
              {
                text: '静态部署',
                link: 'assets',
              },
              {
                text: '样式美化',
                link: 'beautification',
              },
              {
                text: 'DocSearch',
                link: 'docsearch',
              },
              {
                text: '插件',
                link: 'plugin',
              },
              {
                text: '组件',
                link: 'components',
              },
              {
                text: '更新及卸载',
                link: 'update',
              },
            ]
          },
          {
            //第3组名称(不可点击)
            text: '其他站点',
            //第1组导航标签
            children: [
              { text: 'VitePress文档', link: 'https://vitepress.yiov.top' },
              { text: '劝学录教程', link: 'https://yiov.top' },
              { text: '个人主页', link: 'https://yingyayi.com/' },
            ],
          },
        ],
      },
      {
        text: `Vuepress ${version}`,
        link: 'https://v2.vuepress.vuejs.org/zh/',
      },
      {
        text: 'GitHub',
        link: 'https://github.com/Yiov/vuepress-doc',
      },
    ],

    //侧边栏简化
    sidebar: sidebarA,

    //仓库地址
    docsRepo: 'https://github.com/Yiov/vuepress-doc',
    // 仓库分支
    docsBranch: 'main',
    // 页面文件的相对路径
    docsDir: 'docs',
    // 页面源文件的路径
    editLinkPattern: ':repo/edit/:branch/:path',

    editLinkText: '在 GitHub 上编辑此页',

    lastUpdated: true,
    lastUpdatedText: '上次更新',
    contributors: true,
    contributorsText: '贡献者',

    prev: '上一页',
    next: '下一页',

  }),

})