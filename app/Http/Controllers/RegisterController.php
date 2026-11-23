<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class RegisterController extends Controller
{
    public function create()
    {
        return Inertia::render('Auth/Registro');
    }

    public function store(Request $request)
    {
        $nombre = [
            'reglas' => ['required', 'string', 'max:255'],
            'mensajes' => [
                'name.required' => 'Ingresá tu nombre.',
                'name.string' => 'El nombre debe ser un texto.',
                'name.max' => 'El nombre no puede superar los 255 caracteres.',
            ],
        ];

        $correo = [
            'reglas' => ['required', 'email:filter', 'max:255', 'unique:users,email'],
            'mensajes' => [
                'email.required' => 'Ingresá tu correo electrónico.',
                'email.email' => 'Ingresá un correo electrónico válido.',
                'email.max' => 'El correo no puede superar los 255 caracteres.',
                'email.unique' => 'Ya existe una cuenta con ese correo.',
            ],
        ];

        $contrasena = [
            'reglas' => ['required', 'string', 'min:8', 'confirmed'],
            'mensajes' => [
                'password.required' => 'Ingresá una contraseña.',
                'password.string' => 'La contraseña debe ser un texto.',
                'password.min' => 'La contraseña debe tener al menos 8 caracteres.',
                'password.confirmed' => 'Las contraseñas no coinciden.',
            ],
        ];

        $datos = $request->validate([
            'name' => $nombre['reglas'],
            'email' => $correo['reglas'],
            'password' => $contrasena['reglas'],
        ], array_merge(
            $nombre['mensajes'],
            $correo['mensajes'],
            $contrasena['mensajes']
        ));

        $usuario = User::create([
            'name' => $datos['name'],
            'email' => $datos['email'],
            'password' => Hash::make($datos['password']),
        ]);

        Auth::login($usuario);
        $request->session()->regenerate();

        return redirect('/eventos');
    }
}
