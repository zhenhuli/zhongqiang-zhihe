import { defineComponent } from 'vue'

export interface MainProps {
}

export default defineComponent({
  name: 'ZqMain',
  props: {
  },
  setup(_, { slots }) {
    return () => (
      <main class="zq-main">
        {slots.default?.()}
      </main>
    )
  }
})
