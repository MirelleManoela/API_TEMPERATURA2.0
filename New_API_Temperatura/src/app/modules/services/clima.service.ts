import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin, map, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {
  private apiKey = 'c6899ebcce5d6d498906f76d390e0849';
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private http: HttpClient) { }

  getClimaDatas(cityName: string): Observable<any>{
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&mode=json&appid=${this.apiKey}`,
      {}
    );
  }

    getCidadesBrasil(cidades: string[]): Observable<any[]> {
      const requests = cidades.map(city => this.getClimaDatas(city));
      return forkJoin(requests);
    }

    getMaxMin(): Observable<{maisQuente: any, maisFria: any }> {
      return this.http.get<string[]>('../../../assets/cidades.json').pipe(
        switchMap(cities => this.getCidadesBrasil(cities)),
        map(response => {
          let maisQuente = response[0];
          let maisFria = response[0];

          response.forEach(response => {
            if(response.main.temp > maisQuente.main.temp) {
              maisQuente = response;
            }
            if(response.main.temp < maisFria.main.temp) {
              maisFria = response;
            }
          });

          return {maisQuente, maisFria}
        })
      )
    }
}
