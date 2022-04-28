import {EmpleadoInterface} from './empleado.interface';

export interface AuthInterface {
  access_token: string;
  empleado: EmpleadoInterface;
}


export interface LoginInterface {
  id?: number;
  usuario: string;
  password: string;
}
