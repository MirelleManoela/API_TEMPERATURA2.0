import { Component, Input, OnInit } from '@angular/core';
import { faDroplet, faTemperatureHigh, faTemperatureLow, faWind } from '@fortawesome/free-solid-svg-icons';
import { climaDatas } from 'src/app/models/interfaces/clima.interface';
import { ClimaService } from 'src/app/modules/services/clima.service';

@Component({
  selector: 'app-cidades-card',
  templateUrl: './cidades-card.component.html',
  styleUrls: []
})
export class CidadesCardComponent  implements OnInit{

  cidadeMaisQuente: any;
  cidadeMaisFria: any;

  @Input() climaDatasInput!: climaDatas

  minTemperaturaIcon = faTemperatureLow;
  maxTemperaturaIcon = faTemperatureHigh;
  humidade = faDroplet;
  vento = faWind;

  constructor (private climaService: ClimaService) {}

  ngOnInit(): void {
    this.climaService.getMaxMin().subscribe(data => {
      this.cidadeMaisQuente = data.maisQuente;
      this.cidadeMaisFria = data.maisFria;
    });
  }
}
