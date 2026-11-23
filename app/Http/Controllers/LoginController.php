<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;

class LoginController extends Controller
{
    public function create()
    {
        return Inertia::render('Auth/Login');
    }

    public function store(Request $request)
    {
        $correo = [
            'reglas' => ['required', 'email:filter', 'max:255'],
            'mensajes' => [
                'email.required' => 'Ingresá tu correo electrónico.',
                'email.email' => 'Ingresá un correo electrónico válido.',
                'email.max' => 'El correo no puede superar los 255 caracteres.',
            ],
        ];

        $contrasena = [
            'reglas' => ['required', 'string'],
            'mensajes' => [
                'password.required' => 'Ingresá tu contraseña.',
                'password.string' => 'La contraseña debe ser un texto.',
            ],
        ];

        $datos = $request->validate([
            'email' => $correo['reglas'],
            'password' => $contrasena['reglas'],
        ], array_merge(
            $correo['mensajes'],
            $contrasena['mensajes']
        ));

        if (!Auth::attempt($datos)) {
            throw ValidationException::withMessages([
                'email' => 'El correo o la contraseña son incorrectos.',
            ]);
        }

        $request->session()->regenerate();

        return redirect()->intended('/eventos');
    }

    public function destroy(Request $request)
    {
        Auth::logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect('/eventos');
    }
}