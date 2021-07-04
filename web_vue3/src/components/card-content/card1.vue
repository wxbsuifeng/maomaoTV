<template>
  <div 
    class="card-container"
    @click="hanldeClick(roomData.roomId)"
  >
    <img
      class="room-img"
      :src="'@/../static/img/self.jpg'"
    />
    <p class="room-detail">
      <span class="detail-left">
        {{ roomData.roomTitle }}
      </span>
      <span class="detail-right">
        {{ roomData.type }}
      </span>
    </p>
    <p class="room-detail">
      <span class="detail-left">
        {{ roomData.roomName }}
      </span>
      <span class="detail-right">
        {{ roomData.hot }}
      </span>
    </p>
  </div>
</template>

<script>
  import { reactive, toRefs, onBeforeMount, onMounted } from 'vue'
  import { useRouter, useRoute } from 'vue-router'

  export default {
    name: 'home',
    props: {
      roomData: Object
    },
    setup() {
      const data = reactive({

      })
      const refData = toRefs(data);
      const router = useRouter()
      const route = useRoute()

      onBeforeMount(() => {
      })

      onMounted(() => {
      })

      function hanldeClick() {
        //$route.push();
        console.log(route)
      }

      return {
        ...refData,
        hanldeClick
      }
    }
  };
</script>

<style lang="less" scoped>
  .card-container {
    width: 300px;
    margin: 0 20px 20px 0;
    display: inline-block;
    vertical-align: center;
    border-radius: 8px;
    background-color: #fff;
    cursor: pointer;

    .room-img {
      width: 300px;
      height: 180px;
    }

    .room-detail {
      height: 32px;
      line-height: 32px;
      padding: 0 10px 0 10px;

      .detail-right {
        float: right;
      }
    }

    &:hover {
      transform: scale(1.1);
    }
  }
</style>
