import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PrincipalService<Interfaz> {

  constructor(
    protected readonly _httpClient: HttpClient,
    @Inject('url')
    private readonly url: string,
    @Inject('segmento')
    private readonly segmento: string,
    @Inject('port')
    private readonly port: number,
  ) {
  }

  findAll(consulta?: string): Observable<[Interfaz[], number]> {
    let baseUrl = `${this.url}:${this.port}/${this.segmento}`;
    if (consulta) {
      baseUrl = `${baseUrl}?${consulta}`;
    }
    return this._httpClient.get(baseUrl) as Observable<[Interfaz[], number]>;
  }

  updateById(id: number, payload: Interfaz): Observable<Interfaz> {
    return this._httpClient.put(
      `${this.url}:${this.port}/${this.segmento}/${id}`,
      payload,
    ) as Observable<Interfaz>;
  }

  createOne(payload: Interfaz): Observable<Interfaz> {
    return this._httpClient.post(
      `${this.url}:${this.port}/${this.segmento}`,
      payload,
    ) as Observable<Interfaz>;
  }

  createMany(payload: Interfaz): Observable<Interfaz> {
    return this._httpClient.post(
      `${this.url}:${this.port}/${this.segmento}`,
      payload,
    ) as Observable<Interfaz>;
  }

  findOneById(id: number): Observable<Interfaz> {
    return this._httpClient.get(
      `${this.url}:${this.port}/${this.segmento}/${id}`,
    ) as Observable<Interfaz>;
  }
}
