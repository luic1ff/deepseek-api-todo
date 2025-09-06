<?php

namespace App\Http\Controllers\Weather;

use App\Http\Controllers\Controller;
use App\Http\Resources\WeatherResource;
use Illuminate\Http\Request;

class WeatherController extends Controller
{
    public function weather(Request $request)
    {
        $request->validate([
            'city' => 'required|string',
        ]);

        $city = $request->input('city');

        // Dummy weather data for demonstration purposes
        $weatherData = [
            'temperature' => '22°C',
            'condition' => 'Sunny',
            'forecast' => 'Clear skies throughout the day',
        ];

        return response()->json([
            'status' => 'success',
            'message' => 'Data fetched successfully',
            'data' => $weatherData
        ]);
    }
}
