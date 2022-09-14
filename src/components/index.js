import { defineAsyncComponent } from 'vue'
const components = import.meta.glob('./**/**.vue')

export default function install(app) {
  for (const [key, value] of Object.entries(components)) {
    const name = key.split('/')[1]
    console.log(name)
    app.component(name, defineAsyncComponent(value))
  }
}