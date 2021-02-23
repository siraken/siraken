<template>
  <div class="container">
    <ArticleCard v-for="(article, index) in articles" :key="index" :title="article.title" :description="article.description" :date="article.date" :category="article.category" :slug="article.slug" :eyecatch="article.eyecatch" :eyecatch_alt="article.eyecatch_alt" />
  </div>
</template>

<script>

export default {
  async asyncData({ $content }) {
    const query = await $content('blog')
      .where({ draft: false })
      .sortBy('date', 'desc')
      .limit(50)
    const articles = await query.fetch()
    return { articles }
  }
}
</script>