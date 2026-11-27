<?php

namespace App\Support;

use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;

class ImagenEvento
{
    private const CARPETA = 'events';

    // Guarda la imagen en storage/app/public/events y devuelve la ruta pública.
    public static function guardar(UploadedFile $archivo): string
    {
        $ruta = Storage::disk('public')->putFile(self::CARPETA, $archivo);

        return '/storage/' . $ruta;
    }

    // Borra la imagen anterior, pero solo si la subió un usuario.
    // Las imágenes de ejemplo (/images/...) no se tocan.
    public static function eliminar(?string $rutaPublica): void
    {
        if ($rutaPublica && str_starts_with($rutaPublica, '/storage/' . self::CARPETA . '/')) {
            Storage::disk('public')->delete(self::CARPETA . '/' . basename($rutaPublica));
        }
    }
}
