<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary d-print-none" id="main-nav">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">练习题生成器</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <NavItem v-for="op in operations" :op="op" :key="op"/>
        </ul>
        <form class="d-flex ms-auto" role="form" id="config">
          <div class="input-group">
            <label class="input-group-text" for="input-min-value">最小值</label>
            <input :value="min" @input="updateMin" class="form-control me-2 col-1" id="input-min-value"
                   name="input-min-value" type="number" min="0" max="100" aria-label="最小值">
          </div>
          <div class="input-group">
            <label class="input-group-text" for="input-max-value">最大值</label>
            <input :value="max" @input="updateMax" class="form-control me-2 col-1" id="input-max-value"
                   name="input-max-value" type="number" min="0" max="100" aria-label="最大值">
          </div>
          <div class="input-group">
            <label class="input-group-text" for="input-result-max-value">结果上限</label>
            <input :value="resultMax" @input="updateResultMax" class="form-control me-2 col-1"
                   id="input-result-max-value"
                   name="input-result-max-value" type="number" aria-label="最大值">
          </div>
          <button class="btn btn-outline-success" @click.prevent="shuffle">生成</button>
          <button class="btn btn-outline-success ms-2" @click.prevent="print">打印</button>
        </form>
      </div>
    </div>
  </nav>
  <div class="container-fluid d-flex align-items-center justify-content-center">
    <div id="main-page" class="shadow-lg rounded">
      <div class="container">
        <div class="mt-5"></div>
        <h2 class="text-center m-4">{{ operationName }}练习题</h2>
        <div id="student-info" class="row my-4 mx-1 px-2">
          <div class="col-2">姓名：</div>
          <div class="col-6"></div>
          <div class="col-4 text-end">&emsp;&emsp;年&emsp;&emsp;月&emsp;&emsp;日</div>
        </div>
        <ExerciseGrid></ExerciseGrid>
      </div>

    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import { mapGetters, mapState } from 'vuex'
import { MAX, MIN, RESULT_MAX, SHUFFLE } from '@/store/mutations'
import { Operations } from '@/utils'

import NavItem from '@/components/NavItem.vue'
import ExerciseGrid from '@/components/ExerciseGrid.vue'

function safeParseInt(value: string): number | undefined {
  try {
    const result = parseInt(value)
    if (isNaN(result) || !isFinite(result)) {
      return undefined
    }
    return result
  } catch {
  }
}

export default defineComponent({
  name: 'App',
  components: {
    NavItem,
    ExerciseGrid
  },
  data() {
    return {
      operations: Object.keys(Operations)
    }
  },
  computed: {
    ...mapState([
      'min',
      'max',
      'resultMax'
    ]),
    ...mapGetters([
      'operationName'
    ])
  },
  methods: {
    updateMin(e: { target: { value: string } }) {
      this.$store.commit(MIN, safeParseInt(e.target.value))
    },
    updateMax(e: { target: { value: string } }) {
      this.$store.commit(MAX, safeParseInt(e.target.value))
    },
    updateResultMax(e: { target: { value: string } }) {
      this.$store.commit(RESULT_MAX, safeParseInt(e.target.value))
    },
    shuffle() {
      this.$store.commit(SHUFFLE)
    },
    print() {
      window.print()
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
  width: 1em;
}

#config button {
  width: 10em;
}

#student-info {
  border-bottom: 1px solid #e4803e;
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
