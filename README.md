## Currency demo app

## Live demo

- [currency.jsdemo.be](http://currency.jsdemo.be)

## Usage

```
$ git clone https://github.com/juliancwirko/currency-demo-app.git
$ cd currency-demo-app
$ npm install
$ npm start
```
...and go to: http://localhost:3000

## Prepare for production

If you are ready to prepare your production files. You can run `npm run build`. Webpack will bundle and save all needed files (.js, .css, img, .html) in the `public` folder.

## Tests and ESLint

It uses Mocha runner config. You can use Enzyme, Chai, Sinon and JSDOM too.
Configuration allows you to test components which uses CSS Modules.
If you want to run tests put your test files in the `__tests__` folder and run `npm test`. (it will run eslint too) or `npm run testonly`.
You'll find example tests in the `__tests__` folder.

Works in Node which supports Promises.
