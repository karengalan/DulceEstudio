<?php

use App\Http\Controllers\EventController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RegisterController;

Route::redirect('/', '/eventos');
Route::get('/eventos', [EventController::class, 'index']);
Route::get('/eventos/{id}', [EventController::class, 'show']);
Route::middleware('guest')->group(function () {
    Route::get('/registro', [RegisterController::class, 'create']);
    Route::post('/registro', [RegisterController::class, 'store']);
});
