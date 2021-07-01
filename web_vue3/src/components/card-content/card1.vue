<template>
  <div class="card-container">
    <img
      class="room-img"
      src="@/../static/img/self.jpg"
    />
    <p class="room-detail">
      <span class="detail-left">
        {{ room.roomTitle }}
      </span>
      <span class="detail-right">
        {{ root.roomType }}
      </span>
    </p>
    <p class="room-detail">
      <span class="detail-left">
        {{ room.roomTitle }}
      </span>
      <span class="detail-right">
        {{ root.roomType }}
      </span>
    </p>
  </div>
</template>

<script>
  import { reactive, toRefs, onBeforeMount, onMounted } from 'vue'

  export default {
    name: 'home',
    props: {
      roomData: Object
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
.card-container {
  width: 300px;
  margin-right: 20px;
  display: inline-block;
  vertical-align: center;
}
</style>
