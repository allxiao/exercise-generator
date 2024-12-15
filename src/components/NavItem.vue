<script lang="ts">
import { defineComponent } from 'vue'
import { OPERATION } from '@/store/mutations'
import { OperationType } from '@/store/operations'

export default defineComponent({
  name: 'NavItem',
  props: {
    op: String
  },
  computed: {
    operation(): string {
      return this.op || OperationType.Plus
    },
    active(): boolean {
      return this.$store.state.operation === this.operation
    }
  },
  methods: {
    updatePage() {
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
