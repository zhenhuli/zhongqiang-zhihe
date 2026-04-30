import { describe, it, expect } from 'vitest'
import { h } from 'vue'
import { mount } from '@vue/test-utils'
import ZqAside from './index'
import ZqContainer from '../container'

describe('Aside', () => {
  it('should render correctly', () => {
    const wrapper = mount(ZqAside)
    expect(wrapper.classes()).toContain('zq-aside')
  })

  it('should render with default slot', () => {
    const wrapper = mount(ZqAside, {
      slots: {
        default: 'Aside Content'
      }
    })
    expect(wrapper.text()).toContain('Aside Content')
  })

  it('should have default width of 300px', () => {
    const wrapper = mount(ZqAside)
    expect(wrapper.attributes('style')).toContain('width: 300px')
  })

  it('should render with custom width', () => {
    const wrapper = mount(ZqAside, {
      props: { width: '250px' }
    })
    expect(wrapper.attributes('style')).toContain('width: 250px')
  })

  it('should render as aside tag', () => {
    const wrapper = mount(ZqAside)
    expect(wrapper.element.tagName).toBe('ASIDE')
  })

  it('should work inside Container', () => {
    const wrapper = mount(ZqContainer, {
      slots: {
        default: () => [h(ZqAside)]
      }
    })
    expect(wrapper.findComponent(ZqAside).exists()).toBe(true)
  })
})
