import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarritocomprasComponent } from './carritocompras.component';

describe('CarritocomprasComponent', () => {
  let component: CarritocomprasComponent;
  let fixture: ComponentFixture<CarritocomprasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarritocomprasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarritocomprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
