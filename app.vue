<template>
  <div>
    <!-- <NuxtWelcome /> -->
    <h1>hello, nuxt3!</h1>

    <!-- 这将应用到全局 -->
    <!-- <NuxtLayout name="header"></NuxtLayout> -->
    
    <!-- 路由出口 -->
    <NuxtPage></NuxtPage>

    <!-- 这将应用到全局 -->
    <NuxtLayout name="footer">slot: footer</NuxtLayout>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
h1 {
  background-color: #fbfbfb;
}
</style>
