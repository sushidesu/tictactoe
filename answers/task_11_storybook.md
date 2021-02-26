# storybookを作ろう

## 1 (実装)

実行コマンド

```sh
yarn
yarn start
```

`localhost:3000` から確認できます。

## 2 (storyの作成)

実行コマンド

```sh
yarn
yarn storybook
```

`localhost:6006` から確認できます。

## 3 (質問)

- メリット
  - アプリの外部で個別のコンポーネントを作成できる
  - コンポーネント同士の結合度が下がる・依存関係が明確になる
    - 個々のコンポーネントが独立して動作できるように意識して作る必要があった。
    - `Game` コンポーネントのストーリーを作るときに、適切なPropsを受け取るよう修正する必要があった。
  - コンポーネントの整理ができる
  - コンポーネントのテイストを統一しやすい
  - ドキュメント・スタイルガイドになる
  - テストがしやすくなる
- デメリット
  - 運用が大変そう
    - コンポーネントごとにストーリーを作る手間
    - コンポーネントの仕様が変わったら、ストーリーを更新しなければいけない手間

参考

- [Introduction to Storybook](https://storybook.js.org/docs/react/get-started/introduction)
- [Why You Should Always Use Storybook When Developing User Interfaces | by Tyler Hawkins | Level Up Coding](https://levelup.gitconnected.com/why-you-should-always-use-storybook-when-developing-user-interfaces-4c69b93b2f65)


## 4 (クイズ)

### クイズ1

各ストーリーにグローバルスタイルを適用するにはどのようにすれば良いでしょうか？

<details><summary>回答例</summary>

#### CSS-in-JSの場合

global decorator を使う

```
// .storybook/preview.js

import React from 'react';

export const decorators = [(Story) => <div style={{ margin: '3em' }}><Story/></div>];
```

#### CSSの場合

`.storybook/preview.js` でCSSをインポートする

[Styling and CSS](https://storybook.js.org/docs/react/configure/styling-and-css)
</details>

### クイズ2

addon-actionsは何のために使用しますか？

<details><summary>回答例</summary>

ストーリー内のイベントハンドラーによって受信されたデータを表示するために使用する。

使用方法

- `action()` 関数をイベントハンドラーに渡す
- `Meta.argTypes` に追跡したい関数名を記載する
- `Meta.parameters: { actions: { argTypesRegex: '^on.*' } }` 等で一括で指定する

参考

- [Actions](https://storybook.js.org/docs/react/essentials/actions)
- [[アドオン編] Actions addon｜Vue と CSF によるモダンな Storybook 6 のはじめかた](https://zenn.dev/sa2knight/books/aca5d5e021dd10262bb9/viewer/747ec7)
</details>

### クイズ3

Meta (storiesでdefault export するオブジェクト) の subcomponents プロパティはどんなときに使用しますか？

<details><summary>回答例</summary>

2つ以上のコンポーネントが連携して機能するように設計されている場合に、それらを一度にレンダリングするストーリーを作成するときに使用する。

[Stories for multiple components](https://storybook.js.org/docs/react/workflows/stories-for-multiple-components)
</details>
