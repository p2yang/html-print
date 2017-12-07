let mix = require('laravel-mix');

mix.js('src/index.js', 'dist/print.min.js')
   .less('src/css/print.less', 'dist/print.min.css');
