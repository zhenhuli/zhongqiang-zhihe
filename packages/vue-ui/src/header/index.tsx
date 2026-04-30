import { defineComponent, computed } from 'vue'
import type { PropType } from 'vue'

export interface HeaderProps {
  height?: string
}

export default defineComponent({
  name: 'ZqHeader',
  props: {
    height: {
      type: String as PropType<string>,
      default: '60px'
    }
  },
  setup(props, { slots }) {
    const headerStyle = computed(() => {
      return {
        height: props.height
      }
    })

    return () => (
      <header class="zq-header" style={headerStyle.value}>
        {slots.default?.()}
      </header>
    )
  }
})
