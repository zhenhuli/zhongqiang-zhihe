import { defineComponent, computed, provide, ref } from 'vue'
import type { PropType, Ref, VNode } from 'vue'

export interface ContainerProps {
  direction?: 'horizontal' | 'vertical'
}

export interface ContainerContext {
  hasAside: Ref<boolean>
}

export const containerContextKey = Symbol('containerContext') as symbol

function hasAsideChild(children?: VNode[]): boolean {
  if (!children || !Array.isArray(children)) return false
  return children.some(child => {
    if (typeof child.type === 'object' && child.type && 'name' in child.type) {
      return (child.type as any).name === 'ZqAside'
    }
    return false
  })
}

export default defineComponent({
  name: 'ZqContainer',
  props: {
    direction: {
      type: String as PropType<'horizontal' | 'vertical'>,
      default: ''
    }
  },
  setup(props, { slots }) {
    const hasAsideContext = ref(false)

    provide(containerContextKey, {
      hasAside: hasAsideContext
    })

    const isVertical = computed(() => {
      if (props.direction === 'vertical') {
        return true
      }
      if (props.direction === 'horizontal') {
        return false
      }
      const children = slots.default?.()
      return !hasAsideChild(children)
    })

    const containerClass = computed(() => {
      const classes: string[] = ['zq-container']
      if (isVertical.value) {
        classes.push('is-vertical')
      }
      return classes
    })

    return () => (
      <section class={containerClass.value}>
        {slots.default?.()}
      </section>
    )
  }
})
