<script lang="ts">
import { defineComponent } from 'vue'
import { Operations } from '@/utils'
import { OPERATION } from '@/store/mutations'

export default defineComponent({
  name: 'NavItem',
  props: {
    op: String
  },
  computed: {
    operation (): string {
      return Operations[this.op as keyof typeof Operations]
    },
    active () {
      return this.$store.state.operation === this.operation
    }
  },
  methods: {
    updatePage () {
      this.$store.commit(OPERATION, this.operation)
    }
  }
})
</script>

<template>
  <li class="nav-item">
    <a @click.prevent="updatePage" class="nav-link" :class="{active: active}"
       :aria-current="active ? 'page' : undefined" href="#">{{ operation }}</a>
  </li>
</template>

<style scoped>

</style>
