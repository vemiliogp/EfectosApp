import { createAction, props } from '@ngrx/store';
import { Usuario } from '../../models/usuario.model';

export const cargarUsuarios = createAction('[Usuario] Cargar usuarios');

export const cargarUsuariosSuccess = createAction(
  '[Usuario] Cargar usuarios exitoso',
  props<{ usuarios: Usuario[] }>()
);

export const cargarUsuariosError = createAction(
  '[Usuario] Cargar usuarios error',
  props<{ payload: any }>()
);
