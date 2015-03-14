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

1. Ensure that the [Karma](http://karma-runner.github.io/) CLI is installed. If you need to install it, use the following command:

  ```shell
  npm install -g karma-cli
  ```
2. Install Aurelia libs for test visibility:

```shell
jspm install aurelia-framework
jspm install aurelia-http-client
jspm install aurelia-router
```
3. You can now run the tests with this command:

  ```shell
  karma start
  ```

## Running The E2E Tests
Integration tests are performed with [Protractor](http://angular.github.io/protractor/#/).

1. Place your E2E-Tests into the folder ```test/e2e/src```
2. Install the necessary webdriver

  ```shell
  gulp webdriver_update
  ```

3. Configure the path to the webdriver by opening the file ```protractor.conf.js``` and adjusting the ```seleniumServerJar``` property. Typically its only needed to adjust the version number.

4. Run the E2E-Tests

  ```shell
  gulp e2e
  ```
