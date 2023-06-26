<template>
  <div class="main-wrapper">
    <div class="main-wrapper__left">
      <IndexLeftPanel></IndexLeftPanel>
    </div>
    <div class="main-wrapper__right">
      <IndexRightPanel></IndexRightPanel>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.main-wrapper {
  // @apply flex justify-center items-center;
  display: flex;
  width: 800px;
  margin: 0 auto;
  &__left {
    width: 40%;
    border: 1px solid #eee;
  }
  &__right {
    flex: 1;
    border: 1px solid #eee;
    margin-left: 8px;
  }
}
</style>
