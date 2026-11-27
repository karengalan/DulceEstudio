<?php

namespace App\Policies;

use App\Models\Event;
use App\Models\User;

class EventPolicy
{
    public function viewAny(User $user): bool
    {
        return $user->tienePermiso('ver_todos_los_talleres');
    }

    public function create(User $user): bool
    {
        return $user->tienePermiso('crear_talleres');
    }

    public function view(User $user, Event $event): bool
    {
        return $user->tienePermiso('ver_todos_los_talleres')
            || (
                $user->tienePermiso('ver_talleres_propios')
                && $this->esPropietario($user, $event)
            );
    }


    public function update(User $user, Event $event): bool
    {
        return $user->tienePermiso('editar_cualquier_taller')
            || (
                $user->tienePermiso('editar_talleres_propios')
                && $this->esPropietario($user, $event)
            );
    }


    public function delete(User $user, Event $event): bool
    {
        return $user->tienePermiso('eliminar_cualquier_taller')
            || (
                $user->tienePermiso('eliminar_talleres_propios')
                && $this->esPropietario($user, $event)
            );
    }

    private function esPropietario(User $user, Event $event): bool
    {
        return isset($event->user_id)
            && (int) $event->user_id === (int) $user->id;
    }
}
