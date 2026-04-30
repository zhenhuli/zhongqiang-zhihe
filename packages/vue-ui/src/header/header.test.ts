import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ZqHeader from './index'

describe('Header', () => {
  it('should render correctly', () => {
    const wrapper = mount(ZqHeader)
    expect(wrapper.classes()).toContain('zq-header')
  })

  it('should render with default slot', () => {
    const wrapper = mount(ZqHeader, {
      slots: {
        default: 'Header Content'
      }
    })
    expect(wrapper.text()).toContain('Header Content')
  })

  it('should have default height of 60px', () => {
    const wrapper = mount(ZqHeader)
    expect(wrapper.attributes('style')).toContain('height: 60px')
  })

  it('should render with custom height', () => {
    const wrapper = mount(ZqHeader, {
      props: { height: '80px' }
    })
    expect(wrapper.attributes('style')).toContain('height: 80px')
  })

  it('should render as header tag', () => {
    const wrapper = mount(ZqHeader)
    expect(wrapper.element.tagName).toBe('HEADER')
  })
})
