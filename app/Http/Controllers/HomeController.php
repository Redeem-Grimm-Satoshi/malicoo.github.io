<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Torann\LaravelMetaTags\Facades\MetaTag;
use Wink\WinkPost as Post;

class HomeController extends Controller
{
    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        return view('home');
    }

    public function about()
    {
        MetaTag::set('title', "About Malico");
        return view('home');
    }
    
    public function Hire()
    {
        MetaTag::set('title', "Hire Malico");
        MetaTag::set('description', "Hire Desmonnd for a Job");
        return view('home');
    }

    public function open()
    {
        MetaTag::set('title', "Open Source");
        return view('home');
    }

    public function blog($slug)
    {
        $post = Post::where('slug', $slug)
                ->live()
                ->first();

        MetaTag::set('description', $post->excerpt);
        MetaTag::set('title', $post->title);
        MetaTag::set('image', $post->featured_image);
        return view('home');
    }
}
