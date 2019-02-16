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

        module: {

            rules: [

                {
                    test: /\.(glsl|frag|vert)$/,
                    use: ['glslify-import-loader', 'raw-loader', 'glslify-loader']
                },

                {
                    test: /\.js$/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env'],
                            plugins: ['@babel/plugin-syntax-dynamic-import']
                        }
                    },
                    exclude: /node_modules/
                }
            ]
        }
    });

mix
    .setPublicPath('public')
    .js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css', {}, [tailwindcss('./config/sass.js')])
    .version();

mix
    .browserSync({
        proxy: 'malico.test'
    });
