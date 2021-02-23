<template>
  <article class="container">
    <div class="bg-white text-dark p-3 rounded">
      <h1 class="font-weight-bold m-0">{{ article.title || '' }}</h1>
      <p class="lead text-muted description">{{ article.description }}</p>
      <p class="text-muted date"><i class="fas fa-fw fa-clock mr-1"></i><time v-bind:datetime="article.date">{{ article.date }}</time></p>
      <div v-if="article.image">
        <img class="eyecatch rounded shadow" :src="'/blog/' + article.image" :alt="article.image_alt">
      </div>
      <hr>
      <nuxt-content :document="article" />
    </div>
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const query = $content('blog', {deep: true}, params.slug)
    const article = await query.fetch()
    return { article }
  },
  head() {
    return {
      title: this.article.title + ' | SiraKen.NET',
      meta: [
        // description
        { hid: 'description', name: 'description', content: this.article.description },
        // open graph
        { hid: 'og:title', property: 'og:title', content: this.article.title },
        { hid: 'og:description', property: 'og:description', content: this.article.description },
        // twitter card
        { hid: 'twitter:title', name: 'twitter:title', content: this.article.title },
        { hid: 'twitter:description', name: 'twitter:description', content: this.article.description }
      ]
    }
  },
}
</script>

<style lang="scss">
// description
.description {
  margin: 0;
}

// eyecatch
.eyecatch {
  width: 100%;
  max-height: 450px;
  object-fit: cover;
  border: solid 1px #eee;
  box-shadow: 0 .5rem 1rem rgba(0,0,0,.15)!important;
}

// article
.nuxt-content {
  h1 {
    margin: 48px 0px 28px;
    font-size: 1.6rem;
    font-weight: bold;
    padding: 8px 12px 8px 16px;
    border-left: 6px solid rgb(28, 86, 94);
    background: #f2f2f2;
  }

  h2 {
    border-left: 6px solid rgb(28, 86, 94);
    padding: 8px 12px 8px 16px;
    margin: 28px 0px 16px;
    font-size: 1.2rem;
    font-weight: bold;
  }

  h3 {
    font-size: 1.1rem;
    font-weight: bold;
  }

  h4, h5, h6 {
    font-weight: bold;
  }

  strong {
    font-weight: bold;
  }

  a {
    color: rgb(59, 130, 246);
  }

  p {
    margin: 20px 0 10px;
  }

  code {

  }

  pre code {

  }
}
</style>