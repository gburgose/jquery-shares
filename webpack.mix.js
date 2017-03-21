let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */

mix.js('resources/sample/js/main.js', 'public/assets/js/sample.js')
   .sass('resources/sample/sass/main.scss', 'public/assets/css/sample.css')
   .browserSync('jquery-shares.dev');