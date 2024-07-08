import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { ClimaCardComponent } from './modules/components/clima-card/clima-card.component';
import { ClimaHomeComponent } from './modules/page/clima-home/clima-home.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import  {CidadesCardComponent} from './modules/components/cidades-card/cidades-card/cidades-card.component';
@NgModule({
  declarations: [
    AppComponent,
    ClimaCardComponent,
    ClimaHomeComponent,
    CidadesCardComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
