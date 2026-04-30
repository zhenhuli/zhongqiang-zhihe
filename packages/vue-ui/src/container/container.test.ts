import { describe, it, expect } from 'vitest'
import { h } from 'vue'
import { mount } from '@vue/test-utils'
import ZqContainer from './index'
import ZqHeader from '../header'
import ZqAside from '../aside'
import ZqMain from '../main'
import ZqFooter from '../footer'

describe('Container', () => {
  it('should render correctly', () => {
    const wrapper = mount(ZqContainer)
    expect(wrapper.classes()).toContain('zq-container')
  })

  it('should render with default slot', () => {
    const wrapper = mount(ZqContainer, {
      slots: {
        default: 'Container Content'
      }
    })
    expect(wrapper.text()).toContain('Container Content')
  })

  describe('direction prop', () => {
    it('should render vertical when direction is vertical', () => {
      const wrapper = mount(ZqContainer, {
        props: { direction: 'vertical' }
      })
      expect(wrapper.classes()).toContain('is-vertical')
    })

    it('should render horizontal when direction is horizontal', () => {
      const wrapper = mount(ZqContainer, {
        props: { direction: 'horizontal' }
      })
      expect(wrapper.classes()).not.toContain('is-vertical')
    })
  })

  describe('auto direction detection', () => {
    it('should be vertical when no Aside child', () => {
      const wrapper = mount(ZqContainer, {
        slots: {
          default: () => [h(ZqHeader), h(ZqMain), h(ZqFooter)]
        }
      })
      expect(wrapper.classes()).toContain('is-vertical')
    })

    it('should be horizontal when has Aside child', () => {
      const wrapper = mount(ZqContainer, {
        slots: {
          default: () => [h(ZqAside), h(ZqMain)]
        }
      })
      expect(wrapper.classes()).not.toContain('is-vertical')
    })
  })

  describe('nested components', () => {
    it('should render nested layout components', () => {
      const wrapper = mount(ZqContainer, {
        slots: {
          default: () => [
            h(ZqHeader, null, { default: () => 'Header' }),
            h(ZqContainer, null, {
              default: () => [
                h(ZqAside, null, { default: () => 'Aside' }),
                h(ZqMain, null, { default: () => 'Main' })
              ]
            }),
            h(ZqFooter, null, { default: () => 'Footer' })
          ]
        }
      })
      expect(wrapper.findComponent(ZqHeader).exists()).toBe(true)
      expect(wrapper.findComponent(ZqAside).exists()).toBe(true)
      expect(wrapper.findComponent(ZqMain).exists()).toBe(true)
      expect(wrapper.findComponent(ZqFooter).exists()).toBe(true)
    })
  })
})
