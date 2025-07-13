import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservasclienteComponent } from './reservascliente.component';

describe('ReservasclienteComponent', () => {
  let component: ReservasclienteComponent;
  let fixture: ComponentFixture<ReservasclienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReservasclienteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservasclienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
