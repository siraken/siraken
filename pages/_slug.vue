<template>
  <article class="container mx-auto my-8 px-20 md:px-0">
    <h1 class="text-center text-3xl font-bold my-8">{{ article.title || '' }}</h1>
    <div class="content bg-white rounded">
      <nuxt-content :document="article" />
    </div>
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const query = $content('blog', params.slug)
    const article = await query.fetch()
    return { article }
  }
}
</script>

<style lang="scss">
.nuxt-content {
  h1 {
    margin: 48px 0px 28px;
    font-size: 1.6rem;
    font-weight: bold;
    padding: 8px 12px 8px 16px;
    border-left: 6px solid rgb(59, 130, 246);
    background: #f2f2f2;
  }

  h2 {
    border-left: 6px solid rgb(59, 130, 246);
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

  em {

  }

  a {
    color: rgb(59, 130, 246);
    text-decoration: underline;
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