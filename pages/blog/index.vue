<template>
  <div class="container">
    <ArticleCard v-for="(article, index) in articles" :key="index" :title="article.title" :description="article.description" :date="DateFormat(new Date(article.date))" :category="article.category" :slug="article.slug" :eyecatch="article.eyecatch" :eyecatch_alt="article.eyecatch_alt" />
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
  },
  data() {
    return {
      monthNames: [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
      ]
    }
  },
  methods: {
    DateFormat: function(val) {
      let year  = val.getFullYear()
      let month = this.monthNames[val.getMonth()]
      let day   = val.getDate()
      let date  = month + ' ' + day + ', ' + year
      return date
    }
  }
}
</script>