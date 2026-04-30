import { describe, it, expect } from 'vitest'
import { h } from 'vue'
import { mount } from '@vue/test-utils'
import ZqCol from './index'
import ZqRow from '../row'

describe('Col', () => {
  it('should render correctly', () => {
    const wrapper = mount(ZqCol)
    expect(wrapper.classes()).toContain('zq-col')
  })

  it('should render with default slot', () => {
    const wrapper = mount(ZqCol, {
      slots: {
        default: 'Col Content'
      }
    })
    expect(wrapper.text()).toContain('Col Content')
  })

  it('should render as div by default', () => {
    const wrapper = mount(ZqCol)
    expect(wrapper.element.tagName).toBe('DIV')
  })

  it('should render with custom tag', () => {
    const wrapper = mount(ZqCol, {
      props: { tag: 'section' }
    })
    expect(wrapper.element.tagName).toBe('SECTION')
  })

  describe('span prop', () => {
    it('should have default span of 24', () => {
      const wrapper = mount(ZqCol)
      expect(wrapper.classes()).toContain('zq-col-24')
    })

    it('should render with custom span', () => {
      const wrapper = mount(ZqCol, {
        props: { span: 12 }
      })
      expect(wrapper.classes()).toContain('zq-col-12')
    })
  })

  describe('offset prop', () => {
    it('should render with offset', () => {
      const wrapper = mount(ZqCol, {
        props: { offset: 6 }
      })
      expect(wrapper.classes()).toContain('zq-col-offset-6')
    })
  })

  describe('push prop', () => {
    it('should render with push', () => {
      const wrapper = mount(ZqCol, {
        props: { push: 4 }
      })
      expect(wrapper.classes()).toContain('zq-col-push-4')
    })
  })

  describe('pull prop', () => {
    it('should render with pull', () => {
      const wrapper = mount(ZqCol, {
        props: { pull: 4 }
      })
      expect(wrapper.classes()).toContain('zq-col-pull-4')
    })
  })

  describe('responsive props', () => {
    it('should render with xs responsive span', () => {
      const wrapper = mount(ZqCol, {
        props: { xs: 12 }
      })
      expect(wrapper.classes()).toContain('zq-col-xs-12')
    })

    it('should render with sm responsive span', () => {
      const wrapper = mount(ZqCol, {
        props: { sm: 8 }
      })
      expect(wrapper.classes()).toContain('zq-col-sm-8')
    })

    it('should render with md responsive span', () => {
      const wrapper = mount(ZqCol, {
        props: { md: 6 }
      })
      expect(wrapper.classes()).toContain('zq-col-md-6')
    })

    it('should render with lg responsive span', () => {
      const wrapper = mount(ZqCol, {
        props: { lg: 4 }
      })
      expect(wrapper.classes()).toContain('zq-col-lg-4')
    })

    it('should render with xl responsive span', () => {
      const wrapper = mount(ZqCol, {
        props: { xl: 3 }
      })
      expect(wrapper.classes()).toContain('zq-col-xl-3')
    })

    it('should render with responsive object (span and offset)', () => {
      const wrapper = mount(ZqCol, {
        props: { md: { span: 12, offset: 2 } }
      })
      expect(wrapper.classes()).toContain('zq-col-md-12')
      expect(wrapper.classes()).toContain('zq-col-md-offset-2')
    })
  })

  describe('inside Row', () => {
    it('should work inside Row', () => {
      const wrapper = mount(ZqRow, {
        slots: {
          default: () => [h(ZqCol, { span: 12 }, { default: () => 'Col Content' })]
        }
      })
      expect(wrapper.findComponent(ZqCol).exists()).toBe(true)
    })

    it('should inherit gutter from Row', () => {
      const wrapper = mount(ZqRow, {
        props: { gutter: 20 },
        slots: {
          default: () => [h(ZqCol, { span: 12 }, { default: () => 'Col Content' })]
        }
      })
      const col = wrapper.findComponent(ZqCol)
      expect(col.attributes('style')).toContain('padding-left: 10px')
      expect(col.attributes('style')).toContain('padding-right: 10px')
    })
  })
})
