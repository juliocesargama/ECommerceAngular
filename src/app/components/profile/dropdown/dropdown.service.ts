import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';
import { BRCities } from './BRCities';
import { BRStates } from './BRStates';

@Injectable({
  providedIn: 'root',
})
export class DropdownService {
  constructor(private http: HttpClient) {}

  getBRStates() {
    return this.http
      .get<BRStates[]>('https://servicodados.ibge.gov.br/api/v1/localidades/estados');
  }

  getBRCities(id: number) {
    return this.http
      .get<BRCities[]>(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${id}/municipios`)
        .pipe(
          map((cities: BRCities[]) => cities
          .filter(c => c.microrregiao.mesorregiao.UF.id == id)));
  }
}
