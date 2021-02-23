<template>
  <div class="container mx-auto my-8">
    <ArticleCard v-for="(article, index) in articles" :key="index" :title="article.title" :date="article.date" :category="article.category" :slug="article.slug" />
  </div>
</template>

<script>

export default {
  async asyncData({ $content }) {
    const query = await $content('blog').limit(15)
    const articles = await query.fetch()
    return { articles }
  }
}
</script>