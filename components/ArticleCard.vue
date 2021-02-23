<template>
  <article>
    <h2 class="text-xl font-bold">{{ title }}</h2>
    <time class="text-right text-sm text-gray-700">{{ date }}</time>
  </article>
</template>

<script>
export default {
  props: {
    title: String,
    date: String,
    category: String,
    slug: String
  }
}
</script>
<style scoped>
article {
  background: #fff;
  color: #000;
}

</style>
