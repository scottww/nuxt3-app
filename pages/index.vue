<template>
  <div>
    <h3>Index Page</h3>

    <div>
      route:
      <div>
        <NuxtLink to="/detail">Detail Page</NuxtLink> |
        <NuxtLink to="/user-admin/1">/user-admin/1</NuxtLink> |
        <!-- 嵌套路由 -->
        <NuxtLink to="/parent/child">/parent/child</NuxtLink> | 
        <NuxtLink to="/helloworld">helloworld</NuxtLink>
      </div>
    </div>
    <!-- <slot /> -->
  </div>
</template>
<script lang="ts" setup>
definePageMeta({
  layout: false,
});
</script>
