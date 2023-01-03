import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { AppModule } from "./app/app.module";
import { jsonObj } from './@types/jsonObj';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then((ref) => {
    var winRef = window as jsonObj["ngRef"];

    if (winRef) {
      winRef["destroy"];
    }
    winRef = ref;
  })
  .catch((err) => console.error(err));
