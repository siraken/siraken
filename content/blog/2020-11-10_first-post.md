---
title: GatsbyJSを試す。
description: GatsbyJS(静的サイトジェネレーター)を使ってブログを作ってみた。
date: 2020-11-10
image: 2020/cover/first-post.jpg
image_alt: eyecatch alter
draft: false
---

<span class="text-danger">※この記事は過去に作成したブログについての記事です。一部、公開時と内容が変わっている部分があります。</span>

**Gatsbyでブログを作ってみました！**

## きっかけ

色んなブログを使ってきた中で最近は特に記事も書かず、メインのサービスも決まっていなかったので、
新たに再スタートをして、色々なことをアウトプットをすることにしました。

ブログを新たに始める上で考えていたことは以下です。

1. なるべくランニングコストを抑えたい（サーバー契約とかは無しが良い）
2. マークダウンで執筆したい
3. ブログを管理・執筆しながら技術を学べると最高
4. ブログサービスに依存せずに静的Webサイトとして公開したい

これを元に調べてみるとJavaScriptフレームワーク（静的サイトジェネレーター系）が良さげという判断に。
GitHub PagesといえばJekyllが有名ですが、
その他にも調べてみると[Gatsby](https://www.gatsbyjs.com/)で実現できそうだということが判明。

実は以前にもGatsbyを使ってサイト構築にチャレンジしてみたことはあるんですが、
自分がまだしっかり覚えていなくて苦手としているReactベースだったので断念していました。

「一応」フルスタックエンジニア目指してる人間が流石にこれではヤバいんじゃ無いかと。
それで再チャレンジしてみることにしたんです。

## ブログ構築

早速Gatsbyを使ってブログを構築。
テーマは[gatsby-casper](https://www.gatsbyjs.com/starters/scttcper/gatsby-casper)を使わせていただきました！

```
cd Desktop
gatsby new blog https://github.com/scttcper/gatsby-casper
cd blog
gatsby develop
```

生成されたのは以下のファイル群。

```
node_modules/
public/
src/
LICENSE
yarn.lock
gatsby-config.js
gatsby-node.js
package-lock.json
package.json
tsconfig.json
README.md
```

基本的にいじるのは `src` 以下でこのようになっています。

```
components/
content/
layouts/
pages/
styles/
templates/
typings.d.ts
website-config.ts
favicon.ico
```

拡張子が `.ts` だったり `.tsx` で明らかにTypeScriptなんですよね。実はTypeScriptでコーディングしたことがほとんどなくて、Progateで軽くかじった程度です。おまけにReactの書き方なんですよ、わからん。

テーマの特性上、というかどれも同じですけど英語に最適化されているので若干CSSを変えてやる必要がありましたが、
JavaScriptフレームワークとかはjQueryだのVue.jsしか触ったことないのでどこに何があるのかさっぱりでしたね。
慣れが必要かも。

幸いそれぞれのファイル名がわかりやすくなっていたので、ファイル内の比較的後半あたりでCSSを書いている場所があったのでそこを編集するとうまくいきました。でも `<style>` タグじゃないんですね。。。

```typescript
const PostCardImageLink = css`
  position: relative;
  display: block;
  overflow: hidden;
  border-radius: 5px 5px 0 0;
`;
```

こんな感じ。Vueだと普通に `<style>` で書いてたのでもうカルチャーショックです。
でもやっぱり**慣れ**ですね。もうとにかく頑張るしかないです。

## 書き心地

ブログはマークダウン `.md` で書くことになりますが、かなり書きやすいです。何が良いかってシンプルですよね。

静的サイトといえばHTMLなのでいちいち見出しを作るときに `<h1>` とか書いてたんですが、MDだと `#`だけ。もうこれ革命です。

## まとめ

個人的には結構クセがすごいなと思いました、というかReactに慣れていないだけかもしれません。あまり触る機会はないかもしれないですが、できれば使いこなせると最高な気がします。。。