import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { AppModule } from "./app/app.module";

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then((ref) => {
    type obj = { [x: string]: any };
    var winRef = window as obj["ngRef"];

    if (winRef) {
      winRef["destroy"];
    }
    winRef = ref;
  })
  .catch((err) => console.error(err));
