<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SingleQuestion'
})
</script>

<template>
  <div class="question col-3 d-flex">
    <div>7-5=</div><div class="blank-box"></div>
  </div>
</template>

<style scoped>
.question {
  font-size: 30px;
  color: #333333;
}
.blank-box {
  width: 52px;
  height: 40px;
  border: 1px solid #33333360;
  display: inline-block;
  border-radius: 5px;
}
</style>
