<template>
  <div class="footer-wrapper">
    <ul>
      <li><NuxtLink to="/">home</NuxtLink></li>
      <li><NuxtLink to="/about">about</NuxtLink></li>
    </ul>
  </div>
</template>
<style scoped>
.footer-wrapper {
  list-style-type: none;
  display: flex;
}
.footer-wrapper>ul{
  list-style-type: none;
  display: flex;
}
.footer-wrapper>ul>li{
  padding: 0 8px;
}
</style>
