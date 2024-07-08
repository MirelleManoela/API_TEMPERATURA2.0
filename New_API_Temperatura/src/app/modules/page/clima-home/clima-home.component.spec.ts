import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClimaHomeComponent } from './clima-home.component';

describe('ClimaHomeComponent', () => {
  let component: ClimaHomeComponent;
  let fixture: ComponentFixture<ClimaHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClimaHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClimaHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
