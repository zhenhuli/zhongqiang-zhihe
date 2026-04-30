import { defineComponent, computed, provide, ref } from 'vue'
import type { PropType, Ref } from 'vue'

export type RowGutter = number | [number, number] | { xs?: number; sm?: number; md?: number; lg?: number; xl?: number }

export interface RowProps {
  gutter?: RowGutter
  justify?: 'start' | 'end' | 'center' | 'space-around' | 'space-between'
  align?: 'top' | 'middle' | 'bottom'
  tag?: string
}

export interface RowContext {
  gutter: Ref<RowGutter>
}

export const rowContextKey = Symbol('rowContext') as symbol

export default defineComponent({
  name: 'ZqRow',
  props: {
    gutter: {
      type: [Number, Array, Object] as PropType<RowGutter>,
      default: 0
    },
    justify: {
      type: String as PropType<'start' | 'end' | 'center' | 'space-around' | 'space-between'>,
      default: 'start'
    },
    align: {
      type: String as PropType<'top' | 'middle' | 'bottom'>,
      default: 'top'
    },
    tag: {
      type: String,
      default: 'div'
    }
  },
  setup(props, { slots }) {
    const rowStyle = computed(() => {
      const style: Record<string, string> = {}
      const gutter = props.gutter

      if (typeof gutter === 'number' && gutter > 0) {
        style.marginLeft = `-${gutter / 2}px`
        style.marginRight = `-${gutter / 2}px`
      } else if (Array.isArray(gutter) && gutter.length > 0) {
        if (typeof gutter[0] === 'number' && gutter[0] > 0) {
          style.marginLeft = `-${gutter[0] / 2}px`
          style.marginRight = `-${gutter[0] / 2}px`
        }
      }

      return style
    })

    const rowClass = computed(() => {
      const classes: string[] = ['zq-row']

      if (props.justify !== 'start') {
        classes.push(`is-justify-${props.justify}`)
      }

      if (props.align !== 'top') {
        classes.push(`is-align-${props.align}`)
      }

      return classes
    })

    provide(rowContextKey, {
      gutter: ref(props.gutter)
    })

    const Tag = props.tag as keyof HTMLElementTagNameMap

    return () => (
      <Tag class={rowClass.value} style={rowStyle.value}>
        {slots.default?.()}
      </Tag>
    )
  }
})
