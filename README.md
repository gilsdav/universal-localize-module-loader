# universal-localize-module-loader
Translate lazy-loaded routes using localize-router server-side using Universal.

If you use Universal and localize-router, you are facing a problem: main routes are translated but not lazyloaded routes.
This module loader will help you.

## How to install

Use this command : `npm install --save localize-router-lazy-universal-module-loader`

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
Add the provider `LazyUniversalModuleLoaderProvider` in your `app.server.module.ts`.

Result will look like this:
```
import { NgModule, NgModuleFactoryLoader } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { LazyUniversalModuleLoaderProvider } from 'localize-router-lazy-universal-module-loader';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    ModuleMapLoaderModule
  ],
  providers: [
    // Add universal-only providers here
    LazyUniversalModuleLoaderProvider
  ],
  bootstrap: [ AppComponent ],
})
export class AppServerModule {}
```
