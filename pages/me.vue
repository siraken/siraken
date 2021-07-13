<template>
  <div class="container">

      <!-- profile image -->
      <div class="row">
        <div class="col-12">
          <div class="text-center mb-3">
            <nuxt-img
              src="/profile.jpg"
              format="webp"
              quality="100"
              sizes="md:75vw lg:300px"
              class="img-fluid rounded-circle mx-auto d-block mb-3 ban"
            />
            <p class="m-0 h1">Kento Shirasawa</p>
            <p class="m-0">（白澤 賢斗 / SiraKen）</p>
          </div>
        </div>
      </div>

      <!-- about -->
      <div class="row mt-2">
        <div class="col-md-6">

          <!-- overview -->
          <section class="bg-dark rounded shadow">
            <article>

              <p class="lead mb-2 border-bottom">Overview</p>
              <p class="mb-3">Novalumo合同会社 代表社員 / CEO</p>
              <p>使っているマシン：</p>
              <p>MacBook Air (Early 2014, Core i7, 8GB RAM)</p>
              <p>Mac mini (2020, Apple Silicon M1, 16GB RAM)</p>

            </article>
          </section>

        </div>

        <div class="col-md-6 mt-3 mt-md-0">

          <!-- biography -->
          <section class="bg-dark rounded shadow">
            <article>

              <p class="lead mb-3 border-bottom">Biography</p>
              <dl>
                <dt>2002年4月11日</dt>
                <dd>岩手県大船渡市で生まれる</dd>
                <dt>2020年4月30日</dt>
                <dd>Novalumo合同会社を設立</dd>
              </dl>

            </article>
          </section>

        </div>

      </div>

  </div>
</template>

<script>
export default {
  head() {
    return {
      meta: [
        { name: 'robots', content: 'noindex,nofollow' },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
section {
  padding: 18px;
  opacity: .8;
}

article {
  p {
    margin: 0;
  }
  a {
    color: #118cff;
  }
}
</style>
