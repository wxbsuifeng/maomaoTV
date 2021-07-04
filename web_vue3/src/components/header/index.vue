<template>
  <div class="header-wrap">
    <div class="header-container">
      <div class="header-left">
        <img class="header-logo" :src="'@src/../static/img/header-logo.png'" />
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
        <el-input 
          placeholder="请输入搜索内容"
          v-model="searchParam"
          class="search-input"
          @focus="handleSearchFocuse"
          @blur="showSearchModal = false;"
        >
          <template #suffix>
            <i class="el-icon-search search-icon"></i>
          </template>
        </el-input>
        <div
          class="search-result"
          v-if="showSearchModal"
        >
          <i class="arrow-top"></i>
          <p
            class="result-item"
            v-for="item in searchContent"
            :key="item.name"
          >
            {{ item.name }}
          </p>
        </div>
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
        <div
          class="self-container"
          @mouseenter="handleSelfFocuse"
          @mouseleave="showSelfModal = false;"
        >
          <img
            :src="'@/../static/img/self.jpg'"
            class="self-icon"
          />
          <div
            class="self-opreate"
            v-if="showSelfModal"
          >
            <i class="arrow-top self-arrow"></i>
            <p class="operate-header">
              <span>云端顶配主机</span>
              <span class="label-logout">登出</span>
            </p>
            <div class="operate-self">
              <img
                :src="'@/../static/img/self.jpg'"
                class="self-img"
              />
              <div class="detail-info">
                <span class="cur-level">lv22</span>
                <div class="process-container">
                  <el-progress
                    :text-inside="true"
                    :stroke-width="12"
                    :percentage="70"
                    style="font-size: 6px;"
                  ></el-progress>
                </div>
                <span class="next-level">lv33</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { reactive, toRefs, onBeforeMount, onMounted } from 'vue'
  interface TitleObject {
    title: string
  }

  export default {
    name: 'home',
    setup() {
      const data = reactive({
        curTab: '直播',
        searchParam: '',
        showSearchModal: false,
        showSelfModal: false,
        searchContent: [
          {
            name: 'name1',
            roomId: 1
          },
          {
            name: 'name2',
            roomId: 2
          },
          {
            name: 'name3',
            roomId: 3
          },
          {
            name: 'name4',
            roomId: 4
          },
          {
            name: 'name5',
            roomId: 5
          },
          {
            name: 'name6',
            roomId: 6
          }
        ],
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

      function handleTabClick(item:TitleObject) {
        data.curTab = item.title;
      }
      
      function handleSearchFocuse() {
        data.showSearchModal = true;
      }

      function handleSelfFocuse() {
        data.showSelfModal = true;
      }

      return {
        ...refData,
        handleTabClick,
        handleSearchFocuse,
        handleSelfFocuse
      }
    }
  };
</script>

<style lang="less" scoped>
.header-wrap {
  width: 100%;
  position: fixed;
  font-size: 18px;
  top: 0;
  left: 0;
  background: #fff;
  border-bottom: 1px solid #eee;
  z-index: 99;

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
      position: relative;

      .search-result {
        position: absolute;
        top: 65px;
        left: 0;
        width: 200px;
        background-color: #fff;
        border-radius: 5px;
        box-shadow: 0 2px 6px rgb(0 0 0 / 10%);
        -webkit-box-shadow: 0 2px 6px rgb(0 0 0 / 10%);

        &::before {
          content: "";
          width: 100%;
          height: 0;
          border-top: 3px solid #ff5d23;
          position: absolute;
          top: -3px;
          left: 0;
        }

        .result-item {
          box-sizing: border-box;
          padding-left: 20px;
          height: 40px;
          line-height: 40px;
          text-align: left;
          cursor: pointer;

          &:hover {
            background: rgba(0, 0, 0, 0.1);
            color: #ff5d23;
          }
        }
      }
    }

    .arrow-top {
      width: 0;
      height: 0;

      &::before {
        position: absolute;
        content: "";
        top: -10px;
        margin-left: -7px;
        border-top: 0;
        border-right: 7px dashed transparent;
        border-bottom: 7px solid #ff5d23;
        border-left: 7px dashed transparent;
        display: inline-block;
        width: 0;
        height: 0;
        vertical-align: middle;
      }
    }

    .left-item {
      width: 80px;
      height: 60px;
      line-height: 60px;
      display: inline-block;
      vertical-align: middle;
      cursor: pointer;

      &:hover {
        color: rgba(255, 130, 86, 1);
      }

      &.active {
        color: rgba(255, 130, 86, 1);
      }
    }

    .header-logo {
      width: 50px;
      height: 50px;
      display: inline-block;
      vertical-align: middle;
    }

    .search-input {
      width: 160px;

      &:deep(.el-input__inner) {
        border-radius: 40px;
      }
    }

    .search-icon {
      cursor: pointer;
      margin-right: 10px;
    }

    .self-container {
      width: 50px;
      height: 60px;
      position: relative;
      display: inline-block;
      vertical-align: middle;
    }
    
    .self-icon {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      cursor: pointer;
      margin-top: 10px;
    }

    .self-opreate {
      position: absolute;
      top: 45px;
      right: 0;
      width: 260px;
      margin-top: 25px;
      padding: 15px 10px 15px 10px;
      font-size: 12px;
      border-radius: 5px;
      background-color: #fff;
      box-sizing: border-box;
      box-shadow: 0 2px 6px rgb(0 0 0 / 10%);
      -webkit-box-shadow: 0 2px 6px rgb(0 0 0 / 10%);

      &::before {
        content: "";
        width: 100%;
        height: 0;
        border-top: 3px solid #ff5d23;
        position: absolute;
        top: -3px;
        left: 0;
      }

      .self-arrow {
        position: absolute;
        right: 25px;
        top: 0px;
      }

      .operate-header {
        height: 30px;
        span {
          float: left;
        }

        .label-logout {
          float: right;
          cursor: pointer;

          &:hover {
            color: #ff5d23;
          }
        }
      }

      .operate-self {
        .self-img {
          width: 60px;
          height: 60px;
          border-radius: 50%;
        }

        .detail-info {
          margin-top: 15px;

          span {
            display: inline-block;
            padding: 0 5px 0 5px;
            border: 1px solid lightgray;
            color: lightgray;
            vertical-align: middle;
          }

          .cur-level {
            border: 1px solid #ff5d23;
            color: #ff5d23;
          }

          .process-container {
            display: inline-block;
            vertical-align: middle;
            width: 160px;
            margin: 0 5px 0 5px;
          }
        }
      }
    }
  }
}
</style>