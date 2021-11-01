<template>
  <div>
    <!-- particles -->
    <div id="particles"></div>
    <!-- content -->
    <div class="nuxt">
      <transition name="fade">
        <Nuxt />
      </transition>
    </div>

  </div>
</template>

<script>
export default {
  head() {
    return {
      htmlAttrs: {
        lang: this.$i18n.locale,
      },
      script: [
        {
          src: 'https://code.jquery.com/jquery-3.5.1.slim.min.js',
          body: true
        },
        {
          src: 'https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js',
          body: true
        },
        {
          src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js',
          body: true
        },
        {
          src: 'https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js',
          body: true
        },
        {
          src: '/particles.js',
          body: true
        },
      ]
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Noto+Sans+JP:wght@400;700&display=swap');

body {
  background: linear-gradient(to top, rgb(2, 3, 7), rgb(14, 25, 30), rgb(33, 52, 67));
  color: #fff;
  font-family: 'Lato', 'Noto Sans JP', 'ヒラギノ角ゴ ProN', 'Hiragino Kaku Gothic ProN', 'メイリオ', Meiryo, sans-serif;
  min-height: 100vh;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

img {
  pointer-events: none;
  user-select: none;
}

// hr {
//   margin: 72px 0 18px 0;
//   border: solid 1px #aaa;
// }

.navbar {
  color: #fff !important;
}
.navbar-brand:hover {
  opacity: .75;
}

footer {
  width: 100%;
  padding: 1rem 0;
  color: #aaa;
  font-size: .8rem;
  cursor: default;

  a {
    color: #aaa;
  }
}

.nuxt {
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
#particles {
  position: absolute;
  display: block;
  width: 100vw; height: auto;
  top: 0; left: 0; bottom: 0; z-index: -1;
}
</style>
