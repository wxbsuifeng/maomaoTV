<template>
  <div class="left-container">
    <p
      class="left-title"
      v-for="item in topList"
      :key="item.label"
      :class="{
        active: current === item.label
      }"
      @click="handleItemClick(item)"
    >
      {{ item.label }}
    </p>
    <type-list
      v-for="list in typeArr"
      :key="list.title"
      :typeData="list"
    ></type-list>
  </div>
</template>

<script>
  import { reactive, toRefs, onBeforeMount, onMounted } from 'vue'
  import typeList from '../card-content/type-list.vue';

  export default {
    components: {
      typeList
    },
    name: 'home',
    setup() {
      const data = reactive({
        current: '',
        topList: [
          {
            label: '我的关注'
          },
          {
            label: '排行榜'
          },
          {
            label: '页游中心'
          },
          {
            label: '云游戏'
          },
          {
            label: '赛事'
          }
        ],
        typeArr: [
          {
            title: '短毛猫',
            types: [
              {
                typeId: 1,
                typeName: '银点'
              },
              {
                typeId: 2,
                typeName: '蓝短'
              },
              {
                typeId: 3,
                typeName: '美短'
              },
              {
                typeId: 4,
                typeName: '银点1'
              },
              {
                typeId: 5,
                typeName: '蓝短1'
              },
              {
                typeId: 6,
                typeName: '美短1'
              },
              {
                typeId: 7,
                typeName: '银点2'
              },
              {
                typeId: 8,
                typeName: '蓝短2'
              },
              {
                typeId: 9,
                typeName: '美短2'
              },
              {
                typeId: 10,
                typeName: '银点3'
              },
              {
                typeId: 11,
                typeName: '蓝短3'
              },
              {
                typeId: 12,
                typeName: '美短3'
              },
              {
                typeId: 13,
                typeName: '银点4'
              },
              {
                typeId: 14,
                typeName: '蓝短4'
              },
              {
                typeId: 15,
                typeName: '美短4'
              },
              {
                typeId: 16,
                typeName: '银点5'
              },
              {
                typeId: 17,
                typeName: '蓝短5'
              },
              {
                typeId: 18,
                typeName: '美短5'
              }
            ]
          },
          {
            title: '长毛猫',
            types: [
              {
                typeId: 19,
                typeName: '银点'
              },
              {
                typeId: 20,
                typeName: '蓝短'
              },
              {
                typeId: 21,
                typeName: '美短'
              },
              {
                typeId: 22,
                typeName: '银点1'
              },
              {
                typeId: 23,
                typeName: '蓝短1'
              },
              {
                typeId: 24,
                typeName: '美短1'
              },
              {
                typeId: 25,
                typeName: '银点2'
              },
              {
                typeId: 26,
                typeName: '蓝短2'
              },
              {
                typeId: 27,
                typeName: '美短2'
              },
              {
                typeId: 28,
                typeName: '银点3'
              },
              {
                typeId: 29,
                typeName: '蓝短3'
              },
              {
                typeId: 30,
                typeName: '美短3'
              },
              {
                typeId: 31,
                typeName: '银点4'
              },
              {
                typeId: 32,
                typeName: '蓝短4'
              },
              {
                typeId: 33,
                typeName: '美短4'
              },
              {
                typeId: 34,
                typeName: '银点5'
              },
              {
                typeId: 35,
                typeName: '蓝短5'
              },
              {
                typeId: 36,
                typeName: '美短5'
              }
            ]
          },
          {
            title: '长毛猫2',
            types: [
              {
                typeId: 37,
                typeName: '银点'
              },
              {
                typeId: 38,
                typeName: '蓝短'
              },
              {
                typeId: 39,
                typeName: '美短'
              },
              {
                typeId: 40,
                typeName: '银点1'
              },
              {
                typeId: 41,
                typeName: '蓝短1'
              },
              {
                typeId: 42,
                typeName: '美短1'
              },
              {
                typeId: 43,
                typeName: '银点2'
              },
              {
                typeId: 44,
                typeName: '蓝短2'
              },
              {
                typeId: 45,
                typeName: '美短2'
              },
              {
                typeId: 46,
                typeName: '银点3'
              },
              {
                typeId: 47,
                typeName: '蓝短3'
              },
              {
                typeId: 48,
                typeName: '美短3'
              },
              {
                typeId: 49,
                typeName: '银点4'
              },
              {
                typeId: 50,
                typeName: '蓝短4'
              },
              {
                typeId: 51,
                typeName: '美短4'
              },
              {
                typeId: 52,
                typeName: '银点5'
              },
              {
                typeId: 53,
                typeName: '蓝短5'
              },
              {
                typeId: 54,
                typeName: '美短5'
              }
            ]
          }
        ]
      })
      const refData = toRefs(data);

      onBeforeMount(() => {
      })

      onMounted(() => {
      })

      function handleItemClick(item) {
        data.current = item.label;
      }

      return {
        ...refData,
        handleItemClick
      }
    }
  };
</script>

<style lang="less" scoped>
  .left-container {
    position: fixed;
    left: 0;
    top: 60px;
    width: 240px;
    height: calc(100% - 60px);
    background-color: #2d2e36;
    color: #a7a7a7;
    overflow-y: auto;

    .left-title {
      height: 48px;
      line-height: 48px;
      padding-left: 50px;
      color: #a7a7a7;
      text-align: left;
      cursor: pointer;

      &:last-child {
        border-bottom: 10px solid black;
      }
      &:hover {
        color: #ff5d23;
        background: rgba(0, 0, 0, 0.2);
      }
      &.active {
        color: #ff5d23;
      }
    }
  }
</style>
