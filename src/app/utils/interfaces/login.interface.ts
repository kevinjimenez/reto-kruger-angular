import {EmpleadoInterface} from './empleado.interface';

export interface AuthInterface {
  access_token: string;
  empleado: EmpleadoInterface;
}


export interface LoginInterface {
  usuario: string;
  password: string;
}
