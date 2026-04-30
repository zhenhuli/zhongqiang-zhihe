import { defineComponent, computed } from 'vue'
import type { PropType } from 'vue'

export interface IconProps {
  name?: string
  size?: string | number
  color?: string
}

export default defineComponent({
  name: 'ZqIcon',
  props: {
    name: {
      type: String,
      default: ''
    },
    size: {
      type: [String, Number] as PropType<string | number>,
      default: ''
    },
    color: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    const style = computed(() => {
      const s: Record<string, string> = {}
      if (props.size) {
        s.fontSize = typeof props.size === 'number' ? `${props.size}px` : props.size
      }
      if (props.color) {
        s.color = props.color
      }
      return s
    })

    const className = computed(() => {
      const classes: string[] = ['zq-icon']
      if (props.name) {
        classes.push(`zq-icon-${props.name}`)
      }
      return classes
    })

    return () => (
      <i class={className.value} style={style.value}></i>
    )
  }
})
