<template>
  <div class="card">
    <div class="card__img">1</div>
    <div class="card__content">
      <div class="title">Title</div>
      <div class="sub-title">SubTitle</div>
      <div class="desc">
        Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc
        Desc Desc Desc Desc Desc.
      </div>
    </div>
    <div class="card__action">
      <button>Action1</button>
      <button>Action2</button>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.card {
  width: 350px;
  height: 450px;
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-left: 10px;
  margin-right: 10px;
  &__img {
    height: calc(100% / 3);
    // border: 1px dashed #ccc;
    background-color: #2d2d2d;
  }
  &__content {
    flex: 1;
    // border: 1px dashed #ccc;
    padding: 20px 20px 0 20px;
    .title {
      font-size: 32px;
      font-weight: 600;
    }
    .sub-title {
      color: #ccc;
    }
    .desc {
      margin-top: 10px;
    }
  }
  &__action {
    display: flex;
    flex-direction: row;
    padding: 20px;
    button {
      width: 50%;
      height: 48px;
      border-radius: 4px;
      text-decoration: underline;
      &:first-child {
        color: #fff;
        background-color: #2d2d2d;
        text-decoration: none;
      }
    }
  }
}
</style>
