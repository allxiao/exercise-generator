<script lang="ts">
import { defineComponent } from 'vue'
import { OPERATION } from '@/store/mutations'
import { fromOperationType, Operation, OperationType } from '@/store/operations'

export default defineComponent({
  name: 'NavItem',
  props: {
    op: Number
  },
  computed: {
    operation(): Operation {
      return fromOperationType(this.op as OperationType)
    },
    active() {
      return this.$store.state.operation.type === this.operation.type
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
       :aria-current="active ? 'page' : undefined" href="#">{{ operation.representation }}</a>
  </li>
</template>

<style scoped>

</style>
