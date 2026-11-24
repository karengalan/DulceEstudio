<?php

namespace App\Http\Controllers;

use App\Models\Event;
use Inertia\Inertia;
use Illuminate\Http\Request;

class EventController extends Controller
{
    public function index(Request $request)
    {
        $busqueda = trim((string) $request->query('busqueda', ''));
        $categoria = (string) $request->query('categoria', 'Todos');

        $consulta = Event::query();

        if ($busqueda !== '') {
            $consulta->where('title', 'like', '%' . $busqueda . '%');
        }

        if ($categoria !== 'Todos') {
            $consulta->where('category', $categoria);
        }

        $events = $consulta->orderBy('date')->orderBy('id')
            ->paginate(6)->withQueryString();

        $categorias = Event::select('category')->distinct()
            ->orderBy('category')->pluck('category');

        return Inertia::render('Events/Index', [
            'events' => $events,
            'categorias' => $categorias,
            'filtros' => [
                'busqueda' => $busqueda,
                'categoria' => $categoria,
            ],
        ]);
    }
    public function show(string $id)
    {
        $event = Event::findOrFail($id);

        return Inertia::render('Events/Show', [
            'event' => $event,
        ]);
    }
    public function create()
    {
        return Inertia::render('Events/Create', [
            'categorias' => [],
        ]);
    }

    public function edit(string $id)
    {
        $event = Event::findOrFail($id);

        return Inertia::render('Events/Edit', [
            'event' => $event,
            'categorias' => [],
        ]);
    }
}
