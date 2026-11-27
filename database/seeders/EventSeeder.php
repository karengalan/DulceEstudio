<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Event;
use App\Models\User;
use Illuminate\Database\Seeder;

class EventSeeder extends Seeder
{
    public function run(): void
    {
        $organizador = User::firstOrCreate(
            ['email' => 'organizador@dulceestudio.com'],
            ['name' => 'Organizador Dulce Estudio', 'password' => 'password']
        );

        $categorias = [];
        foreach (['Pastelería', 'Repostería vegana', 'Panadería', 'Decoración'] as $nombre) {
            $categorias[$nombre] = Category::firstOrCreate(['name' => $nombre]);
        }

        $eventos = [
            [
                'title' => 'Pastelería francesa',
                'description' => 'Aprendé a preparar clásicos de la pastelería francesa y conocé sus técnicas principales.',
                'category' => 'Pastelería',
                'date' => '2026-11-07',
                'location' => 'Dulce Estudio - Aula 1',
                'image' => '/images/pasteleria-francesa.webp',
                'price' => 18000,
            ],
            [
                'title' => 'Repostería vegana',
                'description' => 'Descubrí cómo preparar postres sin ingredientes de origen animal.',
                'category' => 'Repostería vegana',
                'date' => '2026-11-14',
                'location' => 'Online',
                'image' => '/images/reposteria-vegana.webp',
                'price' => 15000,
            ],
            [
                'title' => 'Panadería artesanal',
                'description' => 'Conocé las bases del amasado y la fermentación para elaborar panes caseros.',
                'category' => 'Panadería',
                'date' => '2026-11-21',
                'location' => 'Dulce Estudio - Aula 2',
                'image' => '/images/panaderia-artesanal.webp',
                'price' => 16000,
            ],
            [
                'title' => 'Galletitas caseras',
                'description' => 'Prepará galletitas de manteca, avena y chips de chocolate con recetas sencillas.',
                'category' => 'Pastelería',
                'date' => '2026-11-28',
                'location' => 'Dulce Estudio - Aula 1',
                'image' => '/images/galletitas-caseras.webp',
                'price' => 12000,
            ],
            [
                'title' => 'Galletitas decoradas con glasé',
                'description' => 'Practicá técnicas de delineado y relleno para decorar tus galletitas.',
                'category' => 'Decoración',
                'date' => '2026-12-05',
                'location' => 'Online',
                'image' => '/images/galletitas-decoradas.webp',
                'price' => 14000,
            ],
            [
                'title' => 'Técnicas de merengue',
                'description' => 'Aprendé las diferencias y los usos del merengue italiano, suizo y francés.',
                'category' => 'Pastelería',
                'date' => '2026-12-12',
                'location' => 'Dulce Estudio - Aula 2',
                'image' => '/images/merengue-italiano.webp',
                'price' => 15000,
            ],
            [
                'title' => 'Macarons desde cero',
                'description' => 'Conocé los pasos para preparar macarons, desde las tapas hasta sus rellenos.',
                'category' => 'Pastelería',
                'date' => '2026-12-19',
                'location' => 'Dulce Estudio - Aula 1',
                'image' => '/images/macarons.webp',
                'price' => 20000,
            ],
            [
                'title' => 'Decoración de galletitas para celebraciones',
                'description' => 'Combiná colores y diseños para crear galletitas decoradas para distintas ocasiones.',
                'category' => 'Decoración',
                'date' => '2027-01-09',
                'location' => 'Online',
                'image' => '/images/galletitas-celebraciones.webp',
                'price' => 16000,
            ],
        ];

        foreach ($eventos as $evento) {
            $evento['user_id'] = $organizador->id;
            $evento['category_id'] = $categorias[$evento['category']]->id;

            Event::updateOrCreate(
                ['title' => $evento['title']],
                $evento
            );
        }
    }
}