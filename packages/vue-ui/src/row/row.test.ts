import { describe, it, expect } from 'vitest'
import { h } from 'vue'
import { mount } from '@vue/test-utils'
import ZqRow from './index'
import ZqCol from '../col'

describe('Row', () => {
  it('should render correctly', () => {
    const wrapper = mount(ZqRow)
    expect(wrapper.classes()).toContain('zq-row')
  })

  it('should render with default slot', () => {
    const wrapper = mount(ZqRow, {
      slots: {
        default: 'Row Content'
      }
    })
    expect(wrapper.text()).toContain('Row Content')
  })

  it('should render as div by default', () => {
    const wrapper = mount(ZqRow)
    expect(wrapper.element.tagName).toBe('DIV')
  })

  it('should render with custom tag', () => {
    const wrapper = mount(ZqRow, {
      props: { tag: 'section' }
    })
    expect(wrapper.element.tagName).toBe('SECTION')
  })

  describe('gutter prop', () => {
    it('should render with number gutter', () => {
      const wrapper = mount(ZqRow, {
        props: { gutter: 20 }
      })
      expect(wrapper.attributes('style')).toContain('margin-left: -10px')
      expect(wrapper.attributes('style')).toContain('margin-right: -10px')
    })

    it('should render with array gutter', () => {
      const wrapper = mount(ZqRow, {
        props: { gutter: [20, 10] }
      })
      expect(wrapper.attributes('style')).toContain('margin-left: -10px')
      expect(wrapper.attributes('style')).toContain('margin-right: -10px')
    })

    it('should pass gutter to Col children', () => {
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

  describe('justify prop', () => {
    it('should render with justify-center', () => {
      const wrapper = mount(ZqRow, {
        props: { justify: 'center' }
      })
      expect(wrapper.classes()).toContain('is-justify-center')
    })

    it('should render with justify-end', () => {
      const wrapper = mount(ZqRow, {
        props: { justify: 'end' }
      })
      expect(wrapper.classes()).toContain('is-justify-end')
    })

    it('should render with justify-space-between', () => {
      const wrapper = mount(ZqRow, {
        props: { justify: 'space-between' }
      })
      expect(wrapper.classes()).toContain('is-justify-space-between')
    })

    it('should render with justify-space-around', () => {
      const wrapper = mount(ZqRow, {
        props: { justify: 'space-around' }
      })
      expect(wrapper.classes()).toContain('is-justify-space-around')
    })
  })

  describe('align prop', () => {
    it('should render with align-middle', () => {
      const wrapper = mount(ZqRow, {
        props: { align: 'middle' }
      })
      expect(wrapper.classes()).toContain('is-align-middle')
    })

    it('should render with align-bottom', () => {
      const wrapper = mount(ZqRow, {
        props: { align: 'bottom' }
      })
      expect(wrapper.classes()).toContain('is-align-bottom')
    })
  })

  describe('with Col children', () => {
    it('should render Col children', () => {
      const wrapper = mount(ZqRow, {
        slots: {
          default: () => [
            h(ZqCol, { span: 12 }, { default: () => 'Col 1' }),
            h(ZqCol, { span: 12 }, { default: () => 'Col 2' })
          ]
        }
      })
      const cols = wrapper.findAllComponents(ZqCol)
      expect(cols.length).toBe(2)
      expect(cols[0].text()).toContain('Col 1')
      expect(cols[1].text()).toContain('Col 2')
    })
  })
})
