import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContadorSingletonComponent } from './contador-singleton.component';

describe('ContadorSingletonComponent', () => {
  let component: ContadorSingletonComponent;
  let fixture: ComponentFixture<ContadorSingletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContadorSingletonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContadorSingletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
