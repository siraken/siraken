<template>
  <div>

    <!-- particles -->
    <div id="particles"></div>

    <!-- navbar -->
    <header>
      <nav class="navbar navbar-expand-md navbar-dark fixed-top">
        <div class="container">
          <!-- title -->
          <a class="navbar-brand" href="/">Kento Shirasawa</a>
          <!-- button -->
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#NavbarMenu" aria-controls="NavbarMenu" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <!-- menu -->
          <div class="collapse navbar-collapse" id="NavbarMenu">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                  <a class="nav-link" href="https://note.com/siraken" rel="noopener noreferrer">Blog</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" href="https://github.com/SiraKen" target="_blank" rel="noopener noreferrer">GitHub</a>
              </li>
              <li class="nav-item">
                <a class="nav-link " href="https://www.youtube.com/channel/UCUUhx5rucm_tYuM0Hbm781g" target="_blank" rel="noopener noreferrer">
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>

    <!-- content -->
    <div class="nuxt">
      <Nuxt />
    </div>

    <!-- footer -->
    <footer class="mx-auto text-center">
      <span>&copy; 2020 Kento Shirasawa from <a href="https://www.novalumo.llc/">Novalumo Japan G.K.</a></span>
    </footer>

  </div>
</template>

<script>
export default {
  head: {
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
      {
        src: '/scroll.js',
        body: true
      }
    ]
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

img, p, dl {
  pointer-events: none;
  user-select: none;
}

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
  padding: 100px 0;
}
#particles {
  position: absolute;
  display: block;
  width: 100vw; height: auto;
  top: 0; left: 0; bottom: 0; z-index: -1;
}
</style>
