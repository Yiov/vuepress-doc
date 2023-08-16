import type { SidebarConfig } from 'vuepress'

export const sidebarA: SidebarConfig = [
  {
    text: '介绍',
    link: '/guide/',
    children: [
      '/guide/', 
    ],
  },
  {
    text: '基础配置',
    link: '/guide/',
    children: [
      '/guide/getting-started', 
      '/guide/configuration', 
      '/guide/page',
      '/guide/frontmatter',
    ],
  },
  {
    text: '进阶玩法',
    link: '/guide/',
    children: [
      '/guide/markdown',
      '/guide/assets',
      '/guide/beautification', 
      '/guide/plugin', 
      '/guide/components', 
    ],
  },
  {
    text: '其他站点',
    children: [
      { text: 'VitePress文档', link: 'https://vitepress.yiov.top' },
              { text: '劝学录教程', link: 'https://yiov.top' },
              { text: '个人主页', link: 'https://yingyayi.com/' },
    ],
  },

]