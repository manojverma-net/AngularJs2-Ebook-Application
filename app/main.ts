import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import { HTTP_PROVIDERS } from '@angular/http';

import { appRouterProviders,enableHashRouting } from './app.routes';

  bootstrap(AppComponent,[appRouterProviders,HTTP_PROVIDERS]);

/**
 * Inject enableHashRouting const with application to enable Hash routing
 */
// bootstrap(AppComponent,[appRouterProviders,HTTP_PROVIDERS,enableHashRouting]);
