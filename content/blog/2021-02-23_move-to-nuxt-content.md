---
title: 結局GatsbyJSからNuxt Contentに移動した件。
description: Reactに馴染めなかったというか、Vueが好きだった。
date: 2021-02-23
draft: false
---

どうも白澤です。

少し前に書いた記事で、React製の静的サイトジェネレーター「GatsbyJS」でブログを書くよーみたいなことを言って少しの間運用してました。Netlifyを初めて使ってホスティングしてみたり色々試したりもしてました。でもやっぱダメでした。**Reactがどうも自分に馴染まない。**

それで結局Vue製であるこの「Nuxt Content」にしたわけですが、なんでこうなっちゃったかについてお話しします。

# Nuxt.jsに辿り着くまで...

今現在のNovalumoのコーポレートサイトは、Nuxt.jsで実装してあります。これにはちょっとした訳がありまして。

元々コーポレートサイトはHTMLベタうちで作ってました。勘の鋭い方はわかるかもしれないですが、この作り方で作ると「共通部分などを変更した際に全ページを手作業で修正する」必要があります。ページ数が少しならまだ許せますが、増えれば増えるほど大問題です。

それで色々と探して見つけたのが「EJS」でした。

## EJSでサイト作成してみる

EJSはどこで知ったかというと、多分Progateだったと思います。Node.jsのコースでサイトを作る際に使った気がして、自分も使ってみようと思いました。が、Progateというのは初心者に超絶やさしいので、パッケージをすでにインストール済みであったり、設定ファイルをいじる必要がなかったりと、逆に「はじめかたがわからない」状態でスタート。

EJSの文法に関してはProgateで勉強したこともあって困ることはなかったんですが、詰まったのは `gulpfile.js` の扱い。パスとかの問題が多発して挫折しそうになりながらもなんとか静的サイトを生成できました。EJSのコードはこんな感じ。

```ejs
<%- include('./components/_h_header', { title: title, description: description, path: path, page: page, lang: lang }) %>
<%- include('./components/_header', { path: path }) %>

<h1>Hello, world</h1>

<%- include('./components/_footer', { path: path }) %>
<%- include('./components/_h_footer', { path: path }) %>
```

`gulpfile.js` はこんな感じ。

```javascript
let gulp    = require('gulp');
let rename  = require('gulp-rename');
let ejs     = require('gulp-ejs');
let replace = require('gulp-replace');

gulp.task('ejs', (done) => {

  gulp
    .src(['ejs/**/*.ejs', '!' + 'ejs/**/_*.ejs'])
    .pipe(ejs({}, {}, {ext:'.html'}))
    .pipe(rename({ extname: '.html' }))
    .pipe(gulp.dest('./public'));
  done();

});
```

## Nuxt.jsに目を付ける

EJSで良い感じにできたので満足してたんですが、ある日「Vue使いたいな」という願望が生まれます。それでVueで作ってみたものの、コンポーネント使うときにimport, exportとかの処理が面倒で嫌になって、ネットをまた探し回って見つけたのが「Nuxt.js」でした。

<span class="text-danger">似た名前に「Next.js」ってありますが、あれは確かReact系だった気がするので使いこなせない気がする。</span>

Nuxtっていう名前だけは聞いたことあったので、公式ドキュメントを参考にして、最初にこのサイト（[SiraKen.NET](siraken.net)）をNuxt化することからはじめました。ある程度試してみて結構良かったので、今のコーポレートサイトにも使ってます。

## Nuxt.jsの印象

一言で言うと、 **最高に使いやすいです。** コンポーネントの扱いが非常に楽。頭の悪い自分にも、`layouts` とか `pages` って言うふうにディレクトリが分かれていて理解しやすい構造だったので助かりました。あと、公式ドキュメントが結構日本語に対応してたので、脳内翻訳にリソースを割くことなくコーディングに集中できました。

**というかそもそもVueがわかりやすい。**

サイトのアクセス速度というかページ遷移も速くなった気がします。

# Nuxt Contentにブログを移行する

ここから本編です。（前置き長っ。）

最終的にSiraKen.NETの内部にブログを統合することにしました。Nuxtでプロジェクトを作成する段階でContentをインストールするオプションは選べたんですが、もちろん後からでも追加できます。

## インストール

公式ドキュメント通りにインストールします。

```bash
yarn add @nuxt/content
```

```javascript
{
  modules: [
    '@nuxt/content' // 追加
  ],
  content: {
    // Options
  }
}
```

## 使い方

まずは `content/` というディレクトリを作成します。今回は `content/blog` の下にマークダウンを設置することにしました。

![ディレクトリ配置](/blog/2021/move-to-nuxt-content.png)

あとはそれぞれの場所でデータを取得するだけですが、これが若干難しかったです。

### ページをリストで表示(index)

`pages/blog/index.vue` の `script` に以下のように記述しました。

```javascript
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
```

これが難しいと感じるかは人それぞれだと思いますが、少なくとも自分はJavaScriptで `async` とかは書いたことがないのでよくわかってないです。。。

### 個別の記事を表示(slug)

`pages/blog/_slug_.vue` を新たに作成して、 `script` に以下のように記述しました。

```javascript
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
```

細かいところは端折りましたが、こうするだけである程度のものができます。記事はマークダウンを移動して引っ越ししました。パス直すの大変だったけど。

# まとめ

上記の手順でこのようにブログを移行してみましたが、思ったより簡単でした。よりVueが好きになったと同時に、やっぱりReactも使えたほうがいいよね、と複雑な気分になる白澤でした。