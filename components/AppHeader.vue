<template>
  <div class="app-header-wrapper">
    <ul class="flex">
      <li><NuxtLink to="/">home</NuxtLink></li>
      <li><NuxtLink to="/about">about</NuxtLink></li>
    </ul>
  </div>
</template>
<style scoped>
.app-header-wrapper {
  height: 60px;
  width: 100%;
  @apply flex justify-center items-center;
  border-bottom: 1px solid #ccc;
}
.app-header-wrapper > ul > li {
  padding: 0 8px;
}
</style>
