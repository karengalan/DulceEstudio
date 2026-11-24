<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Event;

class DashboardController extends Controller
{
        public function index()
    {
        $events = Event::orderBy('date')->orderBy('id')
            ->paginate(6)->withQueryString();

        return Inertia::render('Dashboard', [
            'events' => $events,
        ]);
    }
}
