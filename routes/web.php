<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MintController;
use App\Http\Controllers\RedeemController;

// Display the form (assuming a single page for both forms)
Route::get('/', function () {
    return view('index_JP');
});

Route::get('/en', function () {
    return view('index_EN');
});

// Handle form submissions
Route::post('/mint', [MintController::class, 'store']);
Route::post('/redeem', [RedeemController::class, 'store']);
