/**
 * Created by edwin on 3/26/17.
 */
const { mix } = require('laravel-mix');

mix.js('resources/assets/js/app.js', 'public/js')
    .sass('resources/assets/sass/app.scss', 'public/css');



mix.styles([
    'resources/assets/css/libs/blog-post.css',
    'resources/assets/css/libs/bootstrap.css',
    'resources/assets/css/libs/font-awesome.css',
    'resources/assets/css/libs/metisMenu.css',
    'resources/assets/css/libs/sb-admin-2.css',
    'resources/assets/ccs/libs/d3.min.css',
    'resources/assets/css/libs/c3.min.css',
    'resources/assets/css/libs/Chart.min.css',
    'resources/assets/css/libs/frontend.min.css',
    'resources/assets/css/libs/timeline.css',

], 'public/css/libs.css');

mix.scripts([
    'resources/assets/js/libs/jquery.js',
    'resources/assets/js/libs/bootstrap.js',
    'resources/assets/js/libs/scripts.js',
    'resources/assets/js/libs/sb-admin-2.js',
    'resources/assets/js/libs/metisMenu.js',
    'resources/assets/js/libs/d3.min.js',
    'resources/assets/js/libs/c3.min.js',
    'resources/assets/js/libs/Chart.min.js',
    'resources/assets/js/libs/frontend.min.js'

], 'public/js/libs.js');