import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ZqMain from './index'

describe('Main', () => {
  it('should render correctly', () => {
    const wrapper = mount(ZqMain)
    expect(wrapper.classes()).toContain('zq-main')
  })

  it('should render with default slot', () => {
    const wrapper = mount(ZqMain, {
      slots: {
        default: 'Main Content'
      }
    })
    expect(wrapper.text()).toContain('Main Content')
  })

  it('should render as main tag', () => {
    const wrapper = mount(ZqMain)
    expect(wrapper.element.tagName).toBe('MAIN')
  })
})
