import {TipoUsuarioEnum} from '../enums/tipo-usuario.enum';
import {DireccionInterface} from './direccion.interface';
import {VacunaInterface} from './vacuna.interface';

export interface EmpleadoInterface {
  fechaCreacion?: string;
  fechaActualizacion?: string;
  id: number;
  nombres: string;
  apellidos: string;
  cedula: string;
  correoElectronico: string;
  fechaNacimiento?: string;
  telefonoMovil?: string;
  vacunado?: boolean;
  rol: TipoUsuarioEnum.Usuario | TipoUsuarioEnum.Admin;
  direcciones?: DireccionInterface[];
  vacunas?: VacunaInterface[];
  login?: number
}

export interface CreateEmpleadoInterface extends Omit<EmpleadoInterface,
  'id' |
  'fechaCreacion' |
  'fechaActualizacion' |
  'fechaNacimiento' |
  'telefonoMovil' |
  'vacunado' |
  'direcciones' |
  'vacunas'> {
}

export interface UpdateEmpleadoInterface extends Omit<EmpleadoInterface,
  'fechaCreacion' |
  'fechaActualizacion' |
  'direcciones' |
  'vacunas'> {
}
