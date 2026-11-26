<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Permission;
use App\Models\Role;
use Illuminate\Support\Facades\DB;


class OrganizadorSeeder extends Seeder
{
    public function run(): void
    {
        DB::transaction(function () {
            $rol = Role::firstOrCreate([
                'name' => 'Organizador',
            ]);

            $nombresPermisos = [
                'ver_talleres_propios',
                'editar_talleres_propios',
                'eliminar_talleres_propios',
                'crear_talleres',
            ];

            foreach ($nombresPermisos as $nombrePermiso) {
                $permiso = Permission::firstOrCreate([
                    'name' => $nombrePermiso,
                ]);

                $rol->permissions()->syncWithoutDetaching([$permiso->id]);
            }
        });
    }
}
