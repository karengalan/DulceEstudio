<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Role;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use App\Models\Permission;

class AdminSeeder extends Seeder
{
    public function run(): void
    {
        DB::transaction(function () {
            $rol = Role::firstOrCreate([
                'name' => 'Administrador',
            ]);

            $nombresPermisos = [
                'ver_todos_los_talleres',
                'editar_cualquier_taller',
                'eliminar_cualquier_taller',
            ];

            foreach ($nombresPermisos as $nombrePermiso) {
                $permiso = Permission::firstOrCreate([
                    'name' => $nombrePermiso,
                ]);

                $rol->permissions()->syncWithoutDetaching([$permiso->id]);
            }

            $usuario = User::firstOrCreate(
                ['email' => 'admin@gmail.com'],
                [
                    'name' => 'Administrador',
                    'password' => Hash::make('Admin1234!'),
                ]
            );

            $usuario->roles()->syncWithoutDetaching([$rol->id]);
        });
    }
}
