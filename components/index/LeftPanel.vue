<template>
  <div class="left-panel">
    <div class="item custom-bg-1">1</div>
    <div class="item custom-bg-2">2</div>
    <div class="item custom-bg-3">3</div>
  </div>
</template>
<style lang="scss" scoped>
.left-panel {
  // border: 1px solid red;
  @apply flex flex-col;
  .item {
    height: 150px;
    margin-bottom: 8px;
    // border: 1px solid #333;
    color: #fff;
    @apply flex justify-center items-center;
    &:last-child{
      margin-bottom: 0;
      height: 150px;
    }
  }
}
</style>
