<?php

namespace App\Http\Controllers;

use App\Models\Event;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;

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
        Gate::authorize('create', Event::class);
        return Inertia::render('Events/Create', [
            'categorias' => [],
        ]);
    }

    public function edit(string $id)
    {
        $event = Event::findOrFail($id);
        Gate::authorize('update', $event);

        return Inertia::render('Events/Edit', [
            'event' => $event,
            'categorias' => [],
        ]);
    }

    private function validarTaller(Request $request, bool $esEdicion = false): array
    {
        $titulo = [
            'reglas' => ['required', 'string', 'max:255'],
            'mensajes' => [
                'title.required' => 'Ingresá el título del taller.',
                'title.string' => 'El título debe ser un texto.',
                'title.max' => 'El título no puede superar los 255 caracteres.',
            ],
        ];

        $descripcion = [
            'reglas' => ['required', 'string', 'max:5000'],
            'mensajes' => [
                'description.required' => 'Ingresá una descripción.',
                'description.string' => 'La descripción debe ser un texto.',
                'description.max' => 'La descripción no puede superar los 5000 caracteres.',
            ],
        ];

        $categoria = [
            'reglas' => ['required', 'integer', 'exists:categories,id'],
            'mensajes' => [
                'category_id.required' => 'Seleccioná una categoría.',
                'category_id.integer' => 'Seleccioná una categoría válida.',
                'category_id.exists' => 'La categoría seleccionada no existe.',
            ],
        ];

        $fecha = [
            'reglas' => ['required', 'date_format:Y-m-d'],
            'mensajes' => [
                'date.required' => 'Ingresá la fecha del taller.',
                'date.date_format' => 'Ingresá una fecha válida.',
            ],
        ];

        $ubicacion = [
            'reglas' => ['required', 'string', 'max:255'],
            'mensajes' => [
                'location.required' => 'Ingresá la ubicación del taller.',
                'location.string' => 'La ubicación debe ser un texto.',
                'location.max' => 'La ubicación no puede superar los 255 caracteres.',
            ],
        ];

        $precio = [
            'reglas' => ['required', 'numeric', 'min:0', 'max:99999999.99', 'decimal:0,2'],
            'mensajes' => [
                'price.required' => 'Ingresá el precio del taller.',
                'price.numeric' => 'Ingresá un precio válido.',
                'price.min' => 'El precio no puede ser negativo.',
                'price.max' => 'El precio no puede superar los 99.999.999,99.',
                'price.decimal' => 'El precio puede tener hasta dos decimales.',
            ],
        ];

        $imagen = [
            'reglas' => [
                $esEdicion ? 'nullable' : 'required',
                'image',
                'mimes:jpg,jpeg,png,webp',
                'max:2048',
            ],
            'mensajes' => [
                'image.required' => 'Seleccioná una imagen.',
                'image.image' => 'El archivo debe ser una imagen.',
                'image.mimes' => 'La imagen debe ser JPG, PNG o WebP.',
                'image.max' => 'La imagen no puede superar los 2 MB.',
                'image.uploaded' => 'No se pudo cargar la imagen.',
            ],
        ];

        return $request->validate([
            'title' => $titulo['reglas'],
            'description' => $descripcion['reglas'],
            'category_id' => $categoria['reglas'],
            'date' => $fecha['reglas'],
            'location' => $ubicacion['reglas'],
            'price' => $precio['reglas'],
            'image' => $imagen['reglas'],
        ], array_merge(
            $titulo['mensajes'],
            $descripcion['mensajes'],
            $categoria['mensajes'],
            $fecha['mensajes'],
            $ubicacion['mensajes'],
            $precio['mensajes'],
            $imagen['mensajes']
        ));
    }
}
