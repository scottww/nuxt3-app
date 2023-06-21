<template>
  <div class="default-wrapper">
    <Header />
    <slot />
    <h3>layout footer</h3>
  </div>
</template>
<style scoped>
.default-wrapper{
  width: 100%;
  border: 1px solid red;
}
</style>