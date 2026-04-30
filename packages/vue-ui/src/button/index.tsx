import { defineComponent, computed, toRefs } from 'vue'
import type { PropType } from 'vue'

export type ButtonType = 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'default' | 'text'
export type ButtonSize = 'large' | 'default' | 'small'

export interface ButtonProps {
  type?: ButtonType
  size?: ButtonSize
  plain?: boolean
  round?: boolean
  circle?: boolean
  disabled?: boolean
  loading?: boolean
  icon?: string
  autofocus?: boolean
  nativeType?: 'button' | 'submit' | 'reset'
}

export default defineComponent({
  name: 'ZqButton',
  props: {
    type: {
      type: String as PropType<ButtonType>,
      default: 'default'
    },
    size: {
      type: String as PropType<ButtonSize>,
      default: 'default'
    },
    plain: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    nativeType: {
      type: String as PropType<'button' | 'submit' | 'reset'>,
      default: 'button'
    }
  },
  setup(props, { slots }) {
    const { type, size, plain, round, circle, disabled, loading, icon } = toRefs(props)

    const buttonClass = computed(() => {
      const classes: string[] = ['zq-button']
      if (type.value && type.value !== 'default') {
        classes.push(`zq-button--${type.value}`)
      }
      if (size.value && size.value !== 'default') {
        classes.push(`zq-button--${size.value}`)
      }
      if (plain.value) {
        classes.push('is-plain')
      }
      if (round.value) {
        classes.push('is-round')
      }
      if (circle.value) {
        classes.push('is-circle')
      }
      if (disabled.value) {
        classes.push('is-disabled')
      }
      if (loading.value) {
        classes.push('is-loading')
      }
      return classes
    })

    const handleClick = (event: MouseEvent) => {
      if (disabled.value || loading.value) {
        event.preventDefault()
        event.stopPropagation()
      }
    }

    return () => (
      <button
        class={buttonClass.value}
        disabled={disabled.value || loading.value}
        autofocus={props.autofocus}
        type={props.nativeType}
        onClick={handleClick}
      >
        {loading.value && <i class="zq-icon-loading"></i>}
        {icon.value && !loading.value && <i class={`zq-icon-${icon.value}`}></i>}
        {slots.default && <span class="zq-button__text">{slots.default()}</span>}
      </button>
    )
  }
})
