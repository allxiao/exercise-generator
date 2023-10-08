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
        <form class="d-flex" role="form" id="config">
          <div class="input-group">
            <label class="input-group-text" for="input-min-value">最小值</label>
            <input :value="min" @input="updateMin" class="form-control me-2 col-1" id="input-min-value"
                   name="input-min-value" type="number" aria-label="最小值">
          </div>
          <div class="input-group">
            <label class="input-group-text" for="input-max-value">最大值</label>
            <input :value="max" @input="updateMax" class="form-control me-2 col-1" id="input-max-value"
                   name="input-max-value" type="number" aria-label="最大值">
          </div>
          <button class="btn btn-outline-success" type="submit" @click.prevent="shuffle">生成</button>
        </form>
      </div>
    </div>
  </nav>
  <div class="container-fluid d-flex align-items-center justify-content-center">
    <div id="main-page" class="shadow-lg rounded">
      <PlusExercise title="填空练习题"></PlusExercise>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import { mapState } from 'vuex'
import { MAX, MIN, SHUFFLE } from '@/store/mutations'
import { Operations } from '@/utils'

import NavItem from '@/components/NavItem.vue'
import PlusExercise from '@/components/PlusExercise.vue'

function safeParseInt (value: any): number | undefined {
  try {
    return parseInt(value)
  } catch {
  }
}

export default defineComponent({
  name: 'App',
  components: {
    NavItem,
    PlusExercise
  },
  data () {
    return {
      operations: Object.keys(Operations)
    }
  },
  computed: mapState([
    'min',
    'max'
  ]),
  methods: {
    updateMin (e: any) {
      this.$store.commit(MIN, safeParseInt(e.target.value))
    },
    updateMax (e: any) {
      this.$store.commit(MAX, safeParseInt(e.target.value))
    },
    shuffle () {
      this.$store.commit(SHUFFLE)
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
