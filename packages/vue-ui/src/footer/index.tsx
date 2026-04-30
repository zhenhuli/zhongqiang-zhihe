import { defineComponent, computed } from 'vue'
import type { PropType } from 'vue'

export interface FooterProps {
  height?: string
}

export default defineComponent({
  name: 'ZqFooter',
  props: {
    height: {
      type: String as PropType<string>,
      default: '60px'
    }
  },
  setup(props, { slots }) {
    const footerStyle = computed(() => {
      return {
        height: props.height
      }
    })

    return () => (
      <footer class="zq-footer" style={footerStyle.value}>
        {slots.default?.()}
      </footer>
    )
  }
})
