import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenarPokemonsIngenuoComponent } from './ordenar-pokemons-ingenuo.component';

describe('OrdenarPokemonsIngenuoComponent', () => {
  let component: OrdenarPokemonsIngenuoComponent;
  let fixture: ComponentFixture<OrdenarPokemonsIngenuoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdenarPokemonsIngenuoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdenarPokemonsIngenuoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
