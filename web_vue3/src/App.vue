<template>
  <fit-layout>
    <Header></Header>
    <Left></Left>
    <div class="content-container">
      <router-view></router-view>
    </div>
  </fit-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import FitLayout from './components/fit-layout.vue'
import Header from './components/header/index.vue'
import Left from './components/left/index.vue'

export default defineComponent({
  name: 'App',
  components: {
    FitLayout,
    Header,
    Left
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

  .content-container {
    position: absolute;
    top: 60px;
    left: 240px;
    width: 1680px;
    height: calc(100% - 60px);
    background-color: #f2f5f6;
    overflow-y: auto;
    box-sizing: border-box;
    padding: 30px 20px 20px 20px;
    text-align: left;
  }
}
</style>
