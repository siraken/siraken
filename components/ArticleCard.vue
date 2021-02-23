<template>
  <nuxt-link :to="slug">
    <article class="bg-white text-dark p-3 my-3 rounded">
      <h2 class="font-weight-bold m-0">{{ title }}</h2>
      <p class="lead text-muted">{{ description }}</p>
      <p class="text-muted m-0"><i class="fas fa-fw fa-clock mr-1"></i><time :datetime="date">{{ date }}</time></p>
    </article>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    title: String,
    description: String,
    date: String,
    category: String,
    slug: String,
  }
}
</script>
<style lang="scss" scoped>
a {
  text-decoration: none;

  &:hover {
    article {
      background: #aaa;
    }
  }
}
</style>
