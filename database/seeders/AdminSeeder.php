<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Role;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class AdminSeeder extends Seeder
{
    public function run(): void
    {
        DB::transaction(function () {
            $rol = Role::firstOrCreate([
                'name' => 'Administrador',
            ]);

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
