const { mix } = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js([
    'resources/assets/js/app.js',
    'resources/semantic/dist/semantic.js'
], 'public/js')

    // Compile sass
    .sass('resources/assets/sass/app.scss', 'resources/build/css')

    // Combine css
    .styles([
        'resources/build/css/app.css',
        'resources/semantic/dist/semantic.css'
    ], 'public/css/all.css');

if (mix.config.inProduction) {
    mix.version();
}
