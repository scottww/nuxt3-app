<template>
  <div class="default-wrapper">
    <AppHeader />
    <slot />
    <AppFooter />
  </div>
</template>
<style scoped>
.default-wrapper {
  width: 100%;
  border: 1px solid red;
}
</style>
