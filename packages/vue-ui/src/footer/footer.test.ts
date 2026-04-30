import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ZqFooter from './index'

describe('Footer', () => {
  it('should render correctly', () => {
    const wrapper = mount(ZqFooter)
    expect(wrapper.classes()).toContain('zq-footer')
  })

  it('should render with default slot', () => {
    const wrapper = mount(ZqFooter, {
      slots: {
        default: 'Footer Content'
      }
    })
    expect(wrapper.text()).toContain('Footer Content')
  })

  it('should have default height of 60px', () => {
    const wrapper = mount(ZqFooter)
    expect(wrapper.attributes('style')).toContain('height: 60px')
  })

  it('should render with custom height', () => {
    const wrapper = mount(ZqFooter, {
      props: { height: '100px' }
    })
    expect(wrapper.attributes('style')).toContain('height: 100px')
  })

  it('should render as footer tag', () => {
    const wrapper = mount(ZqFooter)
    expect(wrapper.element.tagName).toBe('FOOTER')
  })
})
