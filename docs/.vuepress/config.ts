import { defaultTheme } from 'vuepress'
import { externalLinkIconPlugin } from '@vuepress/plugin-external-link-icon'
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'
import { copyCodePlugin } from 'vuepress-plugin-copy-code2'
import { sidebarA } from './configs/index.js'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { getDirname, path } from '@vuepress/utils'
const __dirname = getDirname(import.meta.url)

//pnpm add -D @vuepress/utils @vuepress/plugin-external-link-icon @vuepress/plugin-google-analytics @vuepress/plugin-docsearch @algolia/client-search search-insights vuepress-plugin-copy-code2 @vuepress/plugin-register-components less

export default {
  lang: 'zh-CN',
  title: '你好， VuePress ！',
  description: '这是我的第一个 VuePress 站点',
  base: '/', //网站部署在根目录
  
  
  //========logo路径========//
  head: [['link', 
  //favicon图标
  { rel: 'icon', href: '/images/logo.png' },
  //自定义css样式
  //{ rel: 'stylesheet', href: '/styles/index.scss' },
  ]],

  //========站点语言配置========//
  locales: {
    //默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'zh-CN',
      title: 'VuePress',
      description: '全程图文教程，轻松搭建文档',
    },
    '/en/': {
      lang: 'en-US',
      title: 'VuePress',
      description: 'Vue-powered Static Site Generator',
    },
  },

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
        //导航数组
        children: [
          {
            //第1组名称(不可点击)
            text: '基础配置',
            //第1组导航标签
            children: [
              '/guide/', 
              '/guide/getting-started', 
              '/guide/configuration',
              '/guide/page',
              '/guide/frontmatter',
            ]
          },
          {
            //第2组名称(不可点击)
            text: '进阶玩法',
            //第1组导航标签
            children: [
              '/guide/markdown', 
              '/guide/assets', 
              '/guide/beautification', 
              '/guide/plugin', 
              '/guide/components', 
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
        text: 'VuePress',
        link: 'https://v2.vuepress.vuejs.org/zh/',
      },
      {
        text: 'GitHub',
        link: 'https://github.com/Yiov/vuepress-doc',
      },
    ],

    //侧边栏简化
    sidebar: sidebarA,
    

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
  
  //========插件配置========//
  plugins: [
    //docsearch配置
    docsearchPlugin({
      appId: 'F6RYJMVN8K',
      apiKey: 'a27586ba3f214fba3e7782735988691e',
      indexName: 'vuepressyiov',
      
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
    

    //外部链接复制文字更改
    externalLinkIconPlugin({
      locales: {
        '/': {
          openInNewWindow: '在新窗口打开，不想要文字删掉留空即可',
        },
        '/en/': {
          openInNewWindow: 'open in new window',
        },
      },
    }),
    

    copyCodePlugin({
      showInMobile: true, //是否显示在移动端
    }),


    //组件注册
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components'),
    }),



  ],

  //markdown路径
  markdown: {
    importCode: {
      handleImportPath: (str) =>
        //将`@vuepress`目录作为一个`./`相对路径
        str.replace(/^@vuepress/, path.resolve(__dirname, './')),
    },
  },

  
  


}