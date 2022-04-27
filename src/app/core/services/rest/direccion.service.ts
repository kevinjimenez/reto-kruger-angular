import {Injectable} from '@angular/core';
import {PrincipalService} from '../../general/principal.service';
import {CreateDireccionInterface, DireccionInterface, UpdateDireccionInterface} from '../../../utils';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DireccionService extends PrincipalService<DireccionInterface, CreateDireccionInterface, UpdateDireccionInterface> {

  constructor(
    _httpClient: HttpClient,
  ) {
    super(_httpClient, environment.url, 'direccion', environment.port);
  }
}
