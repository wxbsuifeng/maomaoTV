<template>
  <fit-layout>
    <Header></Header>
    <router-view></router-view>
  </fit-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import FitLayout from './components/fit-layout.vue'
import Header from './components/header/index.vue'

export default defineComponent({
  name: 'App',
  components: {
    FitLayout,
    Header
  }
})
</script>

<style lang="less">
@import "./style/index";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
