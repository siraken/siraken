---
title: ブログのビルドをGitHub Actionsでやってみる
description: どうしても「7ドル問題」を回避したい。
date: 2020-12-14
draft: false
---

<span class="text-danger">※この記事は過去に作成したブログについての記事です。一部、公開時と内容が変わっている部分があります。</span>

どうも白澤です。このような形でブログを再開して1ヶ月くらい経ったのかな？全く更新してませんでした、ごめんなさい。。。

なんでこのタイミングで記事を書いているかというと、「Twitter等SNSが前に比べてあまり好きではなくなった」こと、「管理にお金をかけたくなくて、とあることをした」のが理由です。今回の記事は後者の話をしたいと思います。前者の話はプログラミングとかあまり関係ないので後日また他の記事で。

では本題。このブログはNetlify（ネットリファイ？）というサービスでホスティングしてます。先日とある記事を読んでいると少し気になる文章がありました。それは、Netlifyのビルド時間には無料枠が設けられていて、それを超過すると課金されるらしい。若干違うかもですが大雑把に言うと、です。

なんか無意識のうちにビルド時間が増えていって突然「7ドル請求するで〜」なーんて言われるのはマジでゴメンです。それを回避するためにどうすれば良いかを調べた結果がこの記事になります。

結論から言うと「GitHub Actionsを使う」と良いっぽいです。標準ではGitHubアカウント、リポジトリとNetlifyで連携して、コミットされたらそれを感知して「Netlify側が」ビルドをしていたのですが、それをGitHub側でやってしまおうというもの。Actions使ったことなかったのでよくわからないまま始めました。

---

参考にしたサイト：

[Gatsby でも Netlify に Github Actions でビルドしたコードをデプロイしたい。](https://dotgirl.net/2020/03/01/gatsby-netlify-github-actions/)

---

まずはGitHubのレポジトリページにあるActionsという再生ボタンみたいなアイコンのあるタブをクリック。

![GitHub Actionsタブ](/blog/2020/build-blog-1.png)

その後出てきたページの「set up a workflow yourself」をクリック。

![Skip this and set up a workflow yourself](/blog/2020/build-blog-2.png)

するとyml形式のファイルを作成する画面になるので、参考サイトに記載されていたものをコピペ。自分の場合ファイル名は参考サイトに倣ってbuild.ymlにしましたが、名前はなんでも良いと思います。以下はほぼコピペですがブランチを自分の環境に合わせてmasterからmainにしています。細かいことはまだよく分かってません。。。

```yml
name: Build Gatsby and deploy to Netlify

on:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v1
      - uses: actions/setup-node@v1
        with:
          node-version: '12.x'
      - run: npm ci
      - run: npm run build
        # ここで必要であればビルドに必要な環境変数を渡す
        # env:
        #   SOMETHING: foo
        #   SECRET_KEY: ${{ secrets.SECRET_KEY }}
      - uses: netlify/actions/cli@master
        env:
          NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
          NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
        with:
          args: deploy --dir=public --prod
          secrets: '["NETLIFY_AUTH_TOKEN", "NETLIFY_SITE_ID"]'
```

一番下の行にある `NETLIFY_AUTH_TOKEN` と `NETLIFY_SITE_ID` はそれぞれNetlifyからデータを持ってきます。

トークンは[Netlifyのユーザー設定ページのApplications](https://app.netlify.com/user/applications)からPersonal access tokensで発行できます。サイトIDはサイト情報のAPI IDです。

GitHubにはSecretsの機能があるらしく、リポジトリの設定から `Secrets` でシークレットな定数的なものを定義できる？みたいです。これもよく分かってないですが。URLは `https://github.com/ユーザー名/リポジトリ名/settings/secrets/actions` です。

build.ymlの `NETLIFY_AUTH_TOKEN` と `NETLIFY_SITE_ID` をGitHubのSecretsから持ってくる感じ。こんなことできるんですね、勉強になります。。。

そして重要なんですが、Netlify側の自動ビルド機能をオフにしておきましょう。それでリポジトリにコミットされるとGitHub Actionsが動いてビルドしてくれます。こんなもんで良いんじゃないでしょうか。

以上、備忘録程度ですがActionsを使ってみた記録でした。CI的なもの触るのは初めてだったのでもう少し覚えて有効活用できたら良いななんて思ってます。

冒頭で書いたSNSがどうたらこうたらっていうのは、多分次の記事とかで書くと思います。ではでは。