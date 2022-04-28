import {Injectable} from '@angular/core';
import {PrincipalService} from '../../general/principal.service';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {CreateEmpleadoInterface, EmpleadoInterface, UpdateEmpleadoInterface} from '../../../utils';

@Injectable({
  providedIn: 'root',
})
export class EmpleadoService extends PrincipalService<EmpleadoInterface, CreateEmpleadoInterface, any> {

  private uri: string = `${environment.url}:${environment.port}/empleado`;
  private uriSinPort: string = `${environment.url}/empleado`;

  constructor(
    _httpClient: HttpClient,
  ) {
    super(_httpClient, environment.url, 'empleado', environment.port);
    this.uri = environment.port ? this.uri : this.uriSinPort;
  }

  findAllWithCriteria(
    cedula = undefined,
    correoElectronico = undefined,
    tipoVacuna = undefined,
    vacunado = undefined,
    fechaInicio = undefined,
    fechaFin = undefined,
  ) {
    let params = new HttpParams();
    if (cedula) {
      params = params.set('cedula', cedula);
    }
    if (correoElectronico) {
      params = params.set('correoElectronico', correoElectronico);
    }
    if (tipoVacuna) {
      params = params.set('tipoVacuna', tipoVacuna);
    }
    if (vacunado) {
      params = params.set('vacunado', vacunado);
    }
    if (fechaInicio && fechaFin) {
      params = params.set('fechaInicio', fechaInicio);
      params = params.set('fechaFin', fechaFin);
    }

    return this._httpClient
      .get<EmpleadoInterface[]>(`${this.uri}`, {
        params,
      });
  }

  // findAllWithCriteris(
  //   limit?: number, offset?: number
  // ){
  //   let params = new HttpParams();
  //   if (limit && offset) {
  //     params = params.set('limit', limit);
  //     params = params.set('offset', offset);
  //   }
  // }

}
