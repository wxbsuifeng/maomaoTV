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
  <div class="home-content">
    <card-1
      v-for="room in contentList"
      :key="room.roomId"
      :roomData="room"
    ></card-1>
  </div>
</template>

<script>
  import { reactive, toRefs, onBeforeMount, onMounted } from 'vue'
  import card1 from '../../components/card-content/card1.vue';

  export default {
    components: {
      card1
    },
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
        ],
        contentList: [
          {
            roomId: 1,
            roomTitle: '这是cat1的直播间',
            type: '短毛猫',
            roomName: 'cat1',
            hot: '21万'
          },
          {
            roomId: 2,
            roomTitle: '这是cat2的直播间',
            type: '短毛猫',
            roomName: 'cat2',
            hot: '24万'
          },
          {
            roomId: 3,
            roomTitle: '这是cat3的直播间',
            type: '短毛猫',
            roomName: 'cat3',
            hot: '32万'
          },
          {
            roomId: 4,
            roomTitle: '这是cat4的直播间',
            type: '短毛猫',
            roomName: 'cat4',
            hot: '16万'
          },
          {
            roomId: 5,
            roomTitle: '这是cat5的直播间',
            type: '短毛猫',
            roomName: 'cat5',
            hot: '17万'
          },
          {
            roomId: 6,
            roomTitle: '这是cat6的直播间',
            type: '短毛猫',
            roomName: 'cat6',
            hot: '33万'
          },
          {
            roomId: 7,
            roomTitle: '这是cat7的直播间',
            type: '短毛猫',
            roomName: 'cat7',
            hot: '24万'
          },
          {
            roomId: 8,
            roomTitle: '这是cat8的直播间',
            type: '短毛猫',
            roomName: 'cat8',
            hot: '32万'
          },
          {
            roomId: 9,
            roomTitle: '这是cat9的直播间',
            type: '短毛猫',
            roomName: 'cat9',
            hot: '16万'
          },
          {
            roomId: 10,
            roomTitle: '这是cat10的直播间',
            type: '短毛猫',
            roomName: 'cat10',
            hot: '17万'
          },
          {
            roomId: 11,
            roomTitle: '这是cat11的直播间',
            type: '短毛猫',
            roomName: 'cat11',
            hot: '33万'
          },
          {
            roomId: 12,
            roomTitle: '这是cat12的直播间',
            type: '短毛猫',
            roomName: 'cat12',
            hot: '32万'
          },
          {
            roomId: 13,
            roomTitle: '这是cat13的直播间',
            type: '短毛猫',
            roomName: 'cat13',
            hot: '16万'
          },
          {
            roomId: 14,
            roomTitle: '这是cat14的直播间',
            type: '短毛猫',
            roomName: 'cat14',
            hot: '17万'
          },
          {
            roomId: 15,
            roomTitle: '这是cat15的直播间',
            type: '短毛猫',
            roomName: 'cat15',
            hot: '33万'
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
    height: 60px;

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

  .home-content {
    height: calc(100% - 60px);
  }
</style>