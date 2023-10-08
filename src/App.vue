<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary d-print-none" id="main-nav">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">练习题生成器</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">加法</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">减法</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">乘法</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">除法</a>
          </li>
        </ul>
        <form class="d-flex" role="form" id="config">
          <div class="input-group">
            <label class="input-group-text" for="input-min-value">最小值</label>
            <input v-model="minValue" class="form-control me-2 col-1" id="input-min-value" name="input-min-value" type="number" aria-label="最小值">
          </div>
          <div class="input-group">
            <label class="input-group-text" for="input-max-value">最大值</label>
            <input v-model="maxValue" class="form-control me-2 col-1" id="input-max-value" name="input-max-value" type="number" aria-label="最大值">
          </div>
          <button class="btn btn-outline-success" type="submit" @click.prevent="regenerate()">生成</button>
        </form>
      </div>
    </div>
  </nav>
  <div class="container-fluid d-flex align-items-center justify-content-center">
    <div id="main-page" class="shadow-lg rounded">
      <PlusExercise title="填空练习题" :pairs="pairs"></PlusExercise>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import PlusExercise from '@/components/PlusExercise.vue'

export default defineComponent({
  name: 'App',
  components: {
    PlusExercise
  },
  data () {
    return {
      minValue: 1,
      maxValue: 20,
      pairs: this.generate(1, 20)
    }
  },
  methods: {
    generate (min: number, max: number): Array<Array<number>> {
      const permutations: Array<Array<number>> = []
      for (let i = min; i <= max; i++) {
        for (let j = min; j <= max; j++) {
          if (i + j < min || i + j > max) {
            continue
          }
          permutations.push([i, j])
        }
      }

      for (let i = 0; i < permutations.length; i++) {
        const index = i + Math.floor(Math.random() * (permutations.length - i))
        const temp = permutations[i]
        permutations[i] = permutations[index]
        permutations[index] = temp
      }

      return permutations
    },

    regenerate () {
      this.pairs.length = 0
      this.pairs.push(...this.generate(this.minValue, this.maxValue))
    }
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#main-nav {
  margin-bottom: 5px;
}

#main-page {
  width: 210mm;
  height: 296mm;
}

#config input {
  width: 6em;
}

#config button {
  width: 8em;
}

@media print {
  @page {
    margin: 0 0 !important;
  }

  #main-page.shadow-lg {
    box-shadow: none !important;
  }

  #main-page.rounded {
    border-radius: unset !important;
  }
}
</style>
