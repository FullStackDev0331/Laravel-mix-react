// webpack.mix.js

let mix = require('laravel-mix');

mix
  .js('resources/js/app.js', 'public/js')
  .react()
  .extract(['react'])
  .css('resources/css/app.css', 'public/css');