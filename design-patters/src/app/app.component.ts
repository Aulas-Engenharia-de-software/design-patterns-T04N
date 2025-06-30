import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContadorSingletonComponent } from "./contador-singleton/contador-singleton.component";
import { ContadorSingletonIngenuoComponent } from "./contador-singleton-ingenuo/contador-singleton-ingenuo.component";
import { OrdenarPokemonsStrategyComponent } from "./strategy/ordenar-pokemons-strategy.component";
import { OrdenarPokemonsIngenuoComponent } from "./ordenar-pokemons-ingenuo/ordenar-pokemons-ingenuo.component";
@Component({
  selector: 'app-root',
  imports: [ContadorSingletonComponent, ContadorSingletonIngenuoComponent, RouterOutlet, OrdenarPokemonsStrategyComponent, OrdenarPokemonsIngenuoComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']  
})

export class AppComponent {
  title = 'design-patters';
}
