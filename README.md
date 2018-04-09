# universal-localize-module-loader
Translate lazy-loaded routes using localize-router server-side using Universal.

If you use Universal and localize-router, you are facing a problem: main routes are translated but not lazyloaded routes.
This module loader will help you.

## Where to put this file ?
You need to copy the file `universal-localize-module-map-ngfactory-loader.ts` next to your `app.server.module.ts`.

## How to use

### Before
If you use Universal, your have a `app.server.module.ts` that propably looks like this:

```
import { NgModule, NgModuleFactoryLoader } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    ModuleMapLoaderModule
  ],
  providers: [
    // Add universal-only providers here
  ],
  bootstrap: [ AppComponent ],
})
export class AppServerModule {}

```

### After
Add this loader as provider in your `app.server.module.ts` using this code :

```
{
  provide: NgModuleFactoryLoader,
  useClass: UniversalLocalizeModuleMapNgFactoryLoader
}
```

Result will look like this:
```
import { NgModule, NgModuleFactoryLoader } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { UniversalLocalizeModuleMapNgFactoryLoader } from './universal-localize-module-map-ngfactory-loader';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    ModuleMapLoaderModule
  ],
  providers: [
    // Add universal-only providers here
    {
      provide: NgModuleFactoryLoader,
      useClass: UniversalLocalizeModuleMapNgFactoryLoader
    }
  ],
  bootstrap: [ AppComponent ],
})
export class AppServerModule {}
```
