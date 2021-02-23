---
title: GitHub OrganizationでVerifyする
description: 認証マークついてると如何にもそれですよね（何が）
date: 2020-05-14
image: 2020/cover/setup_gh.png
draft: false
---

GitHubのOrganizationアカウントといえば、認証マークがついてますよね。

![img1](/blog/2020/cover/setup_gh.png)

緑色のVerifiedバッジ。この“Verified”を付与してもらうには「ドメインの検証」を行う必要があります。詳しくは以下のページを参照。

[Organization のドメインを検証する](https://docs.github.com/ja/free-pro-team@latest/github/setting-up-and-managing-organizations-and-teams/verifying-your-organizations-domain)

作業を大雑把に説明すると、ドメインの所有を確認するためにDNS設定のTXTレコードに指定された値をセットするというもの。 

一度ドメインの検証をしてみたところ、なぜかVerifiedが付きませんでした。どうにか解決すべく色々な部分をチェックすると気になる点が。

![img2](/blog/2020/setup_gh_2.png)

GoogleのGitHub Orgページを見ると、opensource.googleとgoogle.comのドメイン2つが検証済みに。

![img3](/blog/2020/setup_gh_3.png)

www.novalumo.llcのみ検証済みだったものを、www無しも認証してみるとVerifiedになりました。

![img4](/blog/2020/setup_gh_4.png)

設定されているWebサイトのURL、メールアドレスのドメインを確認する必要があるようです。両方のドメインを登録するとGitHubから確認のメールも届き、これで完了です。