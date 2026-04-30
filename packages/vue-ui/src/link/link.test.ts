import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import ZqLink from './index'

describe('Link', () => {
  it('should render correctly', () => {
    const wrapper = mount(ZqLink)
    expect(wrapper.classes()).toContain('zq-link')
  })

  it('should render with default slot', () => {
    const wrapper = mount(ZqLink, {
      slots: {
        default: 'Link Text'
      }
    })
    expect(wrapper.text()).toContain('Link Text')
  })

  describe('type prop', () => {
    it('should render with primary type', () => {
      const wrapper = mount(ZqLink, {
        props: { type: 'primary' }
      })
      expect(wrapper.classes()).toContain('zq-link--primary')
    })

    it('should render with success type', () => {
      const wrapper = mount(ZqLink, {
        props: { type: 'success' }
      })
      expect(wrapper.classes()).toContain('zq-link--success')
    })

    it('should render with warning type', () => {
      const wrapper = mount(ZqLink, {
        props: { type: 'warning' }
      })
      expect(wrapper.classes()).toContain('zq-link--warning')
    })

    it('should render with danger type', () => {
      const wrapper = mount(ZqLink, {
        props: { type: 'danger' }
      })
      expect(wrapper.classes()).toContain('zq-link--danger')
    })

    it('should render with info type', () => {
      const wrapper = mount(ZqLink, {
        props: { type: 'info' }
      })
      expect(wrapper.classes()).toContain('zq-link--info')
    })
  })

  describe('underline prop', () => {
    it('should render with underline style', () => {
      const wrapper = mount(ZqLink, {
        props: { underline: true }
      })
      expect(wrapper.classes()).toContain('is-underline')
    })
  })

  describe('disabled prop', () => {
    it('should render disabled state', () => {
      const wrapper = mount(ZqLink, {
        props: { disabled: true }
      })
      expect(wrapper.classes()).toContain('is-disabled')
    })

    it('should not emit click event when disabled', async () => {
      const wrapper = mount(ZqLink, {
        props: { disabled: true }
      })
      await wrapper.trigger('click')
      expect(wrapper.emitted('click')).toBeFalsy()
    })

    it('should render as span when disabled and has href', () => {
      const wrapper = mount(ZqLink, {
        props: { href: 'https://example.com', disabled: true }
      })
      expect(wrapper.element.tagName).toBe('SPAN')
    })
  })

  describe('href prop', () => {
    it('should render as anchor tag when href is provided', () => {
      const wrapper = mount(ZqLink, {
        props: { href: 'https://example.com' }
      })
      expect(wrapper.element.tagName).toBe('A')
      expect(wrapper.attributes('href')).toBe('https://example.com')
    })

    it('should render as span when href is not provided', () => {
      const wrapper = mount(ZqLink)
      expect(wrapper.element.tagName).toBe('SPAN')
    })
  })

  describe('target prop', () => {
    it('should render with target attribute', () => {
      const wrapper = mount(ZqLink, {
        props: { href: 'https://example.com', target: '_blank' }
      })
      expect(wrapper.attributes('target')).toBe('_blank')
    })
  })

  describe('icon prop', () => {
    it('should render with icon', () => {
      const wrapper = mount(ZqLink, {
        props: { icon: 'search' }
      })
      expect(wrapper.find('.zq-icon-search').exists()).toBe(true)
    })
  })

  describe('click event', () => {
    it('should emit click event when clicked', async () => {
      const wrapper = mount(ZqLink)
      await wrapper.trigger('click')
      expect(wrapper.emitted('click')).toBeTruthy()
    })

    it('should call click handler when clicked', async () => {
      const onClick = vi.fn()
      const wrapper = mount(ZqLink, {
        props: {
          onClick
        }
      })
      await wrapper.trigger('click')
      expect(onClick).toHaveBeenCalled()
    })

    it('should pass event to click handler', async () => {
      const onClick = vi.fn()
      const wrapper = mount(ZqLink, {
        props: {
          onClick
        }
      })
      await wrapper.trigger('click')
      const events = wrapper.emitted('click')
      expect(events).toBeTruthy()
      if (events) {
        expect(events[0][0]).toBeInstanceOf(Event)
      }
    })
  })
})
