<template>
  <div>

    <!-- Particles -->
    <div id="particles"></div>

    <!-- Navbar -->
    <header>
      <nav class="navbar navbar-expand-md navbar-dark fixed-top">
        <div class="container">
          <!-- Logo -->
          <a class="navbar-brand" href="/">SiraKen.NET</a>
          <!-- Menu Button -->
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#NavbarMenu" aria-controls="NavbarMenu" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <!-- Menu -->
          <div class="collapse navbar-collapse" id="NavbarMenu">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                  <a class="nav-link" href="/blog/">Blog</a>
              </li>
              <li class="nav-item">
                <a class="nav-link " href="https://www.youtube.com/channel/UCUUhx5rucm_tYuM0Hbm781g" target="_blank" rel="noopener">
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>

    <!-- Content -->
    <div class="nuxt">
      <Nuxt />
    </div>

    <!-- Footer -->
    <footer class="mx-auto text-center">
      <span>Copyright © <a href="https://www.novalumo.llc/">Novalumo</a></span>, <span>All rights reserved.</span>
    </footer>

    <!-- GitHub Icon -->
    <div class="gh-icon">
      <span class="h1 d-block">
        <a href="https://github.com/SiraKen" class="gh-link" title="Fork me!!"><i class="fab fa-github"></i></a>
      </span>
    </div>

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
        src: '/js/particles.js',
        body: true
      },
      {
        src: '/js/scroll.js',
        body: true
      }
    ]
  }
}
</script>

<style lang="scss">
// google fonts
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Noto+Sans+JP:wght@400;700&display=swap');

// body
body {
  background: linear-gradient(to top, rgb(2, 3, 7), rgb(14, 25, 30), rgb(33, 52, 67));
  color: #fff;
  font-family: 'Lato', 'Noto Sans JP', 'ヒラギノ角ゴ ProN', 'Hiragino Kaku Gothic ProN', 'メイリオ', Meiryo, 'ＭＳ Ｐゴシック', 'MS PGothic', sans-serif;
  min-height: 100vh;
}

// header
.navbar {
  color: #fff !important;
}
.navbar-brand {
  transition: .2s;

  &:hover {
    transform: scale(1.05);
  }
}

// footer
footer {
  width: 100%;
  padding: 1rem 0;
  color: #aaa;
  font-size: .8rem;
  cursor: default;

  a {
    color: #aaa;
    font-weight: bold;
  }
}

// github
.gh-icon {
  position: fixed;
  bottom: 0;
  right: 1em;
}
.gh-link {
  display: block;
  color: #fff;
  transition: .5s;
}
.gh-link:hover {
  color: #777;
  transform: rotate(360deg);
}

// other
.ban {
  pointer-events: none;
  user-select: none;
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
