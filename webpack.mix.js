const mix = require('laravel-mix');
const webpack = require('webpack');
const tailwindcss = require('tailwindcss');

mix
    .options({
        uglify: {
            uglifyOptions: {
                compress: {
                    drop_console: true,
                }
            }
        },
        processCssUrls: false,
    })
    .webpackConfig({
        resolve: {
            extensions: ['.js', '.vue', '.json'],
            alias: {
                '@': __dirname + '/resources/js'
            },
        },
        plugins: [
            new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
        ],
    });

mix
    .setPublicPath('public')
    .js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css', {}, [tailwindcss('./config/sass.js')])
    .version();

mix
    .browserSync({
        proxy: 'malico.m'
    });
