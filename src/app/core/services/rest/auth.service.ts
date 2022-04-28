import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {Observable} from 'rxjs';
import {AuthInterface, LoginInterface} from '../../../utils';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private url: string = environment.url;
  private port: number = environment.port;
  private segmento: string = 'auth';
  private baseUrl: string = `${this.url}:${this.port}/${this.segmento}`;
  private baseUrlSinPort: string = `${this.url}/${this.segmento}`;

  constructor(
    private readonly _httpClient: HttpClient,
  ) {
    this.baseUrl = this.port ? this.baseUrl : this.baseUrlSinPort;
  }

  login(payload: LoginInterface): Observable<AuthInterface> {
    return this._httpClient.post<AuthInterface>(`${this.baseUrl}/login`, payload,
    );
  }

  signin(payload: LoginInterface): Observable<LoginInterface> {
    return this._httpClient.post<LoginInterface>(`${this.baseUrl}/signin`, payload,
    );
  }
}
