<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Event;
use Illuminate\Support\Facades\Gate;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index(Request $request)
    {
        Gate::authorize('viewAny', Event::class);
        $usuario = $request->user();
        $events = Event::orderBy('date')->orderBy('id')
            ->paginate(6)
            ->withQueryString()
            ->through(function (Event $event) use ($usuario) {
                return [
                    ...$event->toArray(),
                    'permisos' => [
                        'editar' => $usuario->can('update', $event),
                        'eliminar' => $usuario->can('delete', $event),
                    ],
                ];
            });

        return Inertia::render('Dashboard', [
            'events' => $events,
            'permisos' => [
                'crear' => $usuario->can('create', Event::class),
            ],
        ]);
    }
}
