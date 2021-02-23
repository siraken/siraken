---

title: Ajaxをやっと使えるようになった話。

image: 2020/cover/using-ajax.jpg
date: 2020-11-11
draft: false
description: Ajaxのことを「あじゃっくす」だと思ってたのは内緒。
---

最近お仕事では特に[CakePHP](https://cakephp.org/)をよく使っている白澤です。

今回はこの頃仕事で必要になった技術「Ajax（エイジャックス）」のお話をちょっと。

Ajaxとは「Asynchronous JavaScript + XML」の略で、非同期通信ってやつだそうです。
色々調べてみて、よく例で挙げられているのはGoogle Mapsですかね。
地図上を移動するたびに非同期通信をやってるってことなのかな。

Ajaxは基本的にjQueryなんかを使って実装するみたいで、早速使ってみました。

```javascript
$.ajax({
    type: 'POST',
    datatype:'json',
    url: 'theUrl',
    data: {
        text: txt
    },
    success: function(data, dataType)
    {
        console.log('Success!');
        
    },
    error: function(XMLHttpRequest, textStatus, errorThrown)
    {
        console.log('Error : ' + errorThrown);
    }
});
```

他の会社さんと共同で仕事してる（提携してる）ので、具体的な部分は削りましたがこんな感じ。

Ajaxの存在自体は知ってたんですが、なんか難しそうという理由だけで全く触ってこなかったんですよ。
でも実際に触ってみると結構簡単なもので。

```javascript
type: 'POST',
datatype:'json',
url: 'theUrl',
data: {
    text: txt
},
```

この部分の理解ができれば、もうあとは良い気がする。

`type` は書いてるままで `POST` やら何やら。 `datatype` はJSONのほかにもXMLとかが使えるらしい。使ったことないけど。

`url` は多分 `<form>` でいう `action` にあたるのかな？データを渡す相手ですね。

`data` で送信するデータを書いてあげるんですね。ここには複数書けて、配列としてデータが飛んでく感じかな。
PHPの値をJavaScriptの変数に代入するのは簡単で、以下のようにすればできるけど

```javascript
let text = '<?php echo $text_from_php;?>';
```

逆にJavaScriptからPHPにデータを送りたい時はAjaxを使うことで実現できる感じですね。

まぁ今までAjaxがどういうものかを理解できなかったのも当然かもしれないなぁ。
データベースにデータを登録する方法を割と最近知ったくらいだからね。

この3ヶ月くらいで今までよりもかなりプログラミングだったりネットワーク関連の理解が深まった気はする。
やっぱりプログラミング学習系は最小限にとどめて、あとは実務で身につけていくものなんだなと改めて実感。

仕事の幅も結構広がってきたし、そろそろ新しいことも学びたいかな。
PHPはCakePHPとかLaravelで色々こなしてるうちに何となくわかってきたけど、
Node.jsの仕組みはよくわかってないからやってみたいなぁ。理解するまで何年かかるだろｗ

---

そういえば今日から正式にブログを開始します。ホスティングはNetlifyでやってみました。
今更感は否めないものの実はNetlify使うのは初めて。このために `siraken.net` のドメインも再取得しました。
期限切らしちゃってexpiredになっちゃってました。

NetlifyはGitHubと連携することができてホストするリポジトリの公開ディレクトリを設定できて、
GitをPushすると、Gatsbyだと `gatsby build` を自動で実行してくれるんですね。こりゃ便利だ。すげぇや。

何だかんだで今週は色々と体験できたんじゃないかなと思います（まだ水曜日ですけど）。

それでは記事の文章量も結構多くなってきたところで締めたいと思います。ではでは〜。

> 最近はYOASOBIのコンポーザーでもあるAyaseさんの「[幽霊東京](https://open.spotify.com/track/09g6tcsYVICBqWiOKo856z?si=mPvtSB43TWKeX5RUlGOOug)」を聴きながらコーディングするのが好きです。なんかオシャレですよね。ミクさんの調教が個人的にすごく好みだし、Ayaseさんのセルフカバー版も最高です...。