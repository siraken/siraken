<template>
  <div class="container">

      <!-- Me -->
      <div class="row">
        <div class="col-12">
          <div class="text-center mb-3">
            <img src="/img/shirasawa_kento.jpg" class="img-fluid rounded-circle mx-auto d-block mb-3 ban" style="max-width: 300px;">
            <p class="m-0 h1">Kento Shirasawa</h1>
            <p class="m-0">（白澤 賢斗 / SiraKen）</p>
            <p class="mt-2 h3 links">
              <a href="https://www.youtube.com/channel/UCUUhx5rucm_tYuM0Hbm781g" target="_blank" rel="noopener" id="youtube"><i class="fab fa-fw fa-youtube"></i></a>
              <a href="https://twitter.com/shirasawa_kento" target="_blank" rel="noopener" id="twitter"><i class="fab fa-fw fa-twitter"></i></a>
              <a href="https://www.facebook.com/shirasawa.kento" target="_blank" rel="noopener" id="facebook"><i class="fab fa-fw fa-facebook"></i></a>
              <a href="https://www.instagram.com/shirasawa.kento" target="_blank" rel="noopener" id="instagram"><i class="fab fa-fw fa-instagram"></i></a>
              <a href="https://open.spotify.com/user/sira_kento" target="_blank" rel="noopener" id="spotify"><i class="fab fa-fw fa-spotify"></i></a>
            </p>
          </div>
        </div>
      </div>

      <!-- About -->
      <div class="row mt-2">
        <div class="col-md-6">

          <!-- Overview -->
          <section class="bg-dark rounded shadow">
            <article>

              <p class="lead mb-2 border-bottom">Overview</p>
              <p><ruby>Novalumo<rt>ノバルーモ</rt></ruby>合同会社 最高経営責任者(CEO)。</p>
              <p>
              映像制作、デザイン、エンジニアリング、ICT講師など幅広い分野で活動しているマルチクリエイター。岩手県大船渡市在住。
              </p>

              <p class="lead mt-3 mb-2 border-bottom">Hobby</p>
              <p>動画・音楽メディア鑑賞、ゲーム、ものづくり、語学など</p>

              <p class="lead mt-3 mb-2 border-bottom">Language</p>
              <p>日本語, English, Deutsch, Français, Italiano, Español, <a href="https://ja.wikipedia.org/wiki/%E3%82%A8%E3%82%B9%E3%83%9A%E3%83%A9%E3%83%B3%E3%83%88" target="_blank" rel="noopener">Esperanto</a>, <a href="https://ja.wikipedia.org/wiki/%E3%82%B1%E3%82%BB%E3%83%B3%E8%AA%9E" target="_blank" rel="noopener" class="unicode">keseng̃ó</a></p>

              <p class="lead mt-3 mb-2 border-bottom">Programing Language</p>
              <dl>
                <dt>Web:</dt>
                <dd>HTML, CSS, JavaScript, PHP, Ruby, SQL</dd>
                <dt>App:</dt>
                <dd>C#, Visual Basic</dd>
                <dt>Data:</dt>
                <dd>Python</dd>
              </dl>

              <p class="lead mt-3 mb-2 border-bottom">Main Computer</p>
              <dl>
                <dt>PC:</dt>
                <dd class="m-0">MacBook Air (Early 2014, Core i7, 8GB RAM)</dd>
                <dd>Mac mini (M1, 2020, 16GB RAM)</dd>
                <dt>Phone:</dt>
                <dd>iPhone XR 128GB</dd>
                <dt>Tablet</dt>
                <dd>iPad Air 4th-Gen 64GB with Apple Pencil</dd>
              </dl>

            </article>
          </section>

        </div>

        <div class="col-md-6 mt-3 mt-md-0">

          <!-- Biography -->
          <section class="bg-dark rounded shadow">
            <article>

              <p class="lead mb-3 border-bottom">Biography</p>
              <dl>
                <dt>2002年4月11日</dt>
                <dd>岩手県大船渡市に生まれる</dd>
                <dt>2020年4月12日</dt>
                <dd>カトリックの洗礼を受ける（洗礼名：フランシスコ）</dd>
                <dt>2020年4月30日</dt>
                <dd><ruby>Novalumo<rt>ノバルーモ</rt></ruby>合同会社を設立</dd>
                <div class="d-none">
                  <dt>2020年6月</dt>
                  <dd>大船渡高校を中退</dd>
                </div>
                
              </dl>

            </article>
          </section>

        </div>

      </div>

  </div>
</template>

<script>
export default {}
</script>

<style>
section {
  padding: 18px;
  opacity: .8;
}

article p {
  margin: 0;
}

article a {
  color: #118cff;
}

summary {
  outline: none;
  user-select: none;
}

/* Links */
.links {
  background: #eee;
  padding: .2em 1em;
  display: inline-block;
  border-radius: .25rem;
  user-select: none;
}
#youtube {
  color: #ff0000;
}
#twitter {
  color: #55acee;
}
#facebook {
  color: #315096;
}
#instagram {
  background: -webkit-linear-gradient(0deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d, #f56040, #f77737, #fcaf45, #ffdc80);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
#spotify {
  color: #2bb24c;
}
</style>
