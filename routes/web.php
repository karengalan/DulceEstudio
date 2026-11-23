<?php

use App\Http\Controllers\EventController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\DashboardController;

Route::redirect('/', '/eventos');
Route::get('/eventos', [EventController::class, 'index']);
Route::get('/eventos/{id}', [EventController::class, 'show']);
Route::middleware('guest')->group(function () {
    Route::get('/registro', [RegisterController::class, 'create']);
    Route::post('/registro', [RegisterController::class, 'store']);
    Route::get('/login', [LoginController::class, 'create'])->name('login');
    Route::post('/login', [LoginController::class, 'store']);
});
Route::post('/logout', [LoginController::class, 'destroy'])
    ->middleware('auth');

Route::get('/dashboard', [DashboardController::class, 'index'])
    ->middleware('auth');