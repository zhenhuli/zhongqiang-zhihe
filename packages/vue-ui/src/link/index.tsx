import { defineComponent, computed, toRefs } from 'vue'
import type { PropType } from 'vue'

export type LinkType = 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'default'

export interface LinkProps {
  type?: LinkType
  underline?: boolean
  disabled?: boolean
  href?: string
  target?: '_blank' | '_self' | '_parent' | '_top'
  icon?: string
}

export default defineComponent({
  name: 'ZqLink',
  props: {
    type: {
      type: String as PropType<LinkType>,
      default: 'default'
    },
    underline: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    href: {
      type: String,
      default: ''
    },
    target: {
      type: String as PropType<'_blank' | '_self' | '_parent' | '_top'>,
      default: '_self'
    },
    icon: {
      type: String,
      default: ''
    }
  },
  emits: ['click'],
  setup(props, { slots, emit }) {
    const { type, underline, disabled, href, target, icon } = toRefs(props)

    const linkClass = computed(() => {
      const classes: string[] = ['zq-link']
      if (type.value && type.value !== 'default') {
        classes.push(`zq-link--${type.value}`)
      }
      if (disabled.value) {
        classes.push('is-disabled')
      }
      if (underline.value) {
        classes.push('is-underline')
      }
      return classes
    })

    const handleClick = (event: MouseEvent) => {
      if (disabled.value) {
        event.preventDefault()
        return
      }
      emit('click', event)
    }

    return () => {
      const Tag = href.value && !disabled.value ? 'a' : 'span'
      return (
        <Tag
          class={linkClass.value}
          href={href.value && !disabled.value ? href.value : undefined}
          target={target.value}
          onClick={handleClick}
        >
          {icon.value && <i class={`zq-icon-${icon.value}`}></i>}
          {slots.default && <span class="zq-link__text">{slots.default()}</span>}
        </Tag>
      )
    }
  }
})
