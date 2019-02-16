<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Torann\LaravelMetaTags\Facades\MetaTag;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;
    public function __construct()
    {
        MetaTag::set('description', 'Software Developer, AfroGeek and Open Source Freak');
        MetaTag::set('image', asset('images/default-share-image.png'));
    }
}
