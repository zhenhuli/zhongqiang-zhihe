import { defineComponent, computed, inject } from 'vue'
import type { PropType } from 'vue'
import { rowContextKey } from '../row'
import type { RowContext } from '../row'

export interface ColProps {
  span?: number
  offset?: number
  push?: number
  pull?: number
  xs?: number | { span?: number; offset?: number }
  sm?: number | { span?: number; offset?: number }
  md?: number | { span?: number; offset?: number }
  lg?: number | { span?: number; offset?: number }
  xl?: number | { span?: number; offset?: number }
  tag?: string
}

const sizeMap = ['xs', 'sm', 'md', 'lg', 'xl'] as const

export default defineComponent({
  name: 'ZqCol',
  props: {
    span: {
      type: Number,
      default: 24
    },
    offset: {
      type: Number,
      default: 0
    },
    push: {
      type: Number,
      default: 0
    },
    pull: {
      type: Number,
      default: 0
    },
    xs: {
      type: [Number, Object] as PropType<number | { span?: number; offset?: number }>,
      default: undefined
    },
    sm: {
      type: [Number, Object] as PropType<number | { span?: number; offset?: number }>,
      default: undefined
    },
    md: {
      type: [Number, Object] as PropType<number | { span?: number; offset?: number }>,
      default: undefined
    },
    lg: {
      type: [Number, Object] as PropType<number | { span?: number; offset?: number }>,
      default: undefined
    },
    xl: {
      type: [Number, Object] as PropType<number | { span?: number; offset?: number }>,
      default: undefined
    },
    tag: {
      type: String,
      default: 'div'
    }
  },
  setup(props, { slots }) {
    const rowContext = inject<RowContext | null>(rowContextKey, null)

    const colStyle = computed(() => {
      const style: Record<string, string> = {}
      const gutter = rowContext?.gutter?.value

      if (typeof gutter === 'number' && gutter > 0) {
        style.paddingLeft = `${gutter / 2}px`
        style.paddingRight = `${gutter / 2}px`
      } else if (Array.isArray(gutter) && gutter.length > 0) {
        if (typeof gutter[0] === 'number' && gutter[0] > 0) {
          style.paddingLeft = `${gutter[0] / 2}px`
          style.paddingRight = `${gutter[0] / 2}px`
        }
      }

      return style
    })

    const colClass = computed(() => {
      const classes: string[] = ['zq-col']

      if (props.span) {
        classes.push(`zq-col-${props.span}`)
      }

      if (props.offset) {
        classes.push(`zq-col-offset-${props.offset}`)
      }

      if (props.push) {
        classes.push(`zq-col-push-${props.push}`)
      }

      if (props.pull) {
        classes.push(`zq-col-pull-${props.pull}`)
      }

      sizeMap.forEach(size => {
        const sizeProp = props[size]
        if (sizeProp !== undefined) {
          if (typeof sizeProp === 'number') {
            classes.push(`zq-col-${size}-${sizeProp}`)
          } else if (typeof sizeProp === 'object') {
            if (sizeProp.span !== undefined) {
              classes.push(`zq-col-${size}-${sizeProp.span}`)
            }
            if (sizeProp.offset !== undefined) {
              classes.push(`zq-col-${size}-offset-${sizeProp.offset}`)
            }
          }
        }
      })

      return classes
    })

    const Tag = props.tag as keyof HTMLElementTagNameMap

    return () => (
      <Tag class={colClass.value} style={colStyle.value}>
        {slots.default?.()}
      </Tag>
    )
  }
})
