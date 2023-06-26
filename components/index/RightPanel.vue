<template>
  <div class="right-panel">
    <div class="right-panel__top item">
      <div class="item__left custom-bg-4">4</div>
      <div class="item__right custom-bg-5">5</div>
    </div>
    <div class="right-panel__bottom item reverse">
      <div class="item__left custom-bg-6">6</div>
      <div class="item__right custom-bg-7">7</div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
$custom-gap: 0.5rem; //size 16px = 8px
.right-panel {
  // border: 1px solid red;
  height: 100%;
  @apply flex flex-col;
  &__top {
    height: 40%;
    margin-bottom: $custom-gap;
  }
  &__bottom {
    // flex: 1;
    @apply flex-1;
  }
}
.item {
  // display: flex;
  @apply flex;
  color: #fff;
  // border: 1px dashed #666;
  &__left {
    width: 40%;
    // border: 1px dashed #999;
  }
  &__right {
    flex: 1;
    // border: 1px dashed #999;
    // margin-left: 0.5rem;
    @apply ml-2;
  }
  &.reverse {
    // flex-direction: row-reverse;
    @apply flex-row-reverse;
    .item__right {
      @apply ml-0 mr-2;
    }
  }
  &__left,
  &__right {
    @apply flex justify-center items-center;
  }
}
</style>
