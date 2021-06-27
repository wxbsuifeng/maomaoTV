<template>
  <div class="header-wrap">
    <div class="header-container">
      <div class="header-left">
        <p
          class="left-item"
          v-for="item in leftList"
          :key="item.title"
          :class="{
            active: curTab === item.title
          }"
          @click="handleTabClick(item)"
        >
          {{ item.title }}
        </p>
      </div>
      <div class="header-right">
        <p
          class="left-item"
          v-for="item in rightList"
          :key="item.title"
          :class="{
            active: curTab === item.title
          }"
          @click="handleTabClick(item)"
        >
          {{ item.title }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  import { reactive, toRefs, onBeforeMount, onMounted } from 'vue'

  export default {
    name: 'home',
    setup() {
      const data = reactive({
        curTab: '直播',
        leftList: [
          {
            title: '直播'
          },
          {
            title: '分类'
          },
          {
            title: '视频'
          },
          {
            title: '游戏'
          },
          {
            title: '鱼吧'
          }
        ],
        rightList: [
          {
            title: '历史'
          },
          {
            title: '关注'
          },
          {
            title: '开播'
          },
          {
            title: '客户端'
          },
          {
            title: '消息'
          }
        ]
      })
      const refData = toRefs(data);

      onBeforeMount(() => {
      })

      onMounted(() => {
      })

      function handleTabClick(item) {
        data.curTab = item.title;
      }

      return {
        ...refData,
        handleTabClick
      }
    }
  };
</script>
<style lang="less" scoped>
.header-wrap {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: #fff;
  border-bottom: 1px solid #eee;

  .header-container {
    margin: 0 auto;
    width: 1400px;
    height: 60px;

    .header-left {
      position: relative;
      float: left;
    }
    
    .header-right {
      float: right;
    }

    .left-item {
      width: 80px;
      height: 60px;
      line-height: 60px;
      display: inline-block;
      cursor: pointer;

      &:hover {
        color: rgba(255, 130, 86, 1);
      }

      &.active {
        color: rgba(255, 130, 86, 1);
      }
    }
  }
}
</style>