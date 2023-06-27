<template>
  <div class="app-header-wrapper">
    <ul class="flex">
      <li><NuxtLink to="/">Home</NuxtLink></li>
      <li><NuxtLink to="/about">About</NuxtLink></li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
$font-color: rgb(113, 113, 122);
$font-color-active: rgb(24, 24, 27);
.app-header-wrapper {
  height: 60px;
  width: 100%;
  @apply flex justify-center items-center;
  border-bottom: 1px solid #e5e7eb;
  background-color: rgba(255, 255, 255, 0.75);
}
.app-header-wrapper > ul > li {
  padding: 0 8px;
  a {
    color: $font-color;
    text-decoration: none;
    // &.active{
    //   color: $font-color-active;
    // }
  }
  // &:first-child{
  //   a{
  //     color: $font-color-active;
  //     font-weight: 600;
  //   }
  // }
}
</style>
