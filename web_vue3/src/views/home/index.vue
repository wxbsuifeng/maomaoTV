<template>
  <div class="home-header">
    <span class="header-title">在线直播</span>
    <span
      class="tab-span"
      v-for="type in typeList"
      :key="type.typeId"
      :class="{
        active: type.typeName === currentType
      }"
      @click="currentType = type.typeName;"
    >
      {{ type.typeName }}
    </span>
  </div>
</template>

<script>
  import { reactive, toRefs, onBeforeMount, onMounted } from 'vue'

  export default {
    name: 'home',
    setup() {
      const data = reactive({
        currentType: '全部',
        typeList: [
          {
            typeId: 0,
            typeName: '全部'
          },
          {
            typeId: 1,
            typeName: '长毛猫1'
          },
          {
            typeId: 2,
            typeName: '长毛猫2'
          },
          {
            typeId: 3,
            typeName: '长毛猫3'
          },
          {
            typeId: 4,
            typeName: '长毛猫4'
          },
          {
            typeId: 5,
            typeName: '长毛猫5'
          },
          {
            typeId: 6,
            typeName: '长毛猫6'
          },
          {
            typeId: 7,
            typeName: '长毛猫7'
          },
          {
            typeId: 8,
            typeName: '长毛猫8'
          },
          {
            typeId: 9,
            typeName: '长毛猫9'
          },
          {
            typeId: 10,
            typeName: '长毛猫10'
          },
          {
            typeId: 11,
            typeName: '长毛猫11'
          }
        ]
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
.home-header {
  font-size: 30px;
  color: black;

  .header-title {
    margin-right: 30px;
  }

  .tab-span {
    display: inline-block;
    vertical-align: middle;
    height: 32px;
    line-height: 32px;
    border: 1px solid #eee;
    color: #666;
    width: 90px;
    font-size: 14px;
    background: #fff;
    border-radius: 20px 20px;
    margin-right: 15px;
    text-align: center;
    cursor: pointer;

    &:last-child {
      margin-right: 0;
    }
    &:hover {
      border: 1px solid #ff5d23;
      color: #ff5d23;
    }
    &.active {
      border: 1px solid #ff5d23;
      background: #ff5d23;
      color: #fff;
    }
  }
}
</style>