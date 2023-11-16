import { defineClientConfig } from '@vuepress/client'
import Progress from './components/Progress.vue'

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    app.component('Progress', Progress)
  },
  setup() {},
  rootComponents: [],
})