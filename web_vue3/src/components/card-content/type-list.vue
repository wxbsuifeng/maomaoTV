<template>
  <div class="type-header">
    <span class="header-title">{{ typeData.title }}</span>
    <span class="header-expand">全部+</span>
    <div class="item-container">
      <span
        class="type-item"
        v-for="item in typeData.types"
        :key="item.typeId"
      >
        {{ item.typeName }}
      </span>
    </div>
  </div>
</template>

<script>
  import { reactive, toRefs, onBeforeMount, onMounted } from 'vue'

  export default {
    name: 'home',
    props: {
      typeData: Object
    },
    setup(props) {
      const data = reactive({
        
      })
      const refData = toRefs(data);

      onBeforeMount(() => {
      })

      onMounted(() => {
      })

      return {
        ...refData,
      }
    }
  };
</script>

<style lang="less" scoped>
  .type-header {
    box-sizing: border-box;
    margin: 20px 0 20px 10px;
    text-align: left;

    .header-title {
      padding-left: 10px;
      border-left: 2px solid #ff5d23;
    }
    .header-expand {
      float: right;
      margin-right: 20px;
    }

    .item-container {
      margin-top: 10px;
    }

    .type-item {
      height: 35px;
      line-height: 35px;
      width: 70px;
      text-align: center;
      display: inline-block;
      vertical-align: middle;
      cursor: pointer;

      &:hover {
        color: #ff5d23;
      }
    }
  }
</style>
