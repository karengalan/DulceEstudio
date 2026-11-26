<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Event;
use Illuminate\Support\Facades\Gate;

class DashboardController extends Controller
{
        public function index()
    {
        Gate::authorize('viewAny', Event::class);
        $events = Event::orderBy('date')->orderBy('id')
            ->paginate(6)->withQueryString();

        return Inertia::render('Dashboard', [
            'events' => $events,
        ]);
    }
}
