# aurelia-skeleton-navigation-gulp-typescript

This is a TypeScript implementation of navigation skeleton of the [Aurelia](http://www.aurelia.io/) platform. It sets up a standard navigation-style app using gulp to compile your TypeScript code with [gulp-typescript plugin](https://www.npmjs.com/package/gulp-typescript). Karma/Jasmine testing is also configured.

This repository does not require Visual Studio to run.

> To keep up to date on [Aurelia](http://www.aurelia.io/), please visit and subscribe to [the official blog](http://blog.durandal.io/). If you have questions, we invite you to join us on [our Gitter Channel](https://gitter.im/aurelia/discuss).

## Notes regarding conversion of original skeleton application from ES6 to TypeScript

1. Structure of folders was changed in order to let TypeScript compiler, System.js and Karma runner to reference all files correctly.
2. All dependencies to Babel were removed, instead [gulp-typescript plugin](https://www.npmjs.com/package/gulp-typescript) is used.
3. `/// <reference path="../../dts/aurelia.d.ts" />` reference are added to support intellisense for certain IDEs and editors. They are actually not required to for successful compilation.
4. Original skeleton navigation [extends](https://github.com/aurelia/skeleton-navigation/blob/master/aurelia.protractor.js) Protractor / WebDriver, so we have added appropriate d.ts file to cover this extended functionality (dts/aurelia-protractor.d.ts).
5. `gulp tdd` task was updated to enable watching and recompiling of both main and test sources and re-running karma when a change occurs. Note: you will need to use `gulp tdd` command instead of `karma start` if you want your TypeScript files to be watched.
6. `gulp e2e` command was also updated to include TypeScript compilation step (of only e2e test sources).

## Running The App

To run the app, follow these steps.

1. Ensure that [NodeJS](http://nodejs.org/) is installed. This provides the platform on which the build tooling runs.
2. From the project folder, execute the following command:

  ```shell
  npm install
  ```
3. Ensure that [Gulp](http://gulpjs.com/) is installed. If you need to install it, use the following command:

  ```shell
  npm install -g gulp
  ```
4. Ensure that [jspm](http://jspm.io/) is installed. If you need to install it, use the following command:

  ```shell
  npm install -g jspm
  ```
  > **Note:** jspm queries GitHub to install semver packages, but GitHub has a rate limit on anonymous API requests. It is advised that you configure jspm with your GitHub credentials in order to avoid problems. You can do this by executing `jspm endpoint config github` and following the prompts.
5. Install the client-side dependencies with jspm:

  ```shell
  jspm install -y
  ```
  >**Note:** Windows users, if you experience an error of "unknown command unzip" you can solve this problem by doing `npm install -g unzip` and then re-running `jspm install`.
6. To run the app, execute the following command:

  ```shell
  gulp watch
  ```
7. Browse to [http://localhost:9000](http://localhost:9000) to see the app. You can make changes in the code found under `src` and the browser should auto-refresh itself as you save files.

> Note: At present there is a bug in the HTMLImports polyfill which only occurs on IE. We have submitted a pull request to the team with the fix. In the mean time, if you want to test on IE, you can work around the issue by explicitly adding a script tag before you load system.js. The script tag should look something like this (be sure to confirm the version number):

```html
<script src="jspm_packages/github/webcomponents/webcomponentsjs@0.5.2/HTMLImports.js"></script>
```

## Running The Unit Tests

To run the unit tests, first ensure that you have followed the steps above in order to install all dependencies and successfully build the library. Once you have done that, proceed with these additional steps:

1. Install Aurelia libs for test visibility:

```shell
jspm install aurelia-framework
jspm install aurelia-http-client
jspm install aurelia-router
```
2. You can now run the tests once with this command. This command does TypeScript sources compilation (both main and test) and executes tests. The test commands are set up with Gulp in mind, so it is not required to have global installation of Karma:

  ```shell
  gulp test
  ```
  Or if you want to do it TDD style use the following command. This command watches both main and test sources for change and when it detects one it automatically recompiles sources and runs tests again.

  ```shell
  gulp tdd
  ```

## Running The E2E Tests

Integration tests are performed with [Protractor](http://angular.github.io/protractor/#/).

1. Place your E2E-Tests into the folder ```src/test/e2e```
2. Install the necessary webdriver

  ```shell
  gulp webdriver_update
  ```

3. Configure the path to the webdriver by opening the file ```protractor.conf.js``` and adjusting the ```seleniumServerJar``` property. Typically its only needed to adjust the version number.

4. Run the E2E-Tests

  ```shell
  gulp e2e
  ```

# 日本語バージョン

このリポジトリは、TypeScriptで実装された [Aurelia](http://www.aurelia.io/) プラットフォームの基礎のナビゲーションサンプルです。[gulp-typescript プラグイン](https://www.npmjs.com/package/gulp-typescript)を利用して、TypeScriptソースをコンパイルするgulpタスクが設定してあります。Karma/Jasmineによるunit testタスクやProtractorによるe2e testタスクも設定してあります。

このリポジトリのコードはVisual Studioに依存していません。

> [Aurelia](http://www.aurelia.io/)の最新情報は、 [オフィシャルブログ](http://blog.duderandal.io/)までお願いします。質問等があれば、専用の[Gitterチャンネル](https://gitter.im/aurelia/discuss) でお訪ねください。

## ES6からTypeScriptへの変換に関するメモ

1. TypeScriptのコンパイラやSystem.jsやKarmaがファイルを正しく参照できるために、ディレクトリ構成が変更されている。
2. Babelの依存個所は全てなくなっている。
3. コンパイルに必要はないが、色々なIDEやエディターでintellisenseが有効になるために、`/// <reference path="../../dts/aurelia.d.ts" />` を追加している。
4. もともとのサンプルはProtractor / WebDriverの機能を[拡張している](https://github.com/aurelia/skeleton-navigation/blob/master/aurelia.protractor.js) ので、コンパイルエラーにならないようにd.ts(dts/aurelia-protractor.d.ts)が追加されている。
5. `gulp tdd`タスクがTypescriptのメインとテストのソースを監視し、変更があったときに再コンパイルし、テストが実施されるように対応してある。
6. `gulp e2e`タスクもe2eテストのソースのコンパイルステップが含まれるように更新されている。

## アプリケーションの起動方法

アプリケーションを起動するのに、以下のステップを実施してください。

1. [NodeJS](http://nodejs.org/)が必要なので、まだインストールされていなければ、インストールしてください。NodeJSはビルドツールが動くための環境を提供しているものです。
2. プロジェクトのルートから以下のコマンドを実施してください。

  ```shell
  npm install
  ```
3. [Gulp](http://gulpjs.com/)が必要なので、まだインストールされていなければ、以下のコマンドでインストールしてください。

  ```shell
  npm install -g gulp
  ```
4. [jspm](http://jspm.io/)が必要なので、まだインストールされていなければ、以下のコマンドでインストールしてください。

  ```shell
  npm install -g jspm
  ```
  > **注意** jspmはsemverに対応したパッケージをインストールするために、GitHubに対してリクエストを送信しているが、未認証のリクエスト数に対して制限がかけられています。この制限による問題をさけるために、自分のGitHubユーザー情報をjspmに設定するのがおすすめです。まずはこの`jspm endpoint config github`を実行してから、表示される指示に従って設定してください。

5. jspmを利用して、クライアントのライブラリをインストールします。

  ```shell
  jspm install -y
  ```
  >**注意** Windowsユーザーは、"unknown command unzip"エラーが発生する場合、`npm install -g unzip`コマンドを実施してから、再度`jspm install`を実施してください。

6. アプリケーションをスタートするのに、以下のコマンドを実施してください。

  ```shell
  gulp watch
  ```
7. ブラウザで[http://localhost:9000](http://localhost:9000)を開いてください。`src/app`の配下のファイルを更新すると、自動的にコンパイルされ、ブラウザの画面も更新されます。

> 注意：今のところでは、HTMLImports ポリフィルにIEだけで発生するバグがあります。Aureliaチームがこのバグを修正するプルリクエストを出していますが、改修されるまで以下のように直接スクリプトタグを追加して、回避してください（バージョンだけに注意してください）。

```html
<script src="jspm_packages/github/webcomponents/webcomponentsjs@0.5.2/HTMLImports.js"></script>
```

## ユニットテストの実施方法

ユニットテストを実施するのに、ライブラリのインストールをするのに、まずは上記のステップを完成してください。その後に以下のステップを実施してください。

1. ユニットテストから各ライブラリを参照するために、以下のように個別でインストールしてください。

  ```shell
  jspm install aurelia-framework
  jspm install aurelia-http-client
  jspm install aurelia-router
  ```
2. テストを一回だけ実施したい場合、以下のコマンドを使ってください。このコマンドは、両方メインとテストのTypescriptのソースをコンパイルしてから、テスト実施します。テストはGulpから実施されることが想定されているので、Karmaのグローバルのインストールは不要です。

  ```shell
  gulp test
  ```
  継続的にテストを実施する場合、以下のコマンドを使ってください。両方メインとテストのTypeScriptのソースに変更があったときに、自動的に再コンパイルされ、テストが実施されます。

  ```shell
  gulp tdd
  ```

## E2E(End-To-End)テストの実施方法

結合テストは[Protractor](http://angular.github.io/protractor/#/)を利用しています。

1. E2Eテストのソースを```src/test/e2e```に配置してください。
2. WebDriverをインストールしてください。

  ```shell
  gulp webdriver_update
  ```

3. `protractor.conf.js`でWebDriverへのパスと`seleniumServerJar`プロパティを調整してください。基本的に、バージョンの調整だけが必要です。

4. E2Eテストを実施します。このコマンドでE2Eテストのソースがコンパイルされてから、テストが実施されます。

  ```shell
  gulp e2e
  ```
