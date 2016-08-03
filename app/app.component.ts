import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';

@Component({
  selector: 'my-app',
  template: `
    <pm-header></pm-header>
      <div class="container"> 
        <router-outlet></router-outlet> 
      </div>
    <pm-footer></pm-footer>
  `,
  directives:[HeaderComponent, FooterComponent, ROUTER_DIRECTIVES]
})
export class AppComponent { }
