import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import ZqButton from './index'

describe('Button', () => {
  it('should render correctly', () => {
    const wrapper = mount(ZqButton)
    expect(wrapper.classes()).toContain('zq-button')
  })

  it('should render with default slot', () => {
    const wrapper = mount(ZqButton, {
      slots: {
        default: 'Button Text'
      }
    })
    expect(wrapper.text()).toContain('Button Text')
  })

  describe('type prop', () => {
    it('should render with primary type', () => {
      const wrapper = mount(ZqButton, {
        props: { type: 'primary' }
      })
      expect(wrapper.classes()).toContain('zq-button--primary')
    })

    it('should render with success type', () => {
      const wrapper = mount(ZqButton, {
        props: { type: 'success' }
      })
      expect(wrapper.classes()).toContain('zq-button--success')
    })

    it('should render with warning type', () => {
      const wrapper = mount(ZqButton, {
        props: { type: 'warning' }
      })
      expect(wrapper.classes()).toContain('zq-button--warning')
    })

    it('should render with danger type', () => {
      const wrapper = mount(ZqButton, {
        props: { type: 'danger' }
      })
      expect(wrapper.classes()).toContain('zq-button--danger')
    })

    it('should render with info type', () => {
      const wrapper = mount(ZqButton, {
        props: { type: 'info' }
      })
      expect(wrapper.classes()).toContain('zq-button--info')
    })

    it('should render with text type', () => {
      const wrapper = mount(ZqButton, {
        props: { type: 'text' }
      })
      expect(wrapper.classes()).toContain('zq-button--text')
    })
  })

  describe('size prop', () => {
    it('should render with large size', () => {
      const wrapper = mount(ZqButton, {
        props: { size: 'large' }
      })
      expect(wrapper.classes()).toContain('zq-button--large')
    })

    it('should render with small size', () => {
      const wrapper = mount(ZqButton, {
        props: { size: 'small' }
      })
      expect(wrapper.classes()).toContain('zq-button--small')
    })
  })

  describe('plain prop', () => {
    it('should render with plain style', () => {
      const wrapper = mount(ZqButton, {
        props: { plain: true }
      })
      expect(wrapper.classes()).toContain('is-plain')
    })
  })

  describe('round prop', () => {
    it('should render with round style', () => {
      const wrapper = mount(ZqButton, {
        props: { round: true }
      })
      expect(wrapper.classes()).toContain('is-round')
    })
  })

  describe('circle prop', () => {
    it('should render with circle style', () => {
      const wrapper = mount(ZqButton, {
        props: { circle: true }
      })
      expect(wrapper.classes()).toContain('is-circle')
    })
  })

  describe('disabled prop', () => {
    it('should render disabled state', () => {
      const wrapper = mount(ZqButton, {
        props: { disabled: true }
      })
      expect(wrapper.classes()).toContain('is-disabled')
      expect(wrapper.attributes('disabled')).toBeDefined()
    })

    it('should not emit click event when disabled', async () => {
      const wrapper = mount(ZqButton, {
        props: { disabled: true }
      })
      await wrapper.trigger('click')
      expect(wrapper.emitted('click')).toBeFalsy()
    })
  })

  describe('loading prop', () => {
    it('should render loading state', () => {
      const wrapper = mount(ZqButton, {
        props: { loading: true }
      })
      expect(wrapper.classes()).toContain('is-loading')
      expect(wrapper.find('.zq-icon-loading').exists()).toBe(true)
    })

    it('should not emit click event when loading', async () => {
      const wrapper = mount(ZqButton, {
        props: { loading: true }
      })
      await wrapper.trigger('click')
      expect(wrapper.emitted('click')).toBeFalsy()
    })
  })

  describe('icon prop', () => {
    it('should render with icon', () => {
      const wrapper = mount(ZqButton, {
        props: { icon: 'search' }
      })
      expect(wrapper.find('.zq-icon-search').exists()).toBe(true)
    })

    it('should not render icon when loading', () => {
      const wrapper = mount(ZqButton, {
        props: { icon: 'search', loading: true }
      })
      expect(wrapper.find('.zq-icon-search').exists()).toBe(false)
      expect(wrapper.find('.zq-icon-loading').exists()).toBe(true)
    })
  })

  describe('nativeType prop', () => {
    it('should render with submit native type', () => {
      const wrapper = mount(ZqButton, {
        props: { nativeType: 'submit' }
      })
      expect(wrapper.attributes('type')).toBe('submit')
    })

    it('should render with reset native type', () => {
      const wrapper = mount(ZqButton, {
        props: { nativeType: 'reset' }
      })
      expect(wrapper.attributes('type')).toBe('reset')
    })
  })

  describe('click event', () => {
    it('should emit click event when clicked', async () => {
      const wrapper = mount(ZqButton)
      await wrapper.trigger('click')
      expect(wrapper.emitted('click')).toBeTruthy()
    })

    it('should call click handler when clicked', async () => {
      const onClick = vi.fn()
      const wrapper = mount(ZqButton, {
        props: {
          onClick
        }
      })
      await wrapper.trigger('click')
      expect(onClick).toHaveBeenCalled()
    })
  })
})
