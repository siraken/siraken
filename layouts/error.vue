<template>
  <div>

    <!-- container -->
    <div class="container mt-5 mb-5">
      <div class="row">
        <div class="col-12 text-center">

          <div id="error">
            <h1>{{ error.statusCode }} {{ message[0] }}</h1>
            <p>{{ message[1] }}</p>
          </div>

        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  props: ['error'],
  computed: {
    message() {
      if (this.error.statusCode === 404) {
        return ['Not Found', 'お探しのページは見つかりませんでした']
      }
      return ['Error', 'エラーが発生しました']
    }
  }
}
</script>

<style>

</style>
