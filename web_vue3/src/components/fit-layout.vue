<template>
  <div class="fit-layout" :style="appStyle">
    <slot></slot>
  </div>
</template>

<script>
  import { reactive, toRefs, onMounted, computed, watch } from 'vue'

  const DesignSize = {
    width: 1920,
    height: 937
  }
  const getViewScale = userDesignsize => {
    return {
      x: window.innerWidth / (userDesignsize || DesignSize).width,
      y: window.innerHeight / (userDesignsize || DesignSize).height
    }
  }
  export default {
    name: 'fit-layout',
    props: {
      designSize: Object
    },
    setup(props) {
      const data = reactive({
        viewSize: {
          height: (props.designSize || DesignSize).height,
          width: (props.designSize || DesignSize).width
        },
        viewScale: getViewScale(),
      });
      const refData = toRefs(data);

      const appStyle = computed(() => {
        return {
          width: `${data.viewSize.width}px`,
          height: `${data.viewSize.height}px`,
          transform: `scale(${data.viewScale.x}, ${data.viewScale.y})`
        }
      })
    
      const resetWindow = () => {
        data.viewScale = getViewScale(props.designSize);
      }

      onMounted(() => {
        resetWindow();
        window.onresize = resetWindow;
      })
      watch(() => props.designSize, () => {
        resetWindow();
      });
  
      return {
        ...refData,
        appStyle
      }
    }
  };
</script>

<style scoped>
.fit-layout {
  transform-origin: left top;
  height: 100%;
  width: 100%;
}
</style>