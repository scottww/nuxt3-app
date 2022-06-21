<template>
  <div>
    <h3>Detail Page</h3>
  </div>
</template>
<script setup lang="ts">
// 定义元信息
definePageMeta({
  info: "detail",
  layout: false, // 通过元信息的方式关闭 default 布局
});

// 获取当前路由
const route = useRoute();
const { meta } = route;
console.log(toRaw(meta)); //输出{ info: "detail" }

// ref 将被按需自动引入
const counter = ref(1);
console.log("counter: ", counter.value);
</script>
