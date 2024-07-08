import { Component, Input } from '@angular/core';
import { faDroplet, faTemperatureHigh, faTemperatureLow, faWind } from '@fortawesome/free-solid-svg-icons';
import { climaDatas } from 'src/app/models/interfaces/clima.interface';

@Component({
  selector: 'app-clima-card',
  templateUrl: './clima-card.component.html',
  styleUrls: []
})
export class ClimaCardComponent {

  @Input() climaDatasInput!: climaDatas

  minTemperaturaIcon = faTemperatureLow;
  maxTemperaturaIcon = faTemperatureHigh;
  humidade = faDroplet;
  vento = faWind;

}
