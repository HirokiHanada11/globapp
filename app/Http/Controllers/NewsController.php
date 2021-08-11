<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class NewsController extends Controller
{
    /* fetches news from News Api on top-headline with topic given as an argument */
    public function news( Request $request, $topic ){
        $newsApiEndPoint = 'https://newsapi.org/v2/top-headlines';

        $response = Http::withHeaders([
            'X-Api-Key' => 'b3223848c6a34470867e3961b2db38be'
        ])->get($newsApiEndPoint, [
            'q' => $topic
        ]);      

        return $response->json();
    }

    /* fetches news from News Api on everything with topic given as an argument */
    public function searchNews( Request $request, $topic ){
        $newsApiEndPoint = 'https://newsapi.org/v2/everything';

        $response = Http::withHeaders([
            'X-Api-Key' => 'b3223848c6a34470867e3961b2db38be'
        ])->get($newsApiEndPoint, [
            'qInTitle' => $topic,
            'sortBy' => 'popularity',
            'pageSize' => 20,
        ]);      

        return $response->json();
    }
}
