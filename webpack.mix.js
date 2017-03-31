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
    .sass('resources/assets/sass/app.scss', 'public/css')

    // Combine css
    .styles([
        'resources/semantic/dist/semantic.css'
    ], 'public/css/vendor.css')

    // Semantic theme
    .copy('resources/semantic/dist/themes/default', 'public/css/themes/default', false);

if (mix.config.inProduction) {
    mix.version();
}
