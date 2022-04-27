import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PrincipalService<Interfaz> {

  private baseUrl: string = `${this.url}:${this.port}/${this.segmento}`;
  private baseUrlSinPort: string = `${this.url}/${this.segmento}`;

  constructor(
    protected readonly _httpClient: HttpClient,
    @Inject('url')
    private readonly url: string,
    @Inject('segmento')
    private readonly segmento: string,
    @Inject('port')
    private readonly port: number,
  ) {
    this.baseUrl = this.port ? this.baseUrl : this.baseUrlSinPort;
    console.log(this.baseUrl);
  }

  findAll(): Observable<Interfaz[]> {
    return this._httpClient.get<Interfaz[]>(this.baseUrl);
  }

  updateById(id: number, payload: Interfaz): Observable<Interfaz> {
    return this._httpClient.put<Interfaz>(`${this.baseUrl}/${id}`, payload,
    );
  }

  createOne(payload: Interfaz): Observable<Interfaz> {
    return this._httpClient.post<Interfaz>(`${this.baseUrl}`, payload,
    );
  }

  createMany(payload: Interfaz[]): Observable<Interfaz[]> {
    return this._httpClient.post<Interfaz[]>(`${this.baseUrl}`, payload,
    );
  }

  findOneById(id: number): Observable<Interfaz> {
    return this._httpClient.get<Interfaz>(
      `${this.baseUrl}/${id}`,
    );
  }
}
