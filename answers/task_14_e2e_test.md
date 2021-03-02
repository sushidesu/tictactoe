# E2Eテストを書こう

## 実装

### 実行コマンド

ルートディレクトリにて、

```sh
yarn install
yarn test:integration:open
```

を実行すると、`yarn start` と `yarn cypreess open` が同時に実行され、Cypressが立ち上がります。

### その他やったこと

- [実用的なフロントエンドのテスト戦略（3） | TOAST Meetup](https://meetup-jp.toast.com/1771#Jestvs_E2ECypress)
- tsファイルにしたらjestと競合した
  - [フロントエンドのTDD作業 / 調査ログ](https://zenn.dev/kazuhe/scraps/5b75cb58e1d2cc#comment-6bfa4735a562f3)
  - [Cypress - TypeScript Deep Dive 日本語版](https://typescript-jp.gitbook.io/deep-dive/intro-1/cypress)
  - この辺りを参考にe2eディレクトリに分離した
- yarn startした後に別ターミナルでcypress動かすのが面倒
  - concurrentlyを使ってyarn start と yarn cypress:run を同時に実行できるようにした
- どうやってdomを指定するか
  - [なぜE2Eテストでidを使うべきではないのか | Autify Blog](https://blog.autify.com/ja/why-id-should-not-be-used)
  - [idやclassを使ってテストを書くのは、もはやアンチパターンである - Qiita](https://qiita.com/akameco/items/519f7e4d5442b2a9d2da)
  - `data-testid` 属性を追加した
- yarn test するとcypressのtestまで動いてしまう
  - [Configuring Jest · Jest](https://jestjs.io/docs/en/configuration#testpathignorepatterns-arraystring)
  - [Jestで特定ディレクトリをignore - Qiita](https://qiita.com/sayama0402/items/3fe6931c14e72e933174)
  - `testPathIgnorePatterns: ["e2e"] とした`

## 質問

### 1

- メリット
  - ユニットテスト、スナップショットでは検出されない、未知の不具合を検出できる
  - よりユーザーに近い環境でテストできる
- デメリット
  - 実行に時間がかかる
  - 原因の特定が難しい
  - 不安定で壊れやすい
    - [E2Eテストの導入から学んだこと - Qiita](https://qiita.com/mt0m/items/7e18d8802843d9f60d28)

### 2

そもそもの疑問

```md
統合テストとE2Eテストは同じ？別？
```

-> 違いそう

> E2E tests help verify high-value paths in your application. In other words, they help verify user stories as they often represent flows in your application.
> Integration tests help verify the integration of multiple functions or components. Integration tests can tell you if your code works cohesively with other functions.
> Unit tests help verify the business logic of functions. Unit tests are the most basic form of testing, and they ensure the business logic is correct.
> Lastly, we can’t forget about static analysis or static testing. Static testing helps find typos or type errors.
>
> [E2E Testing: A Tutorial and Architectural Guide - Testim Blog](https://www.testim.io/blog/e2e-testing)

> 統合テスト (英: integration testing)は、個々のソフトウェアモジュールを組み合わせて集合体としてテストするソフトウェアテストのフェーズである。
>
> [統合テスト - Wikipedia](https://ja.wikipedia.org/wiki/%E7%B5%B1%E5%90%88%E3%83%86%E3%82%B9%E3%83%88)

```md
スナップショットテスト、ビジュアルリグレッションテストは 単体、統合、E2Eのどれに当てはまる？
```

統合テスト？ (単体とE2Eの間のイメージ)。でも 統合テスト === スナップ・ビジュアルテスト ではなさそう。

なので、以下の想定で回答しています。

- 単体: 単体テスト -> 単体テストを書こうでやったテスト
- 統合: 統合テスト -> 複数の関数・クラス・コンポーネントを組み合わせるテスト
- ST/VRT: スナップショットテストとビジュアルリグレッションテスト (項目が多くなってしまうのでまとめた)
- E2E: E2Eテスト -> Cypressを使ったテスト

---

- テストの実行スピード (早い順)
  - 単体 > 統合 > ST/VRT > E2E
  - 細かくテストを回していく場合 (TDD？)は、単体テストを用いる
- ロジックに関するテスト
  - 単体 > E2E > 統合 > ST/VRT
  - 単体テストは処理の内容を細かくテストできる
  - 反対に、ST/VRTは処理の内容まではテストできない
- 見た目/描画に関するテスト
  - ST/VRT > E2E > 統合, 単体
  - ST/VRTを組み合わせることで、スタイルの変更・DOM構造の変更など細かくテストできる
- デバッグがしやすいテスト
  - 単体 > 統合 > ST/VRT > E2E
  - 単体テストは一番細かい単位でテストが可能
  - CLIに出力される情報が豊富
  - E2Eは、全てを組み合わせてテストするため、原因箇所の特定がしづらい場合がある
- テストの書きやすさ (書きやすい順)
  - ST/VRT > E2E > 単体, 統合
  - ST/VRTは前後比較するだけなので、そもそもテストコードを書かなくていい
  - 単体・統合テストは適切なテストケース等を考慮する必要がある
  - モックが必要な場合もある
  - E2Eはテストケースを考慮する必要はあるものの、実際のアプリの動作を模して書ける
  - モックは不要
- 実際のユーザーの動作への近さ (近い順)
  - E2E > ST/VRT, 統合 > 単体

[E2Eテスト(インテグレーションテスト)の利点と不利点 - Qiita](https://qiita.com/NAKKA-K/items/58d6b8476a3717179bda#e2e%E3%81%AE%E4%BD%BF%E3%81%84%E6%89%80)

## クイズ

### クイズ1

CypressのアサーションにはJestとは違うものが用いられています。何が使われていますか？

<details><summary>回答例</summary>

Chaiをベースに、Sinon-ChaiとChai-jQueryで拡張したものが使われている。

> Cypress bundles the popular Chai assertion library, as well as helpful extensions for Sinon and jQuery, bringing you dozens of powerful assertions for free.
>
> [Assertions | Cypress Documentation](https://docs.cypress.io/guides/references/assertions.html#Chai)

### JestとChaiの違い

- Jest -> テストライブラリ (アサーション、モック機能、スナップショットテスト機能など全部入りのライブラリ)
- Chai -> アサーションライブラリ (テストライブラリである Mocha と組み合わせて使う)
- Mocha -> 柔軟なテストライブラリ。アサーションやモック機能にどのライブラリを使用するのかを自由に選択可能

[Jest vs Mocha: Which Should You Choose? | by Katia Wheeler | Noteworthy - The Journal Blog](https://blog.usejournal.com/jest-vs-mocha-whats-the-difference-235df75ffdf3)

### Sinon-Chai

Chaiにスタブ、モックのためのカスタムアサーションを追加する拡張

> Sinon–Chai provides a set of custom assertions for using the Sinon.JS spy, stub, and mocking framework with the Chai assertion library. You get all the benefits of Chai with all the powerful tools of Sinon.JS.
>
> [domenic/sinon-chai: Extends Chai with assertions for the Sinon.JS mocking framework.](https://github.com/domenic/sinon-chai)

### chai-jquery

ChaiにjQuery固有のアサーションを追加する拡張

```js
to.have.class("hoge") // とか
to.have.text("hoge") // とか
```

> chai-jquery is an extension to the chai assertion library that provides a set of jQuery-specific assertions.
>
> [chaijs/chai-jquery: jQuery assertions for chai](https://github.com/chaijs/chai-jquery)
</details>

### クイズ2

`<div id="example">praha</div>` が `praha` というテキストを持っていることを確認するアサーションを二種類の方法で記述してください。

<details><summary>回答例</summary>

```js
// should(chainers, value) を使用
cy.get("#example").should("have.text", "praha")

// should(callbackFn) を使用
cy.get("#example").should((element) => {
  expect(element.first()).to.contain("praha")
})
```

- [実装してみたコード](../e2e/cypress/integration/basic.spec.ts)
- 参考: [should | Cypress Documentation](https://docs.cypress.io/api/commands/should.html#Syntax)
</details>

### クイズ3

Cypressのfixtureとはどのような機能ですか？ (= fixturesディレクトリはどのような時に使いますか？)

<details><summary>回答例</summary>

テストの時に外部データを呼び出す機能。fixturesディレクトリに配置したファイルを `cy.fixture(filePath)` の形式で読み込むことができる。

参考: [fixture | Cypress Documentation](https://docs.cypress.io/api/commands/fixture.html#Syntax)
</details>
