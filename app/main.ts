import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import { HTTP_PROVIDERS } from '@angular/http';

import { appRouterProviders } from './app.routes';

bootstrap(AppComponent,[appRouterProviders,HTTP_PROVIDERS]);
