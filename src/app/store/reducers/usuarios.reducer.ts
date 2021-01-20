import { createReducer, on } from '@ngrx/store';
import { Usuario } from '../../models/usuario.model';
import {
  cargarUsuarios,
  cargarUsuariosError,
  cargarUsuariosSuccess,
} from '../actions';

export interface UsuariosState {
  users: Usuario[];
  loaded: boolean;
  loading: boolean;
  error: any;
}

export const usuariosInitialState: UsuariosState = {
  users: [],
  loaded: false,
  loading: false,
  error: null,
};

const _usuariosReducer = createReducer(
  usuariosInitialState,
  on(cargarUsuarios, (state) => ({ ...state, loading: true })),
  on(cargarUsuariosSuccess, (state, props) => ({
    ...state,
    users: [...props.usuarios],
    loading: false,
    loaded: true,
  })),
  on(cargarUsuariosError, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: { url: payload.url, name: payload.name, message: payload.message },
  }))
);

export function usuariosReducer(state, action) {
  return _usuariosReducer(state, action);
}
