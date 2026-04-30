import type { DefineComponent } from 'vue'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elem: string]: any
    }
  }
}

declare module 'vue' {
  export interface ComponentCustomProperties {
    $name: string
  }

  export interface ComponentInternalInstance {
    name: string
  }
}
