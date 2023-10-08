<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SingleValue',
  props: {
    value: Number
  }
})
</script>

<template>
  <div v-if="value === undefined" class="blank-box">
  </div>
  <div v-else>
    {{ value }}
  </div>
</template>

<style scoped>
.blank-box {
  width: 52px;
  height: 40px;
  border: 1px solid #33333360;
  display: inline-block;
  border-radius: 5px;
}
</style>
