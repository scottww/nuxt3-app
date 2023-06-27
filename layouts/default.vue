<template>
  <div class="default-wrapper">
    <div class="header" ref="headerRef" :class="{ fixed: isNavbarFixed }">
      <AppHeader />
    </div>
    <div class="main">
      <slot />
    </div>
    <div class="footer">
      <AppFooter />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted } from "vue";

const headerRef = ref<any>();

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});

let isNavbarFixed = ref<Boolean>(false);
const handleScroll = () => {
  console.log("headerDom1", headerRef);
  if (!headerRef.value) return;
  const headerOffsetTop = headerRef.value.offsetTop;

  if (window.pageYOffset > headerOffsetTop) {
    isNavbarFixed.value = true;
    document.body.style.marginTop = `${headerOffsetTop.offsetHeight}px`;
  } else {
    isNavbarFixed.value = false;
    document.body.style.marginTop = `0`;
  }
};
</script>
<style lang="scss" scoped>
.default-wrapper {
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100vh;
  width: 100%;

  .main {
    flex: 1;
    // width: 100%;
    // overflow-y:auto;
    // background-color: #edfbfe;
    @apply flex justify-center items-center;
  }
  .header {
    // position: absolute;
    // width: 100%;
    height: 60px;
    // top: 0;
  }
  .footer {
    // position: absolute;
    // width: 100%;
    height: 100px;
    // bottom: 0;
  }
  .fixed {
    /* 悬浮时的样式 */
    position: fixed;
    top: 0;
    width: 100%;
  }
}
</style>
