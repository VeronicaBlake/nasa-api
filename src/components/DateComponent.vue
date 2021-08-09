<template>
  <div></div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { datesService } from '../services/DatesService'
import { AppState } from '../AppState'
import Date from '..components/Date.vue'
export default {
  name: 'DateComponent',
  setup() {
    const state = reactive({
      query: ''
    })
    onMounted(() => {
      datesService.getDates()
    })
    return {
      state,
      dates: computed(() => AppState.dates),
      getDates() {
        datesService.getDates(state.query)
      },
      setActiveDate(date) {
        datesService.setActiveDate(date)
      }
    }
  },
  components: { Date }
}
</script>

<style lang="scss" scoped>

</style>
