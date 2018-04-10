import { LazyUniversalModuleLoader } from "./src/lazy-universal-module-loader";
import { NgModuleFactoryLoader } from "@angular/core";

export * from "./src/lazy-universal-module-loader";

export const LazyUniversalModuleLoaderProvider = {
  provide: NgModuleFactoryLoader,
  useClass: LazyUniversalModuleLoader
};
