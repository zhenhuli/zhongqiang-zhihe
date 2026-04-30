import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ZqIcon from './index'

describe('Icon', () => {
  it('should render correctly', () => {
    const wrapper = mount(ZqIcon)
    expect(wrapper.classes()).toContain('zq-icon')
  })

  it('should render with name prop', () => {
    const wrapper = mount(ZqIcon, {
      props: {
        name: 'search'
      }
    })
    expect(wrapper.classes()).toContain('zq-icon-search')
  })

  it('should render with size prop as number', () => {
    const wrapper = mount(ZqIcon, {
      props: {
        size: 24
      }
    })
    expect(wrapper.attributes('style')).toContain('font-size: 24px')
  })

  it('should render with size prop as string', () => {
    const wrapper = mount(ZqIcon, {
      props: {
        size: '2em'
      }
    })
    expect(wrapper.attributes('style')).toContain('font-size: 2em')
  })

  it('should render with color prop', () => {
    const wrapper = mount(ZqIcon, {
      props: {
        color: '#ff0000'
      }
    })
    expect(wrapper.attributes('style')).toContain('color: #ff0000')
  })

  it('should render with all props', () => {
    const wrapper = mount(ZqIcon, {
      props: {
        name: 'home',
        size: 32,
        color: '#409eff'
      }
    })
    expect(wrapper.classes()).toContain('zq-icon-home')
    expect(wrapper.attributes('style')).toContain('font-size: 32px')
    expect(wrapper.attributes('style')).toContain('color: #409eff')
  })
})
