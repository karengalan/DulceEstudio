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

    public function view(User $user, Event $event): bool
    {
        return $user->tienePermiso('ver_todos_los_talleres');
    }


    public function update(User $user, Event $event): bool
    {
        return $user->tienePermiso('editar_cualquier_taller');
    }


    public function delete(User $user, Event $event): bool
    {
        return $user->tienePermiso('eliminar_cualquier_taller');
    }
}
