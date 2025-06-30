import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContadorSingletonIngenuoComponent } from './contador-singleton-ingenuo.component';

describe('ContadorSingletonIngenuoComponent', () => {
  let component: ContadorSingletonIngenuoComponent;
  let fixture: ComponentFixture<ContadorSingletonIngenuoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContadorSingletonIngenuoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContadorSingletonIngenuoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
