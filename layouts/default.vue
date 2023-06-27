<template>
  <div class="default-wrapper">
    <div class="header">
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
}
</style>
