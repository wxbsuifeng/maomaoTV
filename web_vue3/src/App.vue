<template>
  <fit-layout>
    <router-view></router-view>
  </fit-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import FitLayout from './components/fit-layout.vue'

export default defineComponent({
  name: 'App',
  components: {
    FitLayout
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
  margin-top: 60px;

  .test {
    margin-left: 20px;
    width: 200px;
    height: 200px;
    background: black;
  }
}
</style>
