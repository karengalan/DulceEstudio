<?php

namespace App\Http\Controllers;

use App\Models\Event;
use Inertia\Inertia;

class EventController extends Controller
{
    public function index()
    {
        $events = Event::orderBy('date')->get();

        return Inertia::render('Events/Index', [
            'events' => $events,
        ]);
    }
    public function show($id)
    {
        $event = Event::findOrFail($id);

        return Inertia::render('Events/Show', [
            'event' => $event,
        ]);
    }
}
