import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CidadesCardComponent } from './cidades-card.component';

describe('CidadesCardComponent', () => {
  let component: CidadesCardComponent;
  let fixture: ComponentFixture<CidadesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CidadesCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CidadesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
