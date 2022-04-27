import { Injectable } from '@angular/core';
import {PrincipalService} from '../../general/principal.service';
import {CreateVacunaInterface, UpdateVacunaInterface, VacunaInterface} from '../../../utils';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VacunaService extends PrincipalService<VacunaInterface, CreateVacunaInterface, UpdateVacunaInterface>{

  constructor(
    _httpClient: HttpClient,
  ) {
    super(_httpClient, environment.url, 'vacuna', environment.port);
  }
}
