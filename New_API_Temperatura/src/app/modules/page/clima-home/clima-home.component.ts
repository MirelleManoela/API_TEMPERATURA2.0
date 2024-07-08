import { climaDatas } from './../../../models/interfaces/clima.interface';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Subject, takeUntil } from 'rxjs';
import { ClimaService } from '../../services/clima.service';

@Component({
  selector: 'app-clima-home',
  templateUrl: './clima-home.component.html',
  styleUrls: []
})
export class ClimaHomeComponent implements OnInit, OnDestroy {

  private readonly destroy$: Subject<void> = new Subject();
  initialCityName = 'Olinda'
  climaDatas!: climaDatas;
  searchIcon = faMagnifyingGlass;

  constructor(private climamaService : ClimaService) {}

  ngOnInit(): void {
    this.getClimaDatas(this.initialCityName)
  }

  getClimaDatas(cityName: string): void{
    this.climamaService.getClimaDatas(cityName)
    .pipe(
      takeUntil(this.destroy$)
    )
    .subscribe({
      next: (response) => {
        response && (this.climaDatas = response);
      },

      error: (error) => console.log(error),
    })
  }

  onSubmit():void{
    this.getClimaDatas(this.initialCityName);
    this.initialCityName = '';
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
