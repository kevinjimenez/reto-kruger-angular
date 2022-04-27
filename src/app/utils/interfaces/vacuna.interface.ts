export interface VacunaInterface {
  fechaCreacion?: string;
  fechaActualizacion?: string;
  id: number;
  tipoVacuna: string;
  fechaVacunacion: string;
  numeroDosis: number;
}

export interface CreateVacunaInterface extends Omit<VacunaInterface,
  'id' |
  'fechaCreacion' |
  'fechaActualizacion'> {
}

export interface UpdateVacunaInterface extends Omit<VacunaInterface,
  'fechaCreacion' |
  'fechaActualizacion'> {
}

