import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DropdownService {
  constructor(private http: HttpClient) {}

  getBRStates() {
    return this.http
      .get('https://servicodados.ibge.gov.br/api/v1/localidades/estados').pipe(
        map((res: any) => {
          return res.map((state: { id: any, sigla: any;}) => {
            return {
              id: state.id,
              value: state.sigla,

            };
          });
        })
      );
  }
}
