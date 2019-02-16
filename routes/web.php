<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


// Auth::routes();
Route::group(
    [
        'prefix' => LaravelLocalization::setLocale(),
        'middleware' => [ 'localeSessionRedirect', 'localizationRedirect', 'localeViewPath' ]
    ],
    function () {
        Route::get('/', 'HomeController@index');
        Route::get('about', 'HomeController@about');
        Route::get('hire', 'HomeController@hire');
        Route::get('contact', 'HomeController@hire');
        Route::get('open-source', 'HomeController@open');
        $blog = ['~', 'blog'];
        foreach ($blog as $prefix) {
            Route::group(
                [
                    'prefix' => $prefix,
                ],
                function () {
                    Route::get('/{slug}', 'HomeController@blog');
                }
            );
        }
        Route::get('/{any}', 'HomeController@index')->name('home')->where('any', '.*');
    }
);
