<template>
  <div class="component container-fluid">
    <div class="row">
      <div class="col-md-12">
        <!-- search form for dates goes here -->
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <ActiveComponent />
      </div>
      <div class="col-md-12">
        <DateComponent />
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'
import ActiveComponent from '../components/ActiveComponent.vue'
import DateComponent from '../components/DateComponent.vue'
export default {
  name: 'Home',
  setup() {
    const state = reactive({

    })
    return { state }
  },
  components: { ActiveComponent, DateComponent }
}
</script>

<style scoped lang="scss">
.home{
  text-align: center;
  user-select: none;
  > img{
    height: 200px;
    width: 200px;
  }
}
</style>
