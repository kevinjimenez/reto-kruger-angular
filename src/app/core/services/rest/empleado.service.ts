import {Injectable} from '@angular/core';
import {PrincipalService} from '../../general/principal.service';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {EmpleadoInterface} from '../../../utils';

@Injectable({
  providedIn: 'root',
})
export class EmpleadoService extends PrincipalService<EmpleadoInterface> {

  constructor(
    _httpClient: HttpClient,
  ) {
    super(_httpClient, environment.url, 'empleado', environment.port);
  }
}
