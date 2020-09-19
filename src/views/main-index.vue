<template>
  <div>
    <div>
      <header-index></header-index>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import HeaderIndex from '../components/header-index'
export default {
  components: {
    HeaderIndex
  }
}
</script>

<style lang="less">
</style>
