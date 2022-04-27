export interface DireccionInterface {
  fechaCreacion?: string;
  fechaActualizacion?: string;
  id: number;
  provincia: string;
  ciudad: string;
  callePrincipal: string;
  calleSecundaria?: string;
}

export interface CreateDireccionInterface extends Omit<DireccionInterface,
  'id' |
  'fechaCreacion' |
  'fechaActualizacion'> {
}

export interface UpdateDireccionInterface extends Omit<DireccionInterface,
  'fechaCreacion' |
  'fechaActualizacion'> {
}

