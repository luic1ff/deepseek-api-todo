<?php

use App\Http\Controllers\Weather\WeatherController;
use Illuminate\Support\Facades\Route;

Route::group([
    'prefix' => 'v1'
], function ()
{
    Route::post('/weather', [WeatherController::class, 'weather']);
});
