<?php

use App\Http\Controllers\EventController;
use Illuminate\Support\Facades\Route;

Route::redirect('/', '/eventos');
Route::get('/eventos', [EventController::class, 'index']);
Route::get('/eventos/{id}', [EventController::class, 'show']);