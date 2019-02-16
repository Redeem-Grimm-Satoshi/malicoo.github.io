<?php

namespace App\Http\Controllers\Api;

use Wink\WinkTag as Tag;
use Wink\WinkPost as Post;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\PostResource;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if ($request->filled('cat')) {
            $tag = Tag::where('slug', $request->cat)->first();

            $posts = $tag->posts()
                        ->with(['author','tags'])
                        ->live()
                        ->orderBy('publish_date', 'DESC')
                        ->paginate(3);
        } else {
            $posts = Post::with(['author','tags'])
                    ->live()
                    ->orderBy('publish_date', 'DESC')
                    ->paginate(3);
        }

        return PostResource::collection($posts);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($slug)
    {
        return Post::where('slug', $slug)
            ->live()
            ->with(['tags', 'author'])
            ->get();
    }


    public function categories()
    {
        return Tag::all();
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
