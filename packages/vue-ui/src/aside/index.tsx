import { defineComponent, computed, inject, onMounted } from 'vue'
import type { PropType } from 'vue'
import { containerContextKey } from '../container'
import type { ContainerContext } from '../container'

export interface AsideProps {
  width?: string
}

export default defineComponent({
  name: 'ZqAside',
  props: {
    width: {
      type: String as PropType<string>,
      default: '300px'
    }
  },
  setup(props, { slots }) {
    const asideStyle = computed(() => {
      return {
        width: props.width
      }
    })

    const containerContext = inject<ContainerContext | null>(containerContextKey, null)

    onMounted(() => {
      if (containerContext && containerContext.hasAside) {
        containerContext.hasAside.value = true
      }
    })

    return () => (
      <aside class="zq-aside" style={asideStyle.value}>
        {slots.default?.()}
      </aside>
    )
  }
})
