import type { SidebarConfig } from 'vuepress'

export const sidebarA: SidebarConfig = [
  {
    text: '介绍',
    link: '/guide/',
    children: [
      '/guide/README.md', 
    ],
  },
  {
    text: '基础配置',
    link: '/guide/',
    children: [
      '/guide/getting-started.md', 
      '/guide/configuration.md', 
      '/guide/page.md',
      '/guide/frontmatter.md',
    ],
  },
  {
    text: '进阶玩法',
    link: '/guide/',
    children: [
      '/guide/markdown.md',
      '/guide/assets.md',
      '/guide/beautification.md', 
      '/guide/plugin.md', 
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